'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-diamond-900 text-white">
            <div className="container-premium section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-glow">
                                <span className="text-white font-display font-bold text-xl">JL</span>
                            </div>
                            <span className="text-2xl font-display font-bold">Jewel Label</span>
                        </div>
                        <p className="text-diamond-300 text-sm leading-relaxed">
                            Launch your own diamond jewelry brand in 60 days. A premium brand. Certified diamonds. Zero inventory.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-diamond-300 hover:text-white transition-smooth">About Us</Link></li>
                            <li><Link href="/how-it-works" className="text-diamond-300 hover:text-white transition-smooth">How It Works</Link></li>
                            <li><Link href="/why-jewel-label" className="text-diamond-300 hover:text-white transition-smooth">Why Jewel Label</Link></li>
                            <li><Link href="/features" className="text-diamond-300 hover:text-white transition-smooth">Platform Features</Link></li>
                            <li><Link href="/pricing" className="text-diamond-300 hover:text-white transition-smooth">Pricing</Link></li>
                            <li><Link href="/catalog" className="text-diamond-300 hover:text-white transition-smooth">Catalog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="/support" className="text-diamond-300 hover:text-white transition-smooth">Help Center</Link></li>
                            <li><Link href="/demo-stores" className="text-diamond-300 hover:text-white transition-smooth">Demo Stores</Link></li>
                            <li><Link href="/get-started" className="text-diamond-300 hover:text-white transition-smooth">Get Started</Link></li>
                            <li><Link href="/contact" className="text-diamond-300 hover:text-white transition-smooth">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-display font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:Support@JewelLabel.com" className="text-diamond-300 hover:text-white transition-smooth">
                                    Support@JewelLabel.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <span className="text-diamond-300">+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                                <span className="text-diamond-300">
                                    305, Rajhans Montessa, Dumar Rd, Surat, Gujarat, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider-luxury my-12"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-diamond-400 text-sm">
                        © {currentYear} Jewel Label. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/legal/terms" className="text-diamond-400 hover:text-white transition-smooth">
                            Terms & Conditions
                        </Link>
                        <Link href="/legal/privacy" className="text-diamond-400 hover:text-white transition-smooth">
                            Privacy Policy
                        </Link>
                        <Link href="/legal/returns" className="text-diamond-400 hover:text-white transition-smooth">
                            Return Policy
                        </Link>
                        <Link href="/legal/shipping" className="text-diamond-400 hover:text-white transition-smooth">
                            Shipping Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
