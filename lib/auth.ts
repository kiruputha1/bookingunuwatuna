import { createSupabaseClient } from "./supabase/server"
import bcrypt from "bcryptjs"

export async function createAdminUser(email: string, password: string, fullName: string) {
  const supabase = createSupabaseClient()

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 12)

  // Insert admin user
  const { data, error } = await supabase
    .from("admin_users")
    .insert({
      email,
      password_hash: passwordHash,
      full_name: fullName,
      role: "admin",
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create admin user: ${error.message}`)
  }

  return data
}

export async function verifyAdminUser(email: string, password: string) {
  const supabase = createSupabaseClient()

  // Get admin user by email
  const { data: user, error } = await supabase.from("admin_users").select("*").eq("email", email).single()

  if (error || !user) {
    return null
  }

  // Verify password
  const isValid = await bcrypt.compare(password, user.password_hash)

  if (!isValid) {
    return null
  }

  // Return user without password hash
  const { password_hash, ...userWithoutPassword } = user
  return userWithoutPassword
}
