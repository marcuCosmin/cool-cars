import { DescriptionSection } from "@/components/pages/home/description-sections/description-sections"
import { WelcomeSection } from "@/components/pages/home/welcome-section"

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <WelcomeSection />
      <DescriptionSection />
    </main>
  )
}

export default Home

