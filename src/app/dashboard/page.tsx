'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Package, ShoppingCart, TrendingUp, Users, Store, Settings, LogOut } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { authService } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Get user and vendor data
    const userData = authService.getUser();
    const vendorData = authService.getVendor();
    
    setUser(userData);
    setVendor(vendorData);
    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    await authService.logout();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-diamond-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { name: 'Total Products', value: '0', icon: Package, color: 'blue' },
    { name: 'Orders', value: '0', icon: ShoppingCart, color: 'green' },
    { name: 'Revenue', value: '₹0', icon: TrendingUp, color: 'purple' },
    { name: 'Customers', value: '0', icon: Users, color: 'gold' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-diamond-50">
      {/* Header */}
      <div className="bg-white border-b border-diamond-200">
        <div className="container-premium py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-diamond-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-diamond-600 mt-1">
                {vendor?.brand_name} • {vendor?.plan?.name || 'Glow'} Plan
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container-premium py-8">
        {/* Welcome Banner */}
        {vendor?.status === 'pending' && (
          <Card className="mb-8 border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-gold-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-diamond-900 mb-2">
                    🎉 Your account is being set up!
                  </h3>
                  <p className="text-diamond-700 mb-4">
                    Complete your KYC verification to start adding products and launching your store.
                  </p>
                  <Link href="/dashboard/kyc">
                    <Button variant="primary" size="sm">
                      Complete KYC Verification
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-diamond-600 mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-diamond-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/dashboard/products">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Package className="w-5 h-5 mr-3" />
                    Browse Product Catalog
                  </Button>
                </Link>
                <Link href="/dashboard/store">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Store className="w-5 h-5 mr-3" />
                    Customize Your Store
                  </Button>
                </Link>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Settings className="w-5 h-5 mr-3" />
                    Account Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-diamond-900">Account Created</p>
                    <p className="text-sm text-diamond-600">Your vendor account is ready</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-diamond-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-diamond-900">Complete KYC</p>
                    <p className="text-sm text-diamond-600">Submit your business documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-diamond-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-diamond-900">Add Products</p>
                    <p className="text-sm text-diamond-600">Choose from our certified catalog</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-diamond-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-diamond-900">Launch Store</p>
                    <p className="text-sm text-diamond-600">Go live with your brand</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plan Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Plan: {vendor?.plan?.name || 'Glow'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-diamond-600 mb-1">Products Limit</p>
                <p className="text-2xl font-bold text-diamond-900">
                  {vendor?.plan?.max_products || 100}
                </p>
              </div>
              <div>
                <p className="text-sm text-diamond-600 mb-1">International Shipping</p>
                <p className="text-2xl font-bold text-diamond-900">
                  {vendor?.plan?.international_shipping ? 'Yes' : 'No'}
                </p>
              </div>
              <div>
                <p className="text-sm text-diamond-600 mb-1">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  vendor?.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {vendor?.status || 'Pending'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
