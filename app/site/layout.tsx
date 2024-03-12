"use client";

import Navigation from "@/components/site/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
}

export default layout;
