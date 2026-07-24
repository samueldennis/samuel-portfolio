import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({
  children,
}: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {children}
    </main>
  );
}