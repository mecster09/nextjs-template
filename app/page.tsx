import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to PWA Template</h1>
      <p className="mb-4">
        This is a Progressive Web App template using Next.js 14, TypeScript, Shadcn UI, Tailwind CSS, and Lucide icons.
      </p>
      <Button>Get Started</Button>
    </div>
  )
}

