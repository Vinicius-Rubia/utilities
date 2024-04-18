import { copyTextToClipboard } from "@/utils";
import { useState } from "react";

export const useCopyToClipboard = () => {
  const [copyText, setCopyText] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    setCopyText(true);
    copyTextToClipboard(text);
    setTimeout(() => {
      setCopyText(false);
    }, 1000);
  };

  return { copyText, copyToClipboard };
};
