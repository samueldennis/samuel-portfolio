"use client";

import Link from "next/link";

import Container from "@/components/shared/container";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
            SW
          </div>

          <div className="hidden sm:block">
            <p className="font-semibold leading-none">
              {BRAND.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {BRAND.role}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Resume CTA */}
        <Button asChild>
          <Link href={BRAND.resume}>
            Resume
          </Link>
        </Button>
      </Container>
    </header>
  );
}