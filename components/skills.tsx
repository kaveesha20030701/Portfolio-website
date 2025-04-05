import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const programmingSkills = [
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 70 },
  ]

  const webDevSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "React.js", level: 60 },
  ]

  const toolsSkills = [
    { name: "NetBeans", level: 85 },
    { name: "Visual Studio Code", level: 90 },
    { name: "Scene Builder", level: 75 },
    { name: "Git/GitHub", level: 80 },
  ]

  const databaseSkills = [
    { name: "SQL", level: 85 },
    { name: "MySQL", level: 80 },
  ]

  const softSkills = [
    { name: "Time Management", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Teamwork", level: 95 },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical and soft skills that I&apos;ve developed through education and projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
              <CardDescription>My proficiency in various programming languages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>My web development skills and frameworks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {webDevSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Development Tools</CardTitle>
              <CardDescription>Tools and environments I'm proficient with</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {toolsSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>My interpersonal and professional skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Database</CardTitle>
              <CardDescription>My database management skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {databaseSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

