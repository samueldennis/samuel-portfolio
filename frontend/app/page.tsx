import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/layout/page-wrapper";
import Section from "@/components/layout/section";

import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />

      <Section id="hero">
        <div className="flex min-h-[80vh] items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Enterprise Data & Software Engineer
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Designing software that scales.
            </h1>

            <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl">
              I build enterprise backend systems, AI-powered applications,
              cloud-native platforms, and modern data solutions that help
              organizations automate operations and make better decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#projects">
                <Button size="lg">
                  View Projects
                </Button>
              </Link>

              <Link href={BRAND.resume}>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </PageWrapper>
  );
}