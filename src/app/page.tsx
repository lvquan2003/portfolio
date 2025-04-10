"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WorkExperience from "@/components/work-experience"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle hash links on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1) // Remove the # character
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0e0525] text-white">
      <Header scrollToSection={scrollToSection} />

      <main>
        <HeroSection id="home" />
        <WorkExperience id="about" />
        <ProjectsSection id="lab" />
        <ContactSection id="contact" />
      </main>
    </div>
  )
}
