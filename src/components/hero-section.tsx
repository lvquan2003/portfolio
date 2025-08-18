import Image from "next/image"
import type { FC } from "react"

interface HeroSectionProps {
  id: string
}

const HeroSection: FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen pt-24 px-8 flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <Image
              src="https://res.cloudinary.com/dsq2ux962/image/upload/v1755501342/gen-h-abcd_wfnaye.jpg"
              alt="Avatar"
              width={300}
              height={300}
              className="mx-auto rounded-full border-2"
            />
          </div>
        </div>
        <div>
          <p className="mb-4">
            Hello! I am <span className="text-purple-500">Le Van Quan</span>
          </p>
          <h1 className="text-5xl font-bold mb-2">A  who</h1>
          <h1 className="text-5xl font-bold mb-4">
            Judges a book by its <span className="text-purple-500">cover</span>...
          </h1>
          <p className="text-gray-400">Because if the cover does not impress you what else can?</p>

          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-2">{'I\'m a Software Engineer.'}</h2>
            <p className="mb-8">
              Student at University of Information Technology VNU-HCM
            </p>
            <p className="mb-8">
              {'Currently, I am a Fullstack Software Engineer at'} <span className="text-blue-500">● BEQ Holdings</span>
            </p>

            <p className="text-gray-300">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and
              delightful digital products that create an equilibrium between user needs and business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
