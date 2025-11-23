'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap, Globe, CheckCircle, Star, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-diamond-50 via-white to-primary-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-premium relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-primary-200">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-semibold text-primary-600">Launch Your Dream Brand</span>
            </div>

            <h1 className="text-display-xl font-display font-bold text-diamond-900 leading-tight">
              Launch Your Own{' '}
              <span className="gradient-text">Diamond Jewelry Brand</span>{' '}
              in 60 Days
            </h1>

            <p className="text-xl md:text-2xl text-diamond-600 max-w-3xl mx-auto leading-relaxed">
              A premium brand. Certified diamonds. Zero inventory.
            </p>

            <p className="text-lg text-diamond-600 max-w-3xl mx-auto">
              Jewel Label turns your vision into a living, breathing jewelry brand — built on world-class technology,
              trusted certification, and a seamless supply chain.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/get-started">
                <Button variant="primary" size="xl" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo-stores">
                <Button variant="secondary" size="xl">
                  View Demo Stores
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-diamond-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Inventory Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Certified Diamonds</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Automated Fulfillment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-diamond-400 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-diamond-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
              From Idea to E-Commerce in Weeks — Not Years
            </h2>
            <p className="text-xl text-diamond-600">
              A simple, guided journey to launch your premium jewelry brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Plan',
                description: 'Begin with the plan that aligns with your ambition — Glow, Shine, or Luxe.',
                icon: <Sparkles className="w-8 h-8" />,
              },
              {
                step: '02',
                title: 'Complete KYC & Brand Setup',
                description: 'Upload your documents, logo, and brand details. Our team handles the heavy lifting.',
                icon: <Shield className="w-8 h-8" />,
              },
              {
                step: '03',
                title: 'Pick Your Domain',
                description: 'Launch on your custom domain or our subdomain — professionally hosted and secure.',
                icon: <Globe className="w-8 h-8" />,
              },
              {
                step: '04',
                title: 'Access Certified Catalogs',
                description: 'Select from hundreds of certified lab-grown diamond designs from trusted inventory.',
                icon: <Star className="w-8 h-8" />,
              },
              {
                step: '05',
                title: 'Start Selling Worldwide',
                description: 'Automated fulfillment handles packaging, shipping, and delivery under your brand.',
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                step: '06',
                title: 'Scale Your Brand',
                description: 'Focus on storytelling and customers while we handle operations and logistics.',
                icon: <Zap className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-8xl font-display font-bold text-primary-50 group-hover:text-primary-100 transition-smooth">
                  {item.step}
                </div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-glow transition-smooth">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-diamond-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About The Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Jewel Label Section */}
      <section className="section-padding bg-gradient-to-br from-diamond-900 to-diamond-800 text-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display font-bold mb-4">
              Why Jewel Label
            </h2>
            <p className="text-xl text-diamond-300">
              Traditional jewelry entrepreneurship demands capital, stock, showrooms, and endless negotiations.
              <br />
              <strong className="text-gold-400">Jewel Label removes every barrier.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'No Inventory to Purchase', description: 'Access premium certified diamonds without upfront investment' },
              { title: 'No Logistics to Manage', description: 'Automated fulfillment handles everything from packaging to delivery' },
              { title: 'No Technical Headaches', description: 'Enterprise-grade platform built on Next.js and modern technology' },
              { title: 'No Certification Complexities', description: 'Every piece comes with trusted lab-grown diamond certification' },
              { title: 'No Risk of Unsold Stock', description: 'Only pay when customers order — zero inventory risk' },
              { title: 'No Business Guesswork', description: 'Complete roadmap, tech, and operational backbone provided' },
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gold-500 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-diamond-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-display font-semibold text-gold-400 mb-6">
              You focus on brand storytelling and customers.
              <br />
              We handle everything else.
            </p>
            <Link href="/why-jewel-label">
              <Button variant="gold" size="lg">
                Discover All Benefits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Start Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
              Who Can Start a Brand
            </h2>
            <p className="text-xl text-diamond-600">
              Jewel Label empowers a new wave of creators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'First-time Entrepreneurs',
                description: 'Exploring luxury commerce with minimal risk',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Influencers & Creators',
                description: 'Turning influence into a premium brand',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Jewelry & Fashion Designers',
                description: 'Ready to commercialize their talent',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Legacy Jewelers',
                description: 'Modernizing for the digital age',
                gradient: 'from-green-500 to-emerald-500',
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} mx-auto mb-4 flex items-center justify-center shadow-luxury`}>
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-diamond-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-gold-50 border-2 border-primary-200">
            <p className="text-2xl font-display font-bold text-diamond-900">
              If you dream of owning a jewelry brand — this is your moment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="section-padding bg-diamond-50">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-diamond-600">
              Three pathways. One destination: a successful jewelry brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Glow',
                tagline: 'Smart Start',
                description: 'For first-time founders entering the world of diamond jewelry',
                features: ['Essential storefront', 'Custom domain support', 'Classic SKUs', 'Basic analytics'],
                popular: false,
              },
              {
                name: 'Shine',
                tagline: 'Rising Brand',
                description: 'For creators and growing D2C players who want a stronger presence',
                features: ['Everything in Glow', 'Semi-premium catalog', 'Marketing tools', 'Priority support'],
                popular: true,
              },
              {
                name: 'Luxe',
                tagline: 'Global Premium',
                description: 'Built for brands ready to compete on an international stage',
                features: ['Everything in Shine', 'Premium collections', 'Cross-border shipping', 'Dedicated manager'],
                popular: false,
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? 'border-2 border-gold-400 shadow-glow' : ''}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-gold text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <p className="text-primary-600 font-semibold">{plan.tagline}</p>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-diamond-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing">
                    <Button variant={plan.popular ? 'gold' : 'primary'} size="lg" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                Compare All Plans & Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display font-bold text-diamond-900 mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-xl text-diamond-600">
              Discover how founders are building powerful, profitable jewelry brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Jewelry Designer',
                content: 'Jewel Label transformed my design passion into a thriving business. The platform handles everything while I focus on creativity.',
                rating: 5,
              },
              {
                name: 'Rahul Mehta',
                role: 'First-time Entrepreneur',
                content: 'I launched my brand in just 45 days with zero inventory investment. The certified diamonds and automated fulfillment are game-changers.',
                rating: 5,
              },
              {
                name: 'Ananya Patel',
                role: 'Fashion Influencer',
                content: 'My followers love the premium quality. Jewel Label made it effortless to turn my influence into a luxury jewelry brand.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-diamond-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-gold-400"></div>
                    <div>
                      <p className="font-semibold text-diamond-900">{testimonial.name}</p>
                      <p className="text-sm text-diamond-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-gold-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-display-lg font-display font-bold">
              Your Jewelry Brand is One Decision Away
            </h2>
            <p className="text-2xl text-white/90">
              Start today and launch with confidence
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-started">
                <Button variant="secondary" size="xl" className="bg-white text-primary-600 hover:bg-diamond-50">
                  Start Your Brand Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                  Talk to Our Team
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <p className="text-4xl font-display font-bold">60</p>
                <p className="text-white/80">Days to Launch</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display font-bold">0</p>
                <p className="text-white/80">Inventory Cost</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display font-bold">100%</p>
                <p className="text-white/80">Certified Diamonds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
