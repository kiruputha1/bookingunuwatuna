import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function BlogNewsletter() {
  return (
    <Card className="bg-gradient-to-br from-tourism-teal to-tourism-navy text-white">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <CardTitle className="font-serif text-lg">Stay Updated</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-white/90">
          Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.
        </p>
        <div className="space-y-2">
          <Input
            placeholder="Your email address"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
          />
          <Button className="w-full bg-tourism-coral hover:bg-tourism-coral/90 text-white">Subscribe Now</Button>
        </div>
        <p className="text-xs text-white/70">No spam, unsubscribe at any time.</p>
      </CardContent>
    </Card>
  )
}
