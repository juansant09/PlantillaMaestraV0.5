import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base/5 font-medium transform-gpu transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(111,208,196,0.28)] [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-secondary shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4)] text-white hover:bg-[#b58c4b]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "bg-transparent text-primary shadow-none ring-inset ring-1 ring-primary duration-300 hover:bg-primary hover:text-white",
        secondary:
          "",
        ghost: "",
        link: "text-primary hover:underline",
      },
      size: {
        default: "px-4 py-3",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
