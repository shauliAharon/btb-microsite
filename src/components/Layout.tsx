import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-btb-black text-white">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-btb-gold">BTB</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-btb-gold transition-colors">
              Home
            </a>
            <a href="/signup" className="hover:text-btb-gold transition-colors">
              Sign Up
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="pt-20">{children}</main>

      <footer className="bg-black/90 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Be The Boss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
