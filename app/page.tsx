"use client";

import HeroSection from "@/components/home/hero-section";
import HomeHeader from "@/components/layout/header/home-header";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const { isLoading } = useAuth();

  if (isLoading) return;

  return (
    <main className="min-h-screen">
      <HomeHeader />
      <HeroSection />
    </main>
  );
}
