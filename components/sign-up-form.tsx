"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, Lock } from "lucide-react"
import Link from "next/link"
import { signUp } from "@/lib/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="w-full bg-tourism-teal hover:bg-tourism-teal/90 text-white">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing up...
        </>
      ) : (
        "Sign Up"
      )}
    </Button>
  )
}

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUp, null)

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Create Admin Account</h1>
        <p className="text-lg text-gray-600">Sign up to access the admin dashboard</p>
      </div>

      <form action={formAction} className="space-y-6">
        {state?.error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">{state.error}</AlertDescription>
          </Alert>
        )}

        {state?.success && (
          <Alert className="border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">{state.success}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input id="email" name="email" type="email" placeholder="admin@tourism.com" className="pl-10" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input id="password" name="password" type="password" className="pl-10" required />
            </div>
          </div>
        </div>

        <SubmitButton />

        <div className="text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/admin/login" className="text-tourism-teal hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  )
}
