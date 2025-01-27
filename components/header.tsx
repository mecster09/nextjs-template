import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PWA Template
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

