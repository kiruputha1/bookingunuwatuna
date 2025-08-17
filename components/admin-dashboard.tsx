"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Hotel, MapPin, FileText, Calendar, MessageSquare, Users, TrendingUp, Eye, Star } from "lucide-react"

// Mock data - in real app this would come from Supabase
const stats = [
  {
    title: "Total Rentals",
    value: "156",
    change: "+12%",
    changeType: "positive" as const,
    icon: Hotel,
  },
  {
    title: "Active Services",
    value: "24",
    change: "+3%",
    changeType: "positive" as const,
    icon: MapPin,
  },
  {
    title: "Blog Posts",
    value: "89",
    change: "+8%",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    title: "Total Bookings",
    value: "1,247",
    change: "+18%",
    changeType: "positive" as const,
    icon: Calendar,
  },
  {
    title: "Messages",
    value: "43",
    change: "-2%",
    changeType: "negative" as const,
    icon: MessageSquare,
  },
  {
    title: "Active Users",
    value: "2,156",
    change: "+24%",
    changeType: "positive" as const,
    icon: Users,
  },
]

const recentBookings = [
  {
    id: "1",
    customer: "John Smith",
    item: "Luxury Beach Resort - Galle",
    type: "Hotel",
    amount: "$450",
    status: "confirmed",
    date: "2024-01-20",
  },
  {
    id: "2",
    customer: "Sarah Johnson",
    item: "Sigiriya Day Tour",
    type: "Service",
    amount: "$85",
    status: "pending",
    date: "2024-01-19",
  },
  {
    id: "3",
    customer: "Mike Wilson",
    item: "Toyota Prius - Colombo",
    type: "Vehicle",
    amount: "$65",
    status: "confirmed",
    date: "2024-01-19",
  },
  {
    id: "4",
    customer: "Emma Davis",
    item: "Yala Safari Adventure",
    type: "Service",
    amount: "$120",
    status: "confirmed",
    date: "2024-01-18",
  },
]

const topContent = [
  {
    title: "Ultimate Guide to Sigiriya Rock Fortress",
    type: "Blog Post",
    views: "2,847",
    engagement: "4.9",
  },
  {
    title: "Luxury Beach Resort - Mirissa",
    type: "Rental",
    views: "1,923",
    engagement: "4.8",
  },
  {
    title: "Kandy Cultural Triangle Tour",
    type: "Service",
    views: "1,654",
    engagement: "4.7",
  },
  {
    title: "Tea Plantation Experience Guide",
    type: "Blog Post",
    views: "1,432",
    engagement: "4.6",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-tourism-navy">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your tourism business.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Export Report</Button>
          <Button className="bg-tourism-teal hover:bg-tourism-teal/90 text-white">Add New Content</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-tourism-teal/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-tourism-teal" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-serif text-xl text-tourism-navy">Recent Bookings</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{booking.customer}</p>
                    <p className="text-sm text-gray-600">{booking.item}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {booking.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{booking.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{booking.amount}</p>
                    <Badge
                      className={`text-xs ${
                        booking.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Content */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-serif text-xl text-tourism-navy">Top Performing Content</CardTitle>
            <Button variant="outline" size="sm">
              Analytics
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 line-clamp-1">{content.title}</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {content.type}
                    </Badge>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Eye className="h-3 w-3 mr-1" />
                      {content.views}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-3 w-3 mr-1" />
                      {content.engagement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-tourism-navy">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <Hotel className="h-6 w-6 text-tourism-teal" />
              <span className="text-sm">Add Rental</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <MapPin className="h-6 w-6 text-tourism-coral" />
              <span className="text-sm">Add Service</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <FileText className="h-6 w-6 text-tourism-gold" />
              <span className="text-sm">Write Blog Post</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <TrendingUp className="h-6 w-6 text-tourism-navy" />
              <span className="text-sm">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
