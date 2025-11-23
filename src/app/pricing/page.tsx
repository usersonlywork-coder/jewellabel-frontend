'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, Crown, Sparkles, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';

export default function PricingPage() {
    const plans = [
        {
            name: 'Glow',
            tagline: 'Smart Start',
            icon: <Sparkles className="w-8 h-8" />,
            description: 'For first-time founders entering the world of diamond jewelry',
            ideal: 'Entrepreneurs taking their first step into luxury commerce',
            features: [
                'Essential storefront',
                'Custom domain support',
                'Real-time inventory sync',
                'Access to certified classic SKUs',
                'Margin control',
                'Automated fulfillment',
                'Basic analytics',
                'Standard support',
            ],
            gradient: 'from-blue-500 to-cyan-500',
            popular: false,
        },
        {
            name: 'Shine',
            tagline: 'Rising Brand',
            icon: <Star className="w-8 h-8" />,
            description: 'For creators and growing D2C players who want a stronger presence',
            ideal: 'Influencers, content creators, designers, and emerging D2C brands',
            features: [
                'Everything in Glow',
                'Semi-premium jewelry catalog',
                'Advanced gifting options',
                'Premium packaging kit',
                'Marketing tools & integrations',
                'Enhanced analytics',
                'Priority support',
                'Email automation',
            ],
            gradient: 'from-primary-500 to-gold-500',
            popular: true,
        },
        {
            name: 'Luxe',
            tagline: 'Global Premium',
            icon: <Crown className="w-8 h-8" />,
            description: 'Built for brands ready to compete on an international stage',
            ideal: 'Luxury brands, global launches, and high-end creators',
            features: [
                'Everything in Shine',
                'Premium international jewelry collections',
                'Custom brand enhancements',
                'Cross-border shipping support',
                'Advanced CMS flexibility',
                'Detailed analytics + insights',
                'Dedicated success manager',
                'Access to exclusive SKUs',
            ],
            gradient: 'from-purple-600 to-pink-600',
            popular: false,
        },
    ];

    const addOns = [
        'Custom photography & videography',
        'Brand identity consultation',
        'Advanced SEO + marketing setup',
        'Packaging & gifting kits',
        'Influencer collaboration support',
        'Email & WhatsApp automation workflows',
        'Marketplace-ready content packs',
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Three Plans. One Destination
                        </h1>
                        <p className="text-2xl text-diamond-200 leading-relaxed">
                            Your Own Diamond Jewelry Brand
                        </p>
                        <p className="text-xl text-diamond-300">
                            Whether you're just beginning or scaling globally, Jewel Label offers a plan designed around your ambition
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                            <Card
                                key={index}
                                className={`relative ${plan.popular ? 'border-2 border-gold-400 shadow-glow lg:scale-105' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="px-4 py-1 bg-gradient-gold text-white text-sm font-bold rounded-full shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                        {plan.icon}
                                    </div>
                                    <CardTitle className="text-3xl">{plan.name}</CardTitle>
                                    <p className="text-primary-600 font-semibold text-lg">{plan.tagline}</p>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-diamond-600 mb-4">{plan.description}</p>

                                    <div className="mb-6 p-4 rounded-xl bg-diamond-50">
                                        <p className="text-sm font-semibold text-diamond-700 mb-1">Ideal For:</p>
                                        <p className="text-sm text-diamond-600">{plan.ideal}</p>
                                    </div>

                                    <div className="mb-6">
                                        <p className="font-semibold text-diamond-900 mb-3">What You Get:</p>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-diamond-700 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Link href="/get-started" className="w-full">
                                        <Button
                                            variant={plan.popular ? 'gold' : 'primary'}
                                            size="lg"
                                            className="w-full"
                                        >
                                            Choose {plan.name}
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-On Services */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Add-On Services
                        </h2>
                        <p className="text-xl text-diamond-600">
                            Available for all plans to enhance your brand
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {addOns.map((addon, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-smooth">
                                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span className="text-diamond-700">{addon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Compare Plans
                        </h2>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-diamond-200">
                                    <th className="text-left p-4 font-display font-bold text-diamond-900">Feature</th>
                                    <th className="text-center p-4 font-display font-bold text-diamond-900">Glow</th>
                                    <th className="text-center p-4 font-display font-bold text-diamond-900">Shine</th>
                                    <th className="text-center p-4 font-display font-bold text-diamond-900">Luxe</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'Custom Domain', glow: true, shine: true, luxe: true },
                                    { feature: 'Classic SKUs', glow: true, shine: true, luxe: true },
                                    { feature: 'Semi-Premium Catalog', glow: false, shine: true, luxe: true },
                                    { feature: 'Premium Collections', glow: false, shine: false, luxe: true },
                                    { feature: 'Marketing Tools', glow: false, shine: true, luxe: true },
                                    { feature: 'Cross-Border Shipping', glow: false, shine: false, luxe: true },
                                    { feature: 'Dedicated Manager', glow: false, shine: false, luxe: true },
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-diamond-100">
                                        <td className="p-4 text-diamond-700">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {row.glow ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-diamond-300">—</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.shine ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-diamond-300">—</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.luxe ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-diamond-300">—</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-display-sm font-display font-bold">
                            Choose Your Plan and Begin Your Journey
                        </h2>
                        <p className="text-2xl text-white/90">
                            Your brand is waiting to be born
                        </p>
                        <Link href="/get-started">
                            <Button variant="secondary" size="xl" className="bg-white text-primary-600 hover:bg-diamond-50">
                                Get Started Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
