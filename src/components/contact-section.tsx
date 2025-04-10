import type { FC } from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

interface ContactSectionProps {
  id: string
}

const ContactSection: FC<ContactSectionProps> = ({ id }) => {

  const introText =
    "I’m currently looking to join a cross-functional team that values improving lives through accessible design. Have a project in mind? Let’s connect.";
  return (
    <section id={id} className="min-h-screen py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Contact</h2>

        <p className="text-gray-300 mb-4">
          {introText}
        </p>
        <p className="text-gray-300">Phone: +84 83 299 5137</p>
        <p className="text-gray-300 mb-8">Gmail: lvquanuit@gmail.com</p>

        <div className="flex gap-4">
          <Link href="https://github.com/lvquan2003" className="text-white hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/lvquan2003" className="text-white hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
