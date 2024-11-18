import React from 'react'
import { Badge } from "@/components/ui/badge"

interface ProductRowProps {
  product: {
    name: string
    price: string
    stocked: boolean
  }
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <tr className="hover:bg-muted/50 transition-colors">
      <td className="border-b border-border px-4 py-2">
        <div className="flex items-center">
          {product.name}
          {!product.stocked && (
            <Badge variant="destructive" className="ml-2">
              Agotado
            </Badge>
          )}
        </div>
      </td>
      <td className="border-b border-border px-4 py-2 text-right">{product.price}</td>
    </tr>
  )
}

export default ProductRow

