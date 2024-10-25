'use client';

import Image from 'next/image'
import { Button } from "../components/ui/button"
import { useCallback } from 'react'

export default function HeroSection() {
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-primary via-info to-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <Image
              src="https://i.imgur.com/u9cH6nY.jpeg"
              alt="BioSkm Institution Logo"
              width={200}
              height={200}
              className="mx-auto md:mx-0 rounded-full mb-6 border-4 border-accent"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SouMitrA KuMaR MaNdaL
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
              Shape <span className="underline decoration-secondary underline-offset-4">Minds</span>,
              Inspire <span className="underline decoration-info underline-offset-4">Futures</span>!
            </h2>
            <p className="text-lg text-white mb-6">
              Learn Biology in PARALLEL WORLD. Let&apos;s learn and grow together!
            </p>
            <p className="text-lg text-white mb-8">
              9+ Years Teaching Experience!
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => scrollToSection('about')}
            >
              Discover More
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://i.imgur.com/EyVyTcY.jpeg"
              alt="BioSkm Soumitra Kumar Mandal Teacher Photo"
              width={400}
              height={400}
              className="rounded-lg shadow-xl border-4 border-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
