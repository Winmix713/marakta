import { NavigationMenu } from "@/components/navigation-menu"
import { GuideContent } from "@/components/guide-content"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <GuideContent />
      </main>
    </div>
  )
}

