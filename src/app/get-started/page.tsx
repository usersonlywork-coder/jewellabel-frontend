'use client';

import React, { useState } from 'react';
import { CheckCircle, Upload, Globe, Palette, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function GetStartedPage() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Launch Your Brand in a Simple, Guided Journey
                        </h1>
                        <p className="text-2xl text-white/90">
                            We designed our onboarding to be effortless — even for beginners
                        </p>
                    </div>
                </div>
            </section>

            {/* What You Need */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            What You Need
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { icon: '📄', label: 'PAN Card' },
                            { icon: '🏢', label: 'GST Number' },
                            { icon: '🏦', label: 'Bank Details' },
                            { icon: '🎨', label: 'Brand Logo' },
                        ].map((item, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="pt-6">
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <p className="font-semibold text-diamond-900">{item.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-diamond-600 mb-6">Plus a few minutes of your time</p>
                    </div>
                </div>
            </section>

            {/* Onboarding Flow */}
            <section className="section-padding bg-diamond-50">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
                            Onboarding Flow
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            { step: 1, title: 'Create Your Account', description: 'Choose your plan and register', icon: <CheckCircle className="w-6 h-6" /> },
                            { step: 2, title: 'Submit Your KYC', description: 'Quick, secure, and verified by our team', icon: <Upload className="w-6 h-6" /> },
                            { step: 3, title: 'Choose Your Domain', description: 'Use your own or ours — fully hosted', icon: <Globe className="w-6 h-6" /> },
                            { step: 4, title: 'Build Your Identity', description: 'Upload logo, brand story, social links', icon: <Palette className="w-6 h-6" /> },
                            { step: 5, title: 'Access Your Dashboard', description: 'Store infrastructure instantly generated', icon: <CheckCircle className="w-6 h-6" /> },
                            { step: 6, title: 'Review Your Catalog', description: 'Browse curated certified collections', icon: <CheckCircle className="w-6 h-6" /> },
                            { step: 7, title: 'Set Your Margins', description: 'See base cost, choose selling price', icon: <CheckCircle className="w-6 h-6" /> },
                            { step: 8, title: 'Go Live', description: 'Launch with complete operational readiness', icon: <CheckCircle className="w-6 h-6" /> },
                        ].map((item) => (
                            <Card key={item.step} className={currentStep === item.step ? 'border-2 border-primary-500' : ''}>
                                <div className="flex items-center space-x-4 p-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white font-bold">
                                            {item.step}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-display font-bold text-diamond-900 mb-1">{item.title}</h3>
                                        <p className="text-diamond-600">{item.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 text-primary-500">
                                        {item.icon}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-diamond-900 to-diamond-800 text-white space-y-6">
                        <h2 className="text-display-sm font-display font-bold">
                            You Bring Your Vision.<br />
                            We Bring the Entire Ecosystem.
                        </h2>
                        <p className="text-xl text-diamond-200">
                            Start your 60-day journey to launch today
                        </p>
                        <Button variant="gold" size="xl">
                            Start Onboarding Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
