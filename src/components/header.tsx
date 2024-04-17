import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { UTILITIES_DATA } from "@/data/utilities-data";
import { cn } from "@/lib/utils";
import { Circle, Container, ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/utility/${id}`)
    setOpen((open) => !open);
  }
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, []);
  
  return (
    <header className="sticky z-10 top-0 left-0 right-0 h-16 flex items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex gap-6 text-lg font-medium">
        <Link to="/" className="flex items-center">
          <Container className="size-10 mr-4" /> Utilities
        </Link>
      </nav>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Procure pelo nome do utilitário" />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
          <CommandGroup heading="Utilitários">
            
            {UTILITIES_DATA.map((util) => (
              <CommandItem key={util.id} className="justify-between" onSelect={() => handleNavigate(util.id)}>
                <Circle className="mr-2 w-4 h-4" />
                <span>{util.title}</span>
                <CommandShortcut>
                  <ExternalLink />
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className={cn(
            "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
          )}
          onClick={() => setOpen(true)}
        >
          <span className="hidden lg:inline-flex">Procure um utilitário...</span>
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
