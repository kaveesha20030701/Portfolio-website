import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m a second-year Computer Science undergraduate at University of Westminster, excited to use my
              developing programming and problem-solving skills in a challenging IT internship.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold">Quick Learner</h3>
              <p className="text-center text-muted-foreground">
                I&apos;m a self-starter and quick learner, always eager to expand my knowledge.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Code className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold">Problem Solver</h3>
              <p className="text-center text-muted-foreground">
                I enjoy tackling complex problems and finding efficient solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold">Team Player</h3>
              <p className="text-center text-muted-foreground">
                I thrive in collaborative environments and value effective communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

