'use client'

import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

interface FilterableProductTableProps {
  products: Product[]
}

const FilterableProductTable: React.FC<FilterableProductTableProps> = ({ products }) => {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-2xl font-bold text-center text-primary">Catálogo de Productos</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </CardContent>
    </Card>
  )
}

export default FilterableProductTable