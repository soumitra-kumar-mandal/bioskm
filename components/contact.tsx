"use client"

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { useToast } from "../components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-primary via-info to-secondary">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/20 text-white placeholder-white/60 border-accent"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/20 text-white placeholder-white/60 border-accent"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/20 text-white placeholder-white/60 border-accent"
            />
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">Send Message</Button>
        </form>
      </div>
    </section>
  )
}