'use client';

import React from 'react';
import { Target, Eye, Compass, Sparkles, Users, Globe } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Our Story
                        </h1>
                        <p className="text-2xl text-diamond-200 leading-relaxed">
                            Rewriting the rules of diamond jewelry entrepreneurship
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto space-y-8 text-lg text-diamond-700 leading-relaxed">
                        <p className="text-2xl font-display text-diamond-900">
                            The jewelry world is full of brilliance — but also full of barriers.
                        </p>

                        <p>
                            For decades, launching a diamond jewelry brand meant high capital, complex sourcing, unreliable certification,
                            and overwhelming operations. Creativity often lost the battle to logistics.
                        </p>

                        <p className="text-xl font-semibold text-primary-600">
                            Jewel Label was created to rewrite that story.
                        </p>

                        <p>
                            We are the world's first infrastructure platform dedicated to helping ambitious creators launch premium
                            lab-grown diamond jewelry brands — without the traditional roadblocks.
                        </p>

                        <p>
                            We believe talent, creativity, and brand vision should be enough to start.
                        </p>

                        <p className="text-2xl font-display font-bold text-diamond-900">
                            We take care of the rest.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white border-none">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                                    <Target className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-white text-3xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl text-white/90 leading-relaxed">
                                    To make diamond jewelry entrepreneurship accessible to everyone by providing a ready-made foundation
                                    of technology, certified inventory, and fulfillment.
                                </p>
                                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <p className="text-lg font-semibold">
                                        We don't just build websites —<br />
                                        We build empowered brands.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-gold-500 to-gold-600 text-white border-none">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-white text-3xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl text-white/90 leading-relaxed">
                                    To become the backbone of 10,000 jewelry brands globally — where launching a diamond jewelry brand
                                    becomes as effortless as creating an Instagram profile.
                                </p>
                                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <p className="text-lg font-semibold">
                                        Making luxury accessible,<br />
                                        one brand at a time.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Objectives */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Core Objectives
                        </h2>
                        <p className="text-xl text-diamond-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: 'Enable Modern Commerce',
                                description: 'Facilitate contactless, digital-first jewelry commerce for the modern consumer',
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: 'Democratize Access',
                                description: 'Make certified lab-grown diamonds accessible to creators of all backgrounds',
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: 'Replace Barriers with Technology',
                                description: 'Transform traditional obstacles into seamless, automated solutions',
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'Support with Guidance',
                                description: 'Empower creators with knowledge, not guesswork or confusion',
                            },
                            {
                                icon: <Compass className="w-8 h-8" />,
                                title: 'Build the Future',
                                description: 'Shape the global future of jewelry entrepreneurship',
                            },
                            {
                                icon: <Eye className="w-8 h-8" />,
                                title: 'Inspire Excellence',
                                description: 'Set new standards for quality, trust, and brand experience',
                            },
                        ].map((objective, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 mx-auto flex items-center justify-center text-white mb-4 shadow-lg">
                                        {objective.icon}
                                    </div>
                                    <CardTitle className="text-xl">{objective.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600">{objective.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center">
                            <Sparkles className="w-10 h-10" />
                        </div>
                        <h2 className="text-display-md font-display font-bold">
                            The Philosophy
                        </h2>
                        <p className="text-3xl font-display leading-relaxed">
                            We power not just stores, but <span className="font-bold underline decoration-gold-300">stories</span>.
                        </p>
                        <p className="text-2xl text-white/90 leading-relaxed">
                            Because every jewelry piece begins with imagination — and every brand deserves a chance to shine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { value: '10,000+', label: 'Target Brands' },
                            { value: '60 Days', label: 'Average Launch Time' },
                            { value: '100%', label: 'Certified Diamonds' },
                            { value: '24/7', label: 'Support Available' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-5xl font-display font-bold gradient-text mb-2">{stat.value}</p>
                                <p className="text-diamond-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
