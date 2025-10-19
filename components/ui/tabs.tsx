'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            'bg-muted text-muted-foreground inline-flex items-center rounded-lg p-1 lg:justify-center',
            className,
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            'after:border-l-gray-light hover:text-secondary data-[state=active]:text-secondary relative inline-flex w-full overflow-hidden rounded-lg bg-white px-10 py-3 text-left text-lg font-medium whitespace-nowrap transition-all duration-300 after:absolute after:inset-y-0 after:-left-full after:h-full after:w-1 after:border-24 after:border-y-transparent after:border-r-transparent after:duration-300 hover:rounded-l-none hover:after:left-0 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:rounded-l-none data-[state=active]:after:left-0 sm:w-auto lg:w-full',
            className,
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content ref={ref} className={cn('', className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
