import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UTILITIES_DATA } from "@/data/utilities-data";
import { Calendar, ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <ScrollArea className="h-[calc(100vh-128px)]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 gap-4 pb-10 mt-16">
        {UTILITIES_DATA.map((util) => (
          <Button
            asChild
            key={util.id}
            className="flex-col text-wrap items-start h-full text-inherit"
            variant="ghost"
          >
            <Link
              to={`/utility/${util.id}`}
              className="space-y-4 bg-primary-foreground/60 rounded-lg p-4"
            >
              <div className="flex items-center space-x-2.5">
                <h2 className="text-lg capitalize">{util.title}</h2>
                <ExternalLink className="size-4" />
              </div>
              <p className="text-primary/90 line-clamp-4 text-wrap">{util.description}</p>
              <div className="flex flex-col sm:flex-row items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="size-3.5" />
                  <p>
                    Criado em: <strong>{util.createdAt}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-3.5" />
                  <p>
                    Editado em: <strong>{util.updatedAt}</strong>
                  </p>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};
