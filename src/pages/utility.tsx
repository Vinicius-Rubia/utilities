import { baseAnimation } from "@/animations/base-animation";
import { Code } from "@/components/code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { UTILITIES_DATA } from "@/data/utilities-data";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

export const Utility: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { copyText, copyToClipboard } = useCopyToClipboard();

  const utilityCurrent = UTILITIES_DATA.find((utility) => utility.id === id);
  const pathToCreateFile = `mkdir -p src/hooks && touch src/hooks/${utilityCurrent?.code.titleFile}`;

  const handleCopyPath = () => {
    copyToClipboard(pathToCreateFile);
  };

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="px-4 md:px-6 mt-4 mb-6 lg:mt-6">
        <motion.div
          variants={baseAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-2">
            <h1 className="text-2xl md:text-5xl font-semibold">
              {utilityCurrent?.title}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {utilityCurrent?.description}
            </p>
          </div>
          <Separator className="my-6" />
        </motion.div>

        <motion.div
          variants={baseAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="my-4 flex items-center gap-2">
            <code>
              <Badge variant="secondary" className="rounded-md">
                {pathToCreateFile}
              </Badge>
            </code>
            <Button
              disabled={copyText}
              variant="ghost"
              className="p-0 h-auto [&>svg]:size-3"
              onClick={handleCopyPath}
            >
              {copyText ? <Check className="text-green-500" /> : <Copy />}
            </Button>
          </div>
        </motion.div>

        <Code utility={utilityCurrent} />
      </div>
    </ScrollArea>
  );
};
