import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>BSc (Hons) Computer Science</CardTitle>
                <CardDescription>2023 - Present</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium">
                Informatics Institute of Technology affiliated with University of Westminster
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modules Completed:</h4>
                <p className="text-muted-foreground">
                  <span className="font-medium">Level 4:</span> Software Development, Web Development, Trends in
                  Computer Science, Mathematics for Computer Science, Computer Systems fundamentals
                </p>
                <p className="text-muted-foreground mt-2">
                  <span className="font-medium">Level 5:</span> Database Systems, Information Systems Security, Object
                  Oriented Programming, Software Development Group Project
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <School className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Sanghamitta Girls&apos; College</CardTitle>
                <CardDescription>2009 - 2022</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">G.C.E. Advanced Level Examinations (Physical Stream) - 2022</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Combined Math - C</li>
                    <li>Chemistry - C</li>
                    <li>Physics - C</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">G.C.E. Ordinary Level Examinations - 2019</h4>
                  <p className="text-muted-foreground mt-2">9A&apos;s</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

