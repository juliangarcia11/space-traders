import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { DarkModeToggle } from "~/app/_components/dark-mode-toggle";

export default function AboutPage() {
  return (
    <Card
      className={`m-4 p-4`}
      header={
        <span className="flex flex-row justify-between">
          <h1 className="m-4 text-4xl font-bold" data-testid="about-title">
            About
          </h1>
          <DarkModeToggle />
        </span>
      }
      footer={
        <Link href="/" data-testid="home-link">
          <Button label="Home" />
        </Link>
      }
    >
      <p className="m-4">
        Primereact, Tailwind CSS, and a dark mode toggle have been added to the
        project to demonstrate how to integrate third-party libraries and
        components.
      </p>
    </Card>
  );
}
