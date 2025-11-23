'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, Plus, Check, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { authService } from '@/lib/auth';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const url = category === 'all' 
        ? 'http://backend.test/api/products'
        : `http://backend.test/api/products?category=${category}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.data || data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'ring', label: 'Rings' },
    { value: 'earring', label: 'Earrings' },
    { value: 'necklace', label: 'Necklaces' },
    { value: 'bracelet', label: 'Bracelets' },
    { value: 'pendant', label: 'Pendants' },
    { value: 'bangle', label: 'Bangles' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-diamond-50">
      {/* Header */}
      <div className="bg-white border-b border-diamond-200">
        <div className="container-premium py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/dashboard" className="flex items-center text-diamond-600 hover:text-primary-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
          <h1 className="text-3xl font-display font-bold text-diamond-900">
            Product Catalog
          </h1>
          <p className="text-diamond-600 mt-2">
            Browse and add certified diamond jewelry to your store
          </p>
        </div>
      </div>

      <div className="container-premium py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  category === cat.value
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-diamond-700 hover:bg-diamond-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-diamond-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover-lift overflow-hidden">
                <div className="aspect-square bg-diamond-100 relative">
                  {product.images && product.images[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x400?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-diamond-400">
                      <Package className="w-16 h-16" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-diamond-900">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-diamond-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-diamond-600 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-diamond-600">Metal:</span>
                      <span className="font-medium text-diamond-900">{product.metal_type} {product.metal_purity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-diamond-600">Diamond:</span>
                      <span className="font-medium text-diamond-900">{product.diamond_weight}ct {product.diamond_quality}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-diamond-600">Base Price:</span>
                      <span className="font-bold text-primary-600">₹{(product.base_price / 100).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button variant="primary" size="sm" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to My Store
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-diamond-600">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
