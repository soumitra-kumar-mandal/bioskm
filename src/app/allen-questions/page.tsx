"use client"

import { useState } from 'react'
import { Search, Download } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import QuestionsHeader from '@/app/questions/questions-header'
import QuestionsFooter from '@/app/questions/questions-footer'
import Preloader from '../../../components/preloader'

const pdfList = [
  { title: "Allen Biology Chapter 1", url: "/pdfs/allen-biology-ch1.pdf" },
  { title: "Allen Chemistry Chapter 1", url: "/pdfs/allen-chemistry-ch1.pdf" },
  { title: "Allen Physics Chapter 1", url: "/pdfs/allen-physics-ch1.pdf" },
  // Add more PDFs as needed
]

export default function AllenQuestionsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPdfs = pdfList.filter(pdf => 
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-info to-primary">
        <Preloader />
      <QuestionsHeader title="Allen Questions" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="Search PDFs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPdfs.map((pdf, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <span className="font-medium">{pdf.title}</span>
                <Button asChild variant="outline" size="sm">
                  <a href={pdf.url} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <QuestionsFooter />
    </div>
  )
}
