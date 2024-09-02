// Products.jsx
import React from "react";

const Products = () => {
  const products = [
    {
      name: "Product One",
      description: "Description of Product One",
      image: "https://example.com/product1.jpg",
    },
    {
      name: "Product Two",
      description: "Description of Product Two",
      image: "https://example.com/product2.jpg",
    },
    {
      name: "Product Three",
      description: "Description of Product Three",
      image: "https://example.com/product3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Products</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
              <p className="mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
