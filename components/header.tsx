"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, User } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/pureskin-logo.png" 
              alt="PureSkin Logo" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-foreground">PureSkin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <CartDrawer />

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="search" placeholder="Search products..." className="pl-10 pr-4 py-2 w-full" />
              </div>
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/account"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
