"use client";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import React from "react";

const ProductTable = () => {
  // Inicializamos siempre como un array vacío
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        
        // --- AQUÍ ESTÁ EL ARREGLO ---
        // Verificamos si 'data' es realmente un Array antes de guardarlo
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          // Si no es un array (ej. es un error), mostramos el error en consola
          // y dejamos la lista vacía para que no explote el .map()
          console.error("Error de API (No es una lista):", data);
          setProducts([]); 
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <p className="text-gray-500">Browse the product catalog below.</p>
      </div>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white dark:bg-gray-900">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Esta validación evita el error products.map is not a function */}
            {products.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b last:border-none hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {product.name}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;