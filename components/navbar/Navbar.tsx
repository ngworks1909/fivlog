import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavLinks from "./NavLinks"
import NavProgress from "./NavProgress"


export default function Navbar() {

  return (
    <div className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <NavLinks/>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4 mt-4">
                    <NavLinks/>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <NavProgress/>
    </div>
  )
}