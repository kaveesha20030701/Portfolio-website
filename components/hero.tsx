import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m Kaveesha Liyanaarachchi
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Computer Science Undergraduate at University of Westminster
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/kaveesha-liyanaarachchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com/kaveesha20030701" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary w-[300px] h-[300px]">
              <img
                src="/Aiesec.jpg"
                alt="Kaveesha Liyanaarachchi"
                className="object-cover w-full h-full object-center"
      
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

