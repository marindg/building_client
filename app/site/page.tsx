import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import project from "@/contents/project.json";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Check } from "lucide-react";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section
        className={cn(
          "h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ",
          inter.className
        )}
      >
        <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(var(--point-side)_1px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <p
          className={cn(
            "text-center text-xl ",
            inter.className
          )}
        >
          {project.site.hookTitle}
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1
            className={cn(
              "text-9xl font-bold text-center md:text-[300px]",
              montserrat.className
            )}
          >
            {project.title}
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-10px]">
          <Image
            src={"/assets/preview.png"}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute "></div>
        </div>
      </section>
      <section className="h-full flex justify-center items-center flex-col gap-4 mt-20">
        <h2 className="text-4xl text-center">
          {project.site.secondHookTitle}
        </h2>
        <p className="text-muted-foreground text-center w-[40%] max-w-[800px] min-w-[300px]">
          {project.site.paragraph}
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {project.site.pricingCards.map((card, index) => (
            <Card
              key={index}
              style={{ backgroundImage: "var(--gradient)" }}
              className="w-[300px] flex flex-col justify-between bg-background p-3 rounded-2xl shadow-lg relative m-4"
            >
              <div
                className={clsx(
                  "bg-background h-full w-full rounded-xl flex flex-col justify-between",
                  {
                    "border-4 border-border-card-forground":
                      card.border === true,
                  }
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("", {
                      "text-muted-foreground":
                        card.border === false,
                    })}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription>
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">
                    {card.price}
                  </span>
                  <span className="text-muted-foreground">
                    {card.routine}
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    {card.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex gap-2 items-center"
                      >
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agency?plan=${card.priceId}`}
                    className={clsx(
                      "w-full text-center text-primary-foreground bg-primary   p-2 rounded-md",
                      {
                        "!bg-muted-foreground":
                          card.border === true,
                      }
                    )}
                  >
                    {card.linkText}
                  </Link>
                </CardFooter>
              </div>
            </Card>
            // </div>
          ))}
        </div>
      </section>
    </>
  );
}
