import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { UTILITIES_DATA } from "@/data/utilities-data";
import { Circle, ExternalLink } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CommandProps {
  open: boolean;
  setValue: (value: boolean) => void;
}

export const Command: React.FC<CommandProps> = ({ open, setValue }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/utility/${id}`);
    setValue(!open);
  };

  return (
    <CommandDialog open={open} onOpenChange={setValue}>
      <CommandInput placeholder="Procure pelo nome do utilitário" />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
        <CommandGroup>
          <CommandItem onSelect={() => handleNavigate("/")}>
            <Circle className="mr-2 w-4 h-4" />
            <span>Início</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Utilitários">
          {UTILITIES_DATA.map((util) => (
            <CommandItem
              key={util.id}
              className="justify-between"
              onSelect={() => handleNavigate(util.id)}
            >
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
  );
};
