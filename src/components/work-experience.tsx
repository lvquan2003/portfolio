import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface WorkExperienceProps {
  id: string
}

const WorkExperience: FC<WorkExperienceProps> = ({ id }) => {
  const workItems = [
    {
      icon: "★",
      title: "BEQ HOLDINGS",
      description: "Developed and enhanced features platforms using Next.js, Payload CMS, and Shadcn UI, including data visualization with charts, referral systems, and transaction management.",
    },
    {
      icon: "🎈",
      title: "BEQ HOLDINGS",
      description: "Integrated APIs for wallet connectivity, smart contract data, and equity calculations, optimizing data fetching and cronjob automation for real-time updates.",
    },
    {
      icon: "★",
      title: "BEQ HOLDINGS",
      description: "Developed and enhanced features platforms using Next.js, Payload CMS, and Shadcn UI, including data visualization with charts, referral systems, and transaction management.",
    },
    {
      icon: "🎈",
      title: "BEQ HOLDINGS",
      description: "Integrated APIs for wallet connectivity, smart contract data, and equity calculations, optimizing data fetching and cronjob automation for real-time updates.",
    }
  ]

  return (
    <section id={id} className="min-h-screen py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workItems.map((item, index) => (
            <Card key={index} className="bg-[#1a0f3d] border-none shadow-lg overflow-hidden">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-purple-500 text-purple-500 hover:bg-purple-500/20"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-xl">
            {"I'm currently looking to join a"} <span className="text-purple-500">cross-functional</span> team
          </p>
          <p className="text-gray-300">{"that values improving people's lives through accessible design"}</p>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
