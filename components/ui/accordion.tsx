'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'
import IconPlus from '@/components/icons/icon-plus'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            'overflow-hidden rounded-xl border border-gray-light bg-white',
            className,
        )}
        {...props}
    />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        large?: boolean
    }
>(({ className, children, large, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'relative flex w-full flex-1 items-center justify-between gap-5 bg-gray-200 px-4 py-2.5 text-left font-medium transition-all before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:bg-secondary before:duration-500 data-[state=open]:before:inset-x-0 data-[state=open]:before:w-full [&[data-state=open]>.plus]:-rotate-90 [&[data-state=open]>.plus_.path1]:hidden',
                {
                    'py-3.5 text-base/6 lg:text-lg': large,
                },
                className,
            )}
            {...props}
        >
            {children}
            <IconPlus className="plus size-5 shrink-0 duration-300" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down leading-6 overflow-hidden transition-all"
        {...props}
    >
        <div className={cn('px-4 py-2.5', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
