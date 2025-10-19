'use client'

import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import { ScreenLoading } from '@/components/custom/screen-loading'
import { useEffect, useState } from 'react'


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 1500)
    }, [])

    if (isLoad) {
        return <ScreenLoading />
    }
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="-mt-[100px] grow">{children}</div>
            <Footer />

        </div>
    )
}
