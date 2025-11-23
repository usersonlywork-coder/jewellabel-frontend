'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        message: '',
        contactMethod: 'email',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-display-lg font-display font-bold">
                            Let's Connect
                        </h1>
                        <p className="text-2xl text-white/90">
                            We're here to support your journey, answer your questions, and help you build a brand that stands the test of time
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-display-sm font-display font-bold text-diamond-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-diamond-700 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-diamond-200 focus:border-primary-500 focus:outline-none"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-diamond-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-diamond-200 focus:border-primary-500 focus:outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-diamond-700 mb-2">Business/Brand Name</label>
                                    <input
                                        type="text"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-diamond-200 focus:border-primary-500 focus:outline-none"
                                        placeholder="Your brand name (optional)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-diamond-700 mb-2">Message *</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-diamond-200 focus:border-primary-500 focus:outline-none resize-none"
                                        placeholder="Tell us about your vision..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-diamond-700 mb-2">Preferred Contact Method</label>
                                    <select
                                        value={formData.contactMethod}
                                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-diamond-200 focus:border-primary-500 focus:outline-none"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                        <option value="whatsapp">WhatsApp</option>
                                    </select>
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full">
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h2 className="text-display-sm font-display font-bold text-diamond-900 mb-6">
                                Contact Information
                            </h2>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white flex-shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg mb-2">Email</CardTitle>
                                            <a href="mailto:Support@JewelLabel.com" className="text-primary-600 hover:underline">
                                                Support@JewelLabel.com
                                            </a>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white flex-shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg mb-2">Phone</CardTitle>
                                            <p className="text-diamond-600">+91 XXXXX XXXXX</p>
                                            <p className="text-sm text-diamond-500 mt-1">Available for quick assistance</p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white flex-shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg mb-2">Address</CardTitle>
                                            <p className="text-diamond-600">
                                                305, Rajhans Montessa,<br />
                                                Dumar Rd, Surat,<br />
                                                Gujarat, India
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-diamond-50 to-primary-50 border border-primary-200">
                                <h3 className="font-display font-bold text-diamond-900 mb-2">Business Hours</h3>
                                <p className="text-diamond-600">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                                <p className="text-diamond-600">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
