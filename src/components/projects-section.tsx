import type { FC } from "react"
import Image from "next/image"

interface ProjectsSectionProps {
  id: string
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <p className="text-purple-500 mb-2">Featured Project</p>
          <h2 className="text-4xl font-bold mb-8">Example Project</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 mb-8">
                A web app for visualizing personalized spotify data. View your top artists, top tracks, recently played
                tracks, and detailed audio information about each track. Create and save new playlists of recommended
                tracks based on your existing playlists and more.
              </p>
              <div className="flex gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Project Screenshot"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Project Screenshot"
                width={500}
                height={300}
                className="w-full h-auto border border-gray-700 rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-purple-500 mb-2">Featured Project</p>
              <h2 className="text-4xl font-bold mb-8">Trello Web App</h2>

              <div className="bg-[#1a0f3d] p-6 rounded-lg">
                <p className="text-gray-300 mb-8">
                On the frontend, I built the user interface using ReactJS and Material UI, incorporating features such as a dark mode/light mode toggle
                and seamless drag-and-drop functionality for columns and cards using DND Kit.
                </p>

                <p className="text-gray-300 mb-8">
                On the backend, I implemented RESTful APIs with Node.js and Express to handle data management, including validation to ensure data
                integrity. Additionally, I created functionalities for adding, deleting, and updating columns and cards on the board, ensuring smooth
                interactions and robust performance across both the frontend and backend.
                </p>


                
                <div className="flex gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
