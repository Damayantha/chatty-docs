"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export function Expandable({ title = "Show more", children }: { title?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <button onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-600 transition-colors font-medium">
        <ChevronRight size={14} className={clsx("transition-transform", open && "rotate-90")} />
        {title}
      </button>
      <div className={clsx(
        "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="min-h-0 overflow-hidden">
          <div className="mt-3 pl-4 border-l-2 border-[--border] space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
