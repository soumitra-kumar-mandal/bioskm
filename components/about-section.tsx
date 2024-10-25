import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-secondary to-info">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-white mb-6">
              I&apos;m an innovative teacher specializing in modern educational 
              techniques, committed to making learning engaging and accessible 
              to all students. With a focus on innovative teaching methods, 
              I strive to simplify complex concepts, ensuring that students not 
              only understand the material but are also inspired to explore the 
              wonders of biology further.
            </p>
            <p className="text-lg text-white">
              My approach integrates the latest educational technologies, 
              fostering an interactive and dynamic learning environment that 
              nurtures curiosity and critical thinking.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://i.imgur.com/O1ckrK3.jpeg"
              alt="About BioSkm Teacher"
              width={300}
              height={400}
              className="rounded-lg shadow-xl mx-auto border-4 border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
