import React from 'react'

interface ProductCategoryRowProps {
  category: string
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({ category }) => {
  return (
    <tr>
      <th colSpan={2} className="bg-secondary/20 text-left px-4 py-2 font-semibold text-secondary-foreground rounded-t">
        {category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow