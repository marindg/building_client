"use client";

import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <ClerkProvider>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
}

export default layout;
