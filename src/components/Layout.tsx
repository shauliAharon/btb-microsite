import { ReactNode } from "react";
import StickyHeader from "./StickyHeader";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-btb-black text-white">
      <StickyHeader />
      <main className="pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">{children}</main>

      <footer className="bg-black/90 py-6 sm:py-8 mt-16 sm:mt-20">
        <div className="flex justify-center text-gray-400 px-4">
          <p className="text-sm sm:text-base">
            © 2025 Be The Boss. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
