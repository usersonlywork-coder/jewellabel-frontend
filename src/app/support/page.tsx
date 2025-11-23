'use client';

import React, { useState } from 'react';
import { Search, MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = [
        {
            category: 'Getting Started',
            questions: [
                { q: 'How long does it take to launch my brand?', a: 'Typically 60 days from signup to launch, including KYC verification and brand setup.' },
                { q: 'What documents do I need for KYC?', a: 'PAN card, GST number, and bank account details are required.' },
                { q: 'Can I use my own domain?', a: 'Yes! You can use your custom domain or choose a Jewel Label subdomain.' },
            ],
        },
        {
            category: 'Pricing & Plans',
            questions: [
                { q: 'What\'s the difference between plans?', a: 'Glow is for beginners, Shine for growing brands, and Luxe for global premium brands with different catalog access and features.' },
                { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade to a higher plan at any time.' },
                { q: 'Are there any hidden fees?', a: 'No hidden fees. All costs are transparent and outlined in your plan.' },
            ],
        },
        {
            category: 'Orders & Fulfillment',
            questions: [
                { q: 'How does order fulfillment work?', a: 'We handle everything - packaging, certification, shipping, and tracking under your brand name.' },
                { q: 'What about returns and repairs?', a: 'Returns and repairs follow our structured policy managed by Jewel Label and fulfillment partners.' },
                { q: 'How do I track orders?', a: 'Real-time tracking is available through your vendor dashboard.' },
            ],
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            We're With You Every Step of the Way
                        </h1>
                        <p className="text-2xl text-diamond-200">
                            Launching a brand can feel overwhelming — which is why our support ecosystem is built with care, expertise, and clarity
                        </p>
                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-diamond-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-diamond-200 focus:border-primary-500 focus:outline-none text-lg"
                            />
                        </div>
                    </div>

                    {/* Support Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: <MessageCircle className="w-8 h-8" />, title: 'Live Chat', description: 'Real humans. Real responses.', action: 'Start Chat' },
                            { icon: <Mail className="w-8 h-8" />, title: 'Email Support', description: 'Detailed query responses', action: 'Send Email' },
                            { icon: <Phone className="w-8 h-8" />, title: 'Phone Support', description: 'Speak with our team', action: 'Call Now' },
                        ].map((option, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 mx-auto flex items-center justify-center text-white mb-4">
                                        {option.icon}
                                    </div>
                                    <CardTitle>{option.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600 mb-4">{option.description}</p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        {option.action}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {faqs.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-display font-bold text-diamond-900 mb-4">{category.category}</h3>
                                <div className="space-y-4">
                                    {category.questions.map((faq, i) => (
                                        <Card key={i}>
                                            <CardHeader>
                                                <div className="flex items-start space-x-3">
                                                    <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                                                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-diamond-600 pl-8">{faq.a}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Support Resources
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: 'Onboarding Guides', description: 'Step-by-step resources for new founders' },
                            { title: 'Product Documentation', description: 'Detailed platform feature guides' },
                            { title: 'Video Tutorials', description: 'Visual walkthroughs of key processes' },
                            { title: 'Community Forum', description: 'Connect with other brand owners' },
                        ].map((resource, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-diamond-600">{resource.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
