'use client';

import React from 'react';
import Link from 'next/link';
import {
    Sparkles, Shield, Globe, Star, TrendingUp, Zap,
    CheckCircle, FileText, Upload, Settings, ShoppingCart, Package, DollarSign, BarChart
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function HowItWorksPage() {
    const steps = [
        {
            number: 1,
            title: 'Choose Your Subscription Plan',
            description: 'Select the plan that aligns with your goals — entry-level Glow or global premium Luxe.',
            icon: <Sparkles className="w-8 h-8" />,
            details: [
                'Compare Glow, Shine, and Luxe features',
                'Understand pricing and catalog access',
                'Select based on your ambition and market',
            ],
        },
        {
            number: 2,
            title: 'Register and Complete KYC',
            description: 'Submit your PAN, GST, and bank details. Verification is quick, secure, and transparent.',
            icon: <Shield className="w-8 h-8" />,
            details: [
                'Upload PAN and GST documents',
                'Provide bank account details',
                'Quick verification within 24-48 hours',
            ],
        },
        {
            number: 3,
            title: 'Set Up Your Domain',
            description: 'Use your own custom domain or pick a Jewel Label subdomain. Your store is hosted, secured, and optimized from day one.',
            icon: <Globe className="w-8 h-8" />,
            details: [
                'Choose custom domain or subdomain',
                'Automatic SSL certificate setup',
                'Professional hosting included',
            ],
        },
        {
            number: 4,
            title: 'Brand Identity Setup',
            description: 'Upload your logo, brand name, tone, and social handles. Choose from 100+ premium templates.',
            icon: <Upload className="w-8 h-8" />,
            details: [
                'Upload logo and brand assets',
                'Select from 100+ website templates',
                'Customize colors and typography',
            ],
        },
        {
            number: 5,
            title: 'Access Curated Certified Catalogs',
            description: 'Hundreds of LGD-certified designs become available instantly. No manufacturing. No stock risk. No upfront purchases.',
            icon: <Star className="w-8 h-8" />,
            details: [
                'Browse certified lab-grown diamond jewelry',
                'Filter by category, style, and price',
                'Real-time inventory synchronization',
            ],
        },
        {
            number: 6,
            title: 'Set Your Margins',
            description: 'See the base cost, add your desired margins, and control your selling price effortlessly.',
            icon: <DollarSign className="w-8 h-8" />,
            details: [
                'Transparent base pricing',
                'Flexible margin control',
                'Competitive pricing guidance',
            ],
        },
        {
            number: 7,
            title: 'Launch & Sell',
            description: 'Your brand goes live. Customers shop. Orders flow in.',
            icon: <ShoppingCart className="w-8 h-8" />,
            details: [
                'Instant store activation',
                'Secure payment gateway integration',
                'Mobile-optimized shopping experience',
            ],
        },
        {
            number: 8,
            title: 'We Fulfill Every Order For You',
            description: 'Packaging, certification, shipping — all handled under your brand name with real-time tracking.',
            icon: <Package className="w-8 h-8" />,
            details: [
                'Automated order processing',
                'Premium packaging with your branding',
                'Real-time tracking for customers',
            ],
        },
        {
            number: 9,
            title: 'Get Paid Directly',
            description: 'Track sales and payouts through your vendor dashboard.',
            icon: <BarChart className="w-8 h-8" />,
            details: [
                'Real-time sales analytics',
                'Automated payout processing',
                'Comprehensive financial reports',
            ],
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Build Your Brand With Zero Complexity
                        </h1>
                        <p className="text-2xl text-white/90 leading-relaxed">
                            A guided, structured, and efficient brand launch experience — designed for beginners and seasoned professionals alike.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Flow */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Step-by-Step Brand Launch Flow
                        </h2>
                        <p className="text-xl text-diamond-600">
                            From registration to your first sale — every step simplified
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connecting line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-gold-400 hidden md:block"></div>
                                )}

                                <Card className="relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-9xl font-display font-bold text-primary-50 opacity-50">
                                        {step.number.toString().padStart(2, '0')}
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white shadow-lg">
                                                {step.icon}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <CardHeader className="p-0 mb-4">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                                                        Step {step.number}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-2xl">{step.title}</CardTitle>
                                            </CardHeader>

                                            <CardContent className="p-0">
                                                <p className="text-diamond-600 text-lg mb-4">{step.description}</p>
                                                <ul className="space-y-2">
                                                    {step.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start space-x-2">
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-diamond-700">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Visualization */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Your 60-Day Journey
                        </h2>
                        <p className="text-xl text-diamond-600">
                            From signup to your first sale
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { week: 'Week 1-2', title: 'Setup & Verification', tasks: ['Plan selection', 'KYC submission', 'Domain setup'] },
                                { week: 'Week 3-4', title: 'Brand Building', tasks: ['Template selection', 'Brand customization', 'Catalog curation'] },
                                { week: 'Week 5-6', title: 'Pre-Launch', tasks: ['Margin setting', 'Testing', 'Marketing prep'] },
                                { week: 'Week 7-8', title: 'Launch & Grow', tasks: ['Go live', 'First orders', 'Scale operations'] },
                            ].map((phase, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 mx-auto mb-3 flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-sm font-semibold text-primary-600 mb-1">{phase.week}</p>
                                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm text-diamond-600">
                                            {phase.tasks.map((task, i) => (
                                                <li key={i} className="flex items-center justify-center space-x-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                        <h2 className="text-display-sm font-display font-bold">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-diamond-200">
                            Join hundreds of creators who have launched their jewelry brands with Jewel Label
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/get-started">
                                <Button variant="gold" size="lg">
                                    Get Started Now
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                    View Pricing Plans
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
