import { ModeToggle } from "@/components/global/mode-toggle";
import project from "@/contents/project.json";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface NavigationProps {
  user?: null | user;
}

const Navigation = ({ user }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = scrollY;
      if (position <= 0) {
        setIsScrolled(false);
      } else setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        clsx(
          "fixed w-full top-0 p-4 flex items-center justify-between z-10 transition",
          isScrolled === true && "bg-background"
        ),
        inter.className
      )}
    >
      <aside>
        <Link
          href={"/site"}
          className="flex items-center gap-2"
        >
          <Image
            src={"/assets/logo.svg"}
            width={40}
            height={40}
            alt="logo"
          />
          <span className="text-xl font-bold">
            {project.title}.
          </span>
        </Link>
      </aside>
      <nav className="hidden md:block absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
