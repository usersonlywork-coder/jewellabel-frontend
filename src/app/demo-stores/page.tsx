'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DemoStoresPage() {
    const demoStores = [
        {
            name: 'Elegance Diamonds',
            style: 'Modern Minimal',
            description: 'Clean, contemporary design with focus on product photography',
            url: '#',
            theme: 'Light & Airy',
        },
        {
            name: 'Royal Jewels',
            style: 'Luxury Traditional',
            description: 'Rich, opulent design with traditional Indian aesthetics',
            url: '#',
            theme: 'Gold & Burgundy',
        },
        {
            name: 'Urban Sparkle',
            style: 'Bold & Vibrant',
            description: 'Energetic, youthful design targeting millennial audience',
            url: '#',
            theme: 'Colorful & Dynamic',
        },
        {
            name: 'Timeless Classics',
            style: 'Elegant Serif',
            description: 'Sophisticated typography with timeless appeal',
            url: '#',
            theme: 'Black & White',
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            See What Your Brand Can Become
                        </h1>
                        <p className="text-2xl text-diamond-200">
                            The best way to experience Jewel Label is to explore the stores built on our platform
                        </p>
                    </div>
                </div>
            </section>

            {/* Demo Stores Grid */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {demoStores.map((store, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <Sparkles className="w-16 h-16 text-primary-400 mx-auto mb-2" />
                                        <p className="text-diamond-600">Store Preview</p>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{store.name}</CardTitle>
                                    <p className="text-primary-600 font-semibold">{store.style}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600 mb-4">{store.description}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-diamond-500">Theme:</span>
                                        <span className="text-sm font-semibold text-diamond-700">{store.theme}</span>
                                    </div>
                                    <Link href={store.url}>
                                        <Button variant="primary" size="md" className="w-full group">
                                            Visit Demo Store
                                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
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
                            What You'll See in Demo Stores
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Fluid browsing experience',
                            'Premium design layouts',
                            'High-quality product pages',
                            'Secure checkout & payments',
                            'Gifting & personalization',
                            'Lightning-fast performance',
                            'Thoughtful UI for jewelry buyers',
                            'Mobile-optimized design',
                            'SEO-friendly structure',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-white">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                <span className="text-diamond-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 p-8 rounded-2xl bg-white">
                        <p className="text-2xl font-display font-bold text-diamond-900 mb-4">
                            These are not prototypes.
                        </p>
                        <p className="text-xl text-diamond-600">
                            These are fully functional storefronts ready to inspire your own brand journey.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
