'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Building, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { authService } from '@/lib/auth';

export default function SignupPage() {
  const router = useRouter();
  const [plans, setPlans] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    business_name: '',
    brand_name: '',
    plan_id: 1,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch plans from API
    fetch('http://backend.test/api/plans')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error('Failed to load plans:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await authService.register(formData);
      router.push('/dashboard'); // Redirect after successful registration
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-diamond-50 to-white py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-display-sm font-display font-bold text-diamond-900 mb-2">
            Start Your Jewelry Brand
          </h1>
          <p className="text-diamond-600">
            Join Jewel Label and launch your diamond jewelry business in 60 days
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-diamond-900">Personal Information</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-diamond-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-diamond-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-diamond-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                      <input
                        type="password"
                        id="password"
                        required
                        minLength={8}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-diamond-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                      <input
                        type="password"
                        id="password_confirmation"
                        required
                        minLength={8}
                        value={formData.password_confirmation}
                        onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4 pt-4 border-t border-diamond-200">
                <h3 className="text-lg font-semibold text-diamond-900">Business Information</h3>
                
                <div>
                  <label htmlFor="business_name" className="block text-sm font-medium text-diamond-700 mb-2">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                    <input
                      type="text"
                      id="business_name"
                      required
                      value={formData.business_name}
                      onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Business Pvt Ltd"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="brand_name" className="block text-sm font-medium text-diamond-700 mb-2">
                    Brand Name
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diamond-400" />
                    <input
                      type="text"
                      id="brand_name"
                      required
                      value={formData.brand_name}
                      onChange={(e) => setFormData({ ...formData, brand_name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-diamond-700 mb-3">
                    Choose Your Plan
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 1, name: 'Glow', color: 'blue' },
                      { id: 2, name: 'Shine', color: 'gold' },
                      { id: 3, name: 'Luxe', color: 'purple' }
                    ].map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, plan_id: plan.id })}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.plan_id === plan.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-diamond-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-diamond-900">{plan.name}</span>
                          {formData.plan_id === plan.id && (
                            <CheckCircle className="w-5 h-5 text-primary-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-diamond-600">
                Already have an account?{' '}
                <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
