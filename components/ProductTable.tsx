import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

interface ProductTableProps {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

const ProductTable: React.FC<ProductTableProps> = ({ products, filterText, inStockOnly }) => {
  const rows: JSX.Element[] = []
  let lastCategory: string | null = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      )
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    )
    lastCategory = product.category
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-2/3">Nombre</TableHead>
          <TableHead className="w-1/3 text-right">Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  )
}

export default ProductTable
