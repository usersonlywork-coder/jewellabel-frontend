'use client';

import React, { useState } from 'react';
import { Shield, Star, Filter } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CatalogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Pendants', 'Couple Bands'];

    const products = [
        { id: 1, name: 'Classic Solitaire Ring', category: 'Rings', price: '₹45,000', image: '/placeholder-ring.jpg', certified: true },
        { id: 2, name: 'Diamond Stud Earrings', category: 'Earrings', price: '₹32,000', image: '/placeholder-earring.jpg', certified: true },
        { id: 3, name: 'Elegant Pendant', category: 'Pendants', price: '₹28,000', image: '/placeholder-pendant.jpg', certified: true },
        { id: 4, name: 'Tennis Bracelet', category: 'Bracelets', price: '₹65,000', image: '/placeholder-bracelet.jpg', certified: true },
        { id: 5, name: 'Halo Engagement Ring', category: 'Rings', price: '₹85,000', image: '/placeholder-ring2.jpg', certified: true },
        { id: 6, name: 'Drop Earrings', category: 'Earrings', price: '₹42,000', image: '/placeholder-earring2.jpg', certified: true },
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Certified Lab-Grown Diamond Jewelry
                        </h1>
                        <p className="text-2xl text-white/90">
                            Ready for Your Brand
                        </p>
                        <p className="text-xl text-white/80">
                            Instant access to a vast, centralized inventory of premium lab-grown diamond jewelry
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                                        : 'bg-diamond-100 text-diamond-700 hover:bg-diamond-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} className="overflow-hidden">
                                <div className="aspect-square bg-diamond-100 flex items-center justify-center relative">
                                    <div className="text-diamond-400 text-center">
                                        <Star className="w-16 h-16 mx-auto mb-2" />
                                        <p className="text-sm">Product Image</p>
                                    </div>
                                    {product.certified && (
                                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                                            <Shield className="w-3 h-3" />
                                            <span>Certified</span>
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{product.name}</CardTitle>
                                    <p className="text-sm text-diamond-600">{product.category}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold text-primary-600 mb-4">{product.price}</p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            What Makes Our Catalog Unique
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Fully Certified Inventory', description: 'Every SKU comes with trusted certification and hallmarking' },
                            { title: 'No Stock Purchase Required', description: 'You only pay when a customer places an order' },
                            { title: 'Real-Time Availability', description: 'Continuous sync ensures accurate stock and pricing' },
                            { title: 'High Conversion Designs', description: 'From everyday essentials to luxurious statement pieces' },
                            { title: 'Premium Packaging', description: 'Elegant, brand-ready packaging for every order' },
                            { title: 'Quality Assurance', description: 'Same quality as established luxury houses' },
                        ].map((feature, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
