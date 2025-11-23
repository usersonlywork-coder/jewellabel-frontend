'use client';

import React from 'react';
import { Zap, Database, BarChart, CreditCard, Settings, Globe, Shield, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function FeaturesPage() {
    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Next.js & React Storefronts',
            description: 'Lightning-fast, elegant storefronts that feel premium from the first click',
            details: ['Server-side rendering', 'Optimized performance', 'SEO-friendly', 'Mobile-first design'],
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: 'Vendor Admin Dashboard',
            description: 'Your control center — track orders, set margins, update content, and monitor growth',
            details: ['Order management', 'Margin control', 'Content updates', 'Real-time analytics'],
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: 'Real-Time Inventory Syncing',
            description: 'All SKUs, certifications, and gold/diamond rate updates happen automatically',
            details: ['Live stock updates', 'Price synchronization', 'Certificate management', 'Automated alerts'],
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Automated Order Lifecycle',
            description: 'Every order triggers instant fulfillment — label generation, packaging, dispatch, tracking',
            details: ['Auto order processing', 'Label generation', 'Tracking integration', 'Status notifications'],
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: 'CMS & Content Control',
            description: 'Flexible layouts, customizable pages, and brand-consistent content',
            details: ['100+ templates', 'Drag-and-drop editor', 'Custom pages', 'Brand customization'],
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: 'Integrated Payments',
            description: 'Secure transactions via Razorpay, Stripe, and global payment gateways',
            details: ['Multiple gateways', 'Secure checkout', 'Auto reconciliation', 'Payout automation'],
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Analytics Dashboard',
            description: 'Monitor sales, traffic, customer behavior, and product performance',
            details: ['Sales reports', 'Traffic analytics', 'Customer insights', 'Product metrics'],
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Enterprise Security',
            description: 'Bank-grade security with SSL, data encryption, and compliance',
            details: ['SSL certificates', 'Data encryption', 'PCI compliance', 'Regular backups'],
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            The Technology Behind the Brands
                        </h1>
                        <p className="text-2xl text-white/90 leading-relaxed">
                            A luxury brand deserves luxury-grade technology
                        </p>
                        <p className="text-xl text-white/80">
                            Jewel Label's platform is engineered with precision, scalability, and reliability
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="group">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-glow transition-smooth">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600 mb-4">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.details.map((detail, i) => (
                                            <li key={i} className="flex items-center space-x-2 text-sm text-diamond-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Built on Modern Technology
                        </h2>
                        <p className="text-xl text-diamond-600">
                            Enterprise-grade stack for reliability and performance
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { name: 'Next.js', description: 'Frontend Framework' },
                            { name: 'React', description: 'UI Library' },
                            { name: 'Laravel', description: 'Backend API' },
                            { name: 'MySQL', description: 'Database' },
                            { name: 'Razorpay', description: 'Payments' },
                            { name: 'AWS', description: 'Cloud Hosting' },
                            { name: 'Redis', description: 'Caching' },
                            { name: 'Stripe', description: 'Global Payments' },
                        ].map((tech, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="pt-6">
                                    <p className="font-display font-bold text-xl text-diamond-900 mb-1">{tech.name}</p>
                                    <p className="text-sm text-diamond-600">{tech.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                        <h2 className="text-display-sm font-display font-bold mb-6">
                            Everything a Modern Jewelry Brand Needs
                        </h2>
                        <p className="text-2xl text-diamond-200 leading-relaxed">
                            Built into one powerful platform
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
