import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] resize-none w-full border border-transparent border-b-gray-light bg-transparent px-4 py-3.5 text-base/5 font-medium placeholder:text-gray focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 focus:border-b-secondary focus:text-secondary",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
