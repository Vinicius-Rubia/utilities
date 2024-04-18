import { baseAnimation } from "@/animations/base-animation";
import { UTILITIES_DATA } from "@/data/utilities-data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const CardsList: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 gap-4 pb-6">
      {UTILITIES_DATA.map((util, index) => (
        <motion.div
          key={index}
          variants={baseAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          <Button
            asChild
            className="flex-col text-wrap items-start h-full text-inherit hover:scale-[1.02] transition-all"
            variant="ghost"
          >
            <Link
              to={`/utility/${util.id}`}
              className="space-y-4 bg-primary-foreground/60 rounded-lg p-4"
            >
              <div className="flex items-center space-x-2.5">
                <h2 className="text-base capitalize md:text-lg">
                  {util.title}
                </h2>
                <ExternalLink className="size-3 md:size-4" />
              </div>
              <p className="text-primary/90 line-clamp-4 text-wrap text-xs md:text-sm">
                {util.description}
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">{util.code.languageCategory}</Badge>
              </div>
            </Link>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};
