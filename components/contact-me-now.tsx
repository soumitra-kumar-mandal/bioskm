"use client";

import { Phone } from 'lucide-react'
import { Button } from "../components/ui/button"

export default function ContactMeNow() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me Now</h2>
        <p className="text-xl mb-8">Have questions? Need immediate assistance? Don&apos;t hesitate to call!</p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white"
          onClick={() => window.location.href = 'tel:+917908416319'}
        >
          <Phone className="mr-2 h-5 w-5" /> Call +91 7908416319
        </Button>
      </div>
    </section>
  )
}
