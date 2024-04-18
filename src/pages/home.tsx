import { baseAnimation } from "@/animations/base-animation";
import { CardsList } from "@/components/cards-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";

export const Home: React.FC = () => {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <motion.div
        variants={baseAnimation}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.2 }}
        className="space-y-2 px-4 md:px-6 mt-4 mb-6 lg:mt-6"
      >
        <h1 className="text-2xl md:text-5xl font-semibold">
          Kit de Utilitários para seu Desenvolvimento
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Explore nossa coleção de códigos de programação e scripts prontos para
          uso. Facilite seu trabalho com nossa seleção de utilitários para
          desenvolvimento.
        </p>
      </motion.div>

      <Separator className="my-6" />

      <CardsList />
    </ScrollArea>
  );
};
