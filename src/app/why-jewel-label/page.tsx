'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Package, Compass, Laptop, DollarSign, TrendingUp, CheckCircle, X, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function WhyJewelLabelPage() {
    const problems = [
        {
            icon: <Shield className="w-8 h-8" />,
            problem: 'Certification Doubts',
            traditional: 'Small brands struggle to offer trusted certificates',
            solution: 'We provide certified, authenticated lab-grown diamonds from verified partners',
        },
        {
            icon: <Package className="w-8 h-8" />,
            problem: 'No Access to Premium Inventory',
            traditional: 'Finding reliable suppliers is difficult and expensive',
            solution: 'Our centralized inventory gives you access to premium designs instantly',
        },
        {
            icon: <Compass className="w-8 h-8" />,
            problem: 'No Business Guidance',
            traditional: 'Most founders don\'t know where to begin',
            solution: 'We provide the roadmap, the tech, and the operational backbone',
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            problem: 'Technical Barriers',
            traditional: 'Building a website, CMS, payments, and logistics is expensive',
            solution: 'We deliver a ready-made SaaS platform built on enterprise technology',
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            problem: 'High Investment Myth',
            traditional: 'People believe jewelry requires massive capital',
            solution: 'We prove you can launch a luxury brand with minimal investment',
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            The Jewelry Industry Has Problems.<br />
                            <span className="gradient-text-gold">We Solve Them All.</span>
                        </h1>
                        <p className="text-2xl text-diamond-200 leading-relaxed">
                            Traditional barriers meet modern solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem-Solution Grid */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="space-y-12">
                        {problems.map((item, index) => (
                            <div key={index} className="max-w-6xl mx-auto">
                                <Card className="overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                        {/* Problem Side */}
                                        <div className="bg-red-50 p-8 border-r border-red-200">
                                            <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                                        <X className="w-6 h-6 text-red-600" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-display font-bold text-red-900 mb-2">
                                                        {item.problem}
                                                    </h3>
                                                    <p className="text-red-700">{item.traditional}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solution Side */}
                                        <div className="bg-green-50 p-8">
                                            <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white">
                                                        {item.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-display font-bold text-green-900 mb-2">
                                                        Our Solution
                                                    </h3>
                                                    <p className="text-green-700">{item.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-xl text-diamond-600">
                            A complete ecosystem designed for your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Zero inventory investment required',
                            'Certified lab-grown diamonds',
                            'Automated order fulfillment',
                            'Enterprise-grade technology',
                            'Real-time inventory sync',
                            '100+ premium website templates',
                            'Transparent pricing control',
                            'Dedicated support team',
                            'Marketing tools included',
                            'Cross-border shipping (Luxe)',
                            'Secure payment integration',
                            'Comprehensive analytics',
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-white hover:shadow-lg transition-smooth">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-diamond-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white border-none p-12">
                            <div className="text-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center">
                                    <TrendingUp className="w-10 h-10" />
                                </div>
                                <h2 className="text-display-sm font-display font-bold">
                                    Our Solution
                                </h2>
                                <p className="text-2xl text-white/90 leading-relaxed">
                                    Jewel Label merges <strong>technology</strong>, <strong>creativity</strong>, <strong>certified diamonds</strong>,
                                    and <strong>automation</strong> into one seamless ecosystem — a first in the jewelry world.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                                        <h3 className="text-xl font-bold mb-2">You Focus On</h3>
                                        <p className="text-white/90">Brand-building, storytelling, and customer relationships</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                                        <h3 className="text-xl font-bold mb-2">We Handle</h3>
                                        <p className="text-white/90">Technology, inventory, certification, and fulfillment</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-display-sm font-display font-bold text-diamond-900">
                            Ready to Break Free from Traditional Barriers?
                        </h2>
                        <p className="text-xl text-diamond-600">
                            Join the new generation of jewelry entrepreneurs
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/get-started">
                                <Button variant="primary" size="lg">
                                    Start Your Brand
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/features">
                                <Button variant="outline" size="lg">
                                    Explore Platform Features
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
