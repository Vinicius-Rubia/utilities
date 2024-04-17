import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { UTILITIES_DATA } from '@/data/utilities-data';
import { copyTextToClipboard } from '@/utils';
import { Check, CircleArrowLeft, Copy } from 'lucide-react';
import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Utility: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  const utilityCurrent = UTILITIES_DATA.find((utility) => utility.id === id);

  const copyText = () => {
    setCopied(true);
    if (utilityCurrent) {
      copyTextToClipboard(utilityCurrent.code.exampleCode.trim());
    }
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [id]);

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className='px-4 md:px-6'>
        <Button asChild variant="secondary" size="sm">
          <Link to="/" className='flex items-center gap-2 mb-4'>
            <CircleArrowLeft className='size-5' />
            Voltar
          </Link>
        </Button>

        <div className='space-y-5 mb-4'>
          <h1 className='text-5xl font-semibold'>{utilityCurrent?.title}</h1>
          <p className='w-2/3'>{utilityCurrent?.description}</p>
        </div>
        <ScrollArea className='h-[700px]'>
          <div className="relative min-w-[300px] rounded-xl border bg-gradient-to-br from-primary-foreground/50 to-background/80 p-6 pt-3">
            <div className="-mx-6 mb-6 flex items-center justify-between border-b px-6 pb-3">
              <div className="flex items-center gap-3">
                <div className="rounded px-1.5 py-0.5 text-sm font-medium transition-colors bg-indigo-600 text-slate-50">
                  {utilityCurrent?.code.titleFile}
                </div>
                <div className="rounded px-1.5 py-0.5 text-sm font-medium transition-colors bg-slate-900 text-slate-50 hover:bg-slate-700">
                  {utilityCurrent?.code.languageName}
                </div>
              </div>

              <Button
                size="icon"
                disabled={copied}
                variant="secondary"
                onClick={copyText}
              >
                {copied ? (
                  <Check className="text-green-500 size-4" />
                ) : (
                  <Copy className='size-3' />
                )}
              </Button>
            </div>

            <div className="overflow-auto">
              <pre>
                <code className="language-javascript !p-0">
                  {utilityCurrent?.code.exampleCode.trim()}
                </code>
              </pre>
            </div>
            <span className="absolute left-0 top-1/2 h-48 w-px -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
            <span className="absolute right-0 top-1/4 h-48 w-px -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </ScrollArea>
  )
}
