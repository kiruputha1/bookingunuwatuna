"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Reply, Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BlogCommentsProps {
  postId: string
}

export default function BlogComments({ postId }: BlogCommentsProps) {
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // Mock comments - in real app this would fetch from Supabase
  const comments = [
    {
      id: "1",
      author: "Sarah Johnson",
      avatar: "/woman-profile.png",
      content:
        "Amazing guide! I visited Sigiriya last month and this article would have been so helpful. The photography tips are spot on - the golden hour shots are incredible!",
      createdAt: "2024-01-16",
      likes: 12,
      replies: [
        {
          id: "1-1",
          author: "Samantha Perera",
          avatar: "/author-samantha.png",
          content:
            "Thank you Sarah! I'm so glad you found it helpful. The golden hour really does make all the difference for those dramatic shots.",
          createdAt: "2024-01-16",
          likes: 5,
          isAuthor: true,
        },
      ],
    },
    {
      id: "2",
      author: "David Chen",
      avatar: "/man-profile.png",
      content:
        "Planning to visit Sri Lanka next month and Sigiriya is definitely on my list now. Quick question - is it very crowded during peak season?",
      createdAt: "2024-01-17",
      likes: 8,
      replies: [],
    },
    {
      id: "3",
      author: "Priya Patel",
      avatar: "/indian-woman-profile.png",
      content:
        "The historical context you provided is fascinating! I had no idea about the sophisticated water systems. Sri Lanka's ancient engineering is truly remarkable.",
      createdAt: "2024-01-18",
      likes: 15,
      replies: [],
    },
  ]

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would save to Supabase
    console.log("[v0] Submitting comment:", { name, email, content: newComment, postId })
    setNewComment("")
    setName("")
    setEmail("")
    setShowCommentForm(false)
  }

  return (
    <section className="py-12 border-t">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-serif text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Comments ({comments.length})
          </h2>
          <Button onClick={() => setShowCommentForm(!showCommentForm)} className="bg-teal-600 hover:bg-teal-700">
            Leave a Comment
          </Button>
        </div>

        {/* Comment Form */}
        {showCommentForm && (
          <form onSubmit={handleSubmitComment} className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Share your thoughts</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="comment">Comment *</Label>
              <Textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your experience or ask a question..."
                required
                className="mt-1 min-h-[100px]"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Post Comment
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowCommentForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            {/* Main Comment */}
            <div className="flex gap-4">
              <Image
                src={comment.avatar || "/placeholder.svg"}
                alt={comment.author}
                width={40}
                height={40}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                      <span className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                </div>

                <div className="flex items-center gap-4 mt-2 text-sm">
                  <Button variant="ghost" size="sm" className="gap-1 text-gray-500 hover:text-red-500">
                    <Heart className="w-4 h-4" />
                    {comment.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                    <Reply className="w-4 h-4" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>

            {/* Replies */}
            {comment.replies.map((reply) => (
              <div key={reply.id} className="ml-12 flex gap-4">
                <Image
                  src={reply.avatar || "/placeholder.svg"}
                  alt={reply.author}
                  width={32}
                  height={32}
                  className="rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{reply.author}</h4>
                        {reply.isAuthor && (
                          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Author</span>
                        )}
                        <span className="text-xs text-gray-500">{new Date(reply.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{reply.content}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <Button variant="ghost" size="sm" className="gap-1 text-gray-500 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                      {reply.likes}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </section>
  )
}
