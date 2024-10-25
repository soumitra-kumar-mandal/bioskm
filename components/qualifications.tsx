import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const qualifications = [
  { title: "B. Sc. in ZOOLOGY", institution: "Maulana Azad College", university: "Under University of Calcutta", year: "2014" },
  { title: "M. Sc. in ZOOLOGY", institution: "University of Kalyani", university: "(MAIN CAMPUS)", year: "2016" },
  { title: "B. Ed.", institution: "Satish B. Ed. College", university: "Under University of Gour Banga", year: "2018" },
  { title: "MR Trainer", institution: "PMKVY", university: "Under Skill India", year: "2019" },
]

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-16 bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Academic Qualifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md text-white border-accent hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-accent">{qual.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80">{qual.institution}</p>
                <p className="text-sm text-white/80">{qual.university}</p>
                <p className="text-sm font-semibold mt-2 text-secondary">{qual.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}