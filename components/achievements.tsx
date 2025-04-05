import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements & Activities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My accomplishments and extracurricular involvement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle>Achievements</CardTitle>
              </div>
              <CardDescription>Competitions and recognitions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">IEEEXtreme 18.0 Competition</h4>
                <p className="text-muted-foreground">Participated in the global 24-hour programming competition.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">JapuraXtreme 2024</h4>
                <p className="text-muted-foreground">
                  Participated in the competition organized by the IEEE Computer Society at University of Sri
                  Jayawardhanapura.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Inter-school IT Competition</h4>
                <p className="text-muted-foreground">
                  First runners-up in the competition organized by the IT society of Richmond College, Galle.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Extracurricular Activities</CardTitle>
              </div>
              <CardDescription>Clubs and organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">At Informatics Institute of Technology:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Member of AIESEC in IIT (People's Management Team and Business Development Team)</li>
                    <li>Member of IEEE student branch of IIT</li>
                    <li>Member of the Event and Logistics Team in Mozilla Campus Club at IIT</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">At School:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Senior Member of the Media Unit (2013 - 2020)</li>
                    <li>Senior Member of the Quiz Club (2016 - 2019)</li>
                    <li>Member of the Junior choir (2012 – 2015)</li>
                    <li>Member of the Table Tennis School Team (2018 – 2022)</li>
                    <li>Member of the Aqua Club (2017 – 2019)</li>
                    <li>Member of the IT Society (2018 – 2019)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

