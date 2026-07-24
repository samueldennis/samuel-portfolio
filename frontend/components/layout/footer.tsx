import Link from "next/link";
import { BRAND } from "@/constants/brand";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div>
          <h3 className="font-semibold">{BRAND.name}</h3>

          <p className="text-sm text-muted-foreground">
            {BRAND.role}
          </p>
        </div>

        <Link
          href={BRAND.github}
          target="_blank"
          className="text-sm hover:underline"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}