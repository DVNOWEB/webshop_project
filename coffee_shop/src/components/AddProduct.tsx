import React, { useState, useContext } from 'react'
import ProductsContext from '../context/ProductsProvider'

import '../styles/AddProduct.css'

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    sku: '',
  })

  const { products } = useContext(ProductsContext)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, sku: e.target.value })
  }

  console.log(product)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate a unique identifier for the product (e.g., using a timestamp)
    const productId = Date.now()

    // Combine product details with the unique identifier
    const newProduct = { ...product, id: productId }

    // Add the new product to the existing products array
    const updatedProducts = [...products, newProduct]

    // Store the updated products array back in local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts))

    // Clear the form or perform any other necessary actions
    setProduct({
      name: '',
      price: 0,
      description: '',
      sku: '',
    })

    window.location.href = '/'
  }

  return (
    <div className="add_products-container">
      <div>
        <h2>Add New Product</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Enter image URL:</label>
          <input
            className="image-input"
            type="url"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button className="submit_new_product-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
