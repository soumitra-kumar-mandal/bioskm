import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const achievements = [
  {
    title: "MADHYAMIK (90+)",
    students: [
      "Simon - 94 (2018)",
      "Rajdeep - 92 (2018)",
      "Koustav - 100 (2023)",
      "Annesha - 100 (2024)",
      "Kartick - 93 (2024)",
    ]
  },
  {
    title: "H.S. (90+)",
    students: [
      "Priyanka - 96 (2019)",
      "Amrita - 99 (2020)",
      "Utsha - 98 (2020)",
      "Snehasish - 92 (2020)",
      "Afrida - 98 (2022)",
      "Shreyoshi - 96 (2022)",
      "Soumindri - 96 (2022)",
      "Subhojit - 92  (2024)",
      "Banisha - 91 (2024)",
      "Dipannita - 90 (2024)",
    ]
  },
  {
    title: "MBBS",
    students: [
      "Simon",
      "Biswadwip",
      "Moulima",
      "Tamaghana",
      "Nandini",
      "Sagar",
    ]
  },
  {
    title: "NURSING",
    students: [
      "Priyanka",
      "Adrita",
      "Nandita",
      "Shreyoshi",
    ]
  },
  {
    title: "AGRICULTURE",
    students: [
      "Amrita (2020)",
      "Utsha (2020)",
    ]
  },
  {
    title: "HONS. (BIO)",
    students: [
      "Pallabi",
      "Dipanwita",
      "Soumindri",
    ]
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gradient-to-r from-secondary to-info">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Achievements of BioSkmians</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md text-white border-accent hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-accent">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {achievement.students.map((student, studentIndex) => (
                    <li key={studentIndex} className="text-sm text-white/80">{student}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}