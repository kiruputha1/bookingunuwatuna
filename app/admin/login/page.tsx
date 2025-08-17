import type { Metadata } from "next"
import AdminLoginForm from "@/components/admin-login-form"

export const metadata: Metadata = {
  title: "Admin Login | Tourism Management",
  description: "Admin access to tourism management system",
  robots: "noindex, nofollow",
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tourism-teal to-tourism-navy flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold text-tourism-navy mb-2">Admin Portal</h1>
            <p className="text-gray-600">Tourism Management System</p>
          </div>
          <AdminLoginForm />
        </div>
      </div>
    </div>
  )
}
