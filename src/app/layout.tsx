import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Usando Map, Filter e Reduce com React',
    description: 'Exemplo prático de como usar map, filter e reduce com React',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" className="dark">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
