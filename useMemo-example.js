import React, { useMemo } from "react"

const ProductList = ({ products, filters }) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.keys(filters).every((key) => product[key] === filters[key])
    })
  }, [products, filters])

  return (
    <div>
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
