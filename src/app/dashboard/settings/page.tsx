'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Building, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { authService } from '@/lib/auth';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [vendor, setVendor] = useState<any>(null);

  useEffect(() => {
    setUser(authService.getUser());
    setVendor(authService.getVendor());
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-diamond-50">
      <div className="bg-white border-b border-diamond-200">
        <div className="container-premium py-6">
          <Link href="/dashboard" className="flex items-center text-diamond-600 hover:text-primary-600 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-display font-bold text-diamond-900">
            Account Settings
          </h1>
          <p className="text-diamond-600 mt-2">
            Manage your account and business information
          </p>
        </div>
      </div>

      <div className="container-premium py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg bg-diamond-50 text-diamond-500"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  defaultValue={vendor?.business_name}
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Brand Name
                </label>
                <input
                  type="text"
                  defaultValue={vendor?.brand_name}
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Domain
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    defaultValue={vendor?.domain || ''}
                    placeholder="yourbrand"
                    className="flex-1 px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  <span className="text-diamond-600">.jewellabel.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button variant="primary" size="lg">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
