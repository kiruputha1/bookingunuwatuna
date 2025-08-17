import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import AdminDashboard from "@/components/admin-dashboard"

export default async function AdminDashboardPage() {
  const supabase = createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Check if user is admin
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (!profile || profile.role !== "admin") {
    redirect("/")
  }

  return <AdminDashboard />
}
