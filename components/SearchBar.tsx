import React from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface SearchBarProps {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (value: string) => void
  onInStockOnlyChange: (value: boolean) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) => {
  return (
    <div className="flex flex-col items-start justify-center space-y-4 mb-6">
      <Input
        type="text"
        value={filterText}
        placeholder="Buscar productos..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="w-full"
      />
      <div className="space-x-2">
        <Checkbox
          id="inStock"
          checked={inStockOnly}
          onCheckedChange={(checked) => onInStockOnlyChange(checked as boolean)}
        />
        <Label htmlFor="inStock" className="text-sm text-muted-foreground">Mostrar solo productos en stock</Label>
      </div>
    </div>
  )
}

export default SearchBar
