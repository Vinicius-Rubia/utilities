import { useToggle } from "@/hooks/useToggle";
import { cn } from "@/lib/utils";
import { CircleArrowLeft, Container } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Command } from "./command";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  const { value, toggleValue } = useToggle(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleValue();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky z-10 top-0 left-0 right-0 h-16 flex items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex gap-2 text-lg font-medium">
        {location.pathname !== "/" && (
          <Button asChild variant="ghost" size="icon">
            <Link to="/">
              <CircleArrowLeft className="size-6" />
            </Link>
          </Button>
        )}
        <Link to="/" className="flex items-center">
          <Container className="size-10 min-[425px]:mr-4" />{" "}
          <p className="hidden min-[425px]:block">Utilities</p>
        </Link>
      </nav>

      <Command open={value} toggleValue={toggleValue} />

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className={cn(
            "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-20"
          )}
          onClick={() => toggleValue}
        >
          <span className="hidden lg:inline-flex">Procure na documentação</span>
          <span className="inline-flex lg:hidden mr-10">Procure...</span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">CTRL +</span>K
          </kbd>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};
