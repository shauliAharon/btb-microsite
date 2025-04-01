import { ReactNode } from "react";
import StickyHeader from "./StickyHeader";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-btb-black text-white">
      <StickyHeader />
      <main className="pt-20">{children}</main>

      <footer className="bg-black/90 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Be The Boss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
