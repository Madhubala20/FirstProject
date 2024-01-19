import React from 'react'
import ProductCard from './ProductCard';
// import sampleImage from "../public/img/vanila.png";


export default function Query() {
    const products = [
        {
          title: "Men's Watch",
          description: 'A stylish watch for him.',
          imageUrl: "./img/vanila.png", // Use the imported image
        },
        // Add more products as needed
        {
            title: "Men's Watch",
            description: 'A stylish watch for him.',
            imageUrl: "./img/chocolate.jpeg", // Use the imported image
          },
      ];
  return (
    <div><h2>Query Page</h2>
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div></div>
  )
}

