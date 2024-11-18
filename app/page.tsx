'use client'

import React from 'react'
import FilterableProductTable from '../components/FilterableProductTable'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" }
]

const Home: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="fixed top-4 right-4">
          <div className='flex flex-row items-center justify-center gap-x-4'>
          <ModeToggle />
          <Link href="https://github.com/stt0k" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'>
          <GithubIcon />
          </Link>
          </div>
        </div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </ThemeProvider>
  )
}

export default Home