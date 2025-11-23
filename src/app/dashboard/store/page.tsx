'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Type, Image as ImageIcon, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function StorePage() {
  const [storeData, setStoreData] = useState({
    store_name: '',
    tagline: '',
    primary_color: '#c66943',
    logo_url: '',
    banner_url: '',
  });

  const handleSave = () => {
    // TODO: Save store customization
    alert('Store customization saved!');
  };

  return (
    <div className="min-h-screen pt-20 bg-diamond-50">
      <div className="bg-white border-b border-diamond-200">
        <div className="container-premium py-6">
          <Link href="/dashboard" className="flex items-center text-diamond-600 hover:text-primary-600 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-display font-bold text-diamond-900">
            Customize Your Store
          </h1>
          <p className="text-diamond-600 mt-2">
            Personalize your brand's online presence
          </p>
        </div>
      </div>

      <div className="container-premium py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="w-5 h-5 mr-2" />
                Store Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Store Name
                </label>
                <input
                  type="text"
                  value={storeData.store_name}
                  onChange={(e) => setStoreData({ ...storeData, store_name: e.target.value })}
                  placeholder="My Jewelry Store"
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={storeData.tagline}
                  onChange={(e) => setStoreData({ ...storeData, tagline: e.target.value })}
                  placeholder="Elegance Redefined"
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="color"
                    value={storeData.primary_color}
                    onChange={(e) => setStoreData({ ...storeData, primary_color: e.target.value })}
                    className="w-16 h-16 rounded-lg border border-diamond-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={storeData.primary_color}
                    onChange={(e) => setStoreData({ ...storeData, primary_color: e.target.value })}
                    className="flex-1 px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="w-5 h-5 mr-2" />
                Images
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={storeData.logo_url}
                  onChange={(e) => setStoreData({ ...storeData, logo_url: e.target.value })}
                  placeholder="https://example.com/logo.png"
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-diamond-700 mb-2">
                  Banner URL
                </label>
                <input
                  type="url"
                  value={storeData.banner_url}
                  onChange={(e) => setStoreData({ ...storeData, banner_url: e.target.value })}
                  placeholder="https://example.com/banner.png"
                  className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                Cancel
              </Button>
            </Link>
            <Button onClick={handleSave} variant="primary" size="lg">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
