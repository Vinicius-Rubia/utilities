import { baseAnimation } from "@/animations/base-animation";
import { IUtility } from "@/data/utilities-data";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";
import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface CodeProps {
  utility: IUtility | undefined;
}

export const Code: React.FC<CodeProps> = ({ utility }) => {
  const { copyText, copyToClipboard } = useCopyToClipboard();

  const handleCopyCode = () => {
    utility && copyToClipboard(utility.code.exampleCode.trim());
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [utility?.id]);

  return (
    <motion.div
      variants={baseAnimation}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.2, delay: 0.3 }}
      className="relative rounded-xl border bg-gradient-to-br from-primary-foreground/50 to-background/80 px-6 pt-3 pb-0"
    >
      <div className="-mx-6 mb-6 flex items-center justify-between border-b px-6 pb-3">
        <div className="flex items-center flex-wrap gap-3">
          <Badge className="rounded-md bg-indigo-600 hover:bg-indigo-500 text-slate-50">
            {utility?.code.titleFile}
          </Badge>
          <Badge className="rounded-md bg-slate-800 text-slate-50 hover:bg-slate-700">
            {utility?.code.languageCategory}
          </Badge>
        </div>

        <Button
          size="icon"
          disabled={copyText}
          variant="secondary"
          onClick={handleCopyCode}
        >
          {copyText ? (
            <Check className="text-green-500 size-4" />
          ) : (
            <Copy className="size-3" />
          )}
        </Button>
      </div>

      <ScrollArea className="w-[calc(100vw-100px)]">
        <pre className="outline-none pb-4">
          <code className="language-javascript !p-0">
            {utility?.code.exampleCode.trim()}
          </code>
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <span className="absolute left-0 top-1/2 h-full w-px -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
      <span className="absolute right-0 top-1/2 h-full w-px -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
    </motion.div>
  );
};
