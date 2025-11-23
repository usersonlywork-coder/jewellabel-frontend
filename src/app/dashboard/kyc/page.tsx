'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, FileText, Building, CreditCard, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { authService } from '@/lib/auth';

export default function KYCPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pan_number: '',
    gst_number: '',
    bank_name: '',
    account_number: '',
    ifsc_code: '',
    account_holder_name: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = authService.getToken();
      const response = await fetch('http://backend.test/api/vendor/kyc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/dashboard'), 2000);
      }
    } catch (error) {
      console.error('KYC submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen pt-20 bg-diamond-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-diamond-900 mb-2">KYC Submitted!</h2>
            <p className="text-diamond-600">
              Your documents are under review. We'll notify you once verified.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-diamond-50">
      <div className="bg-white border-b border-diamond-200">
        <div className="container-premium py-6">
          <Link href="/dashboard" className="flex items-center text-diamond-600 hover:text-primary-600 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-display font-bold text-diamond-900">
            KYC Verification
          </h1>
          <p className="text-diamond-600 mt-2">
            Complete your business verification to start selling
          </p>
        </div>
      </div>

      <div className="container-premium py-8">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Business Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-diamond-700 mb-2">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pan_number}
                    onChange={(e) => setFormData({ ...formData, pan_number: e.target.value.toUpperCase() })}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-diamond-700 mb-2">
                    GST Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.gst_number}
                    onChange={(e) => setFormData({ ...formData, gst_number: e.target.value.toUpperCase() })}
                    placeholder="22AAAAA0000A1Z5"
                    maxLength={15}
                    className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Bank Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Bank Account Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-diamond-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.bank_name}
                    onChange={(e) => setFormData({ ...formData, bank_name: e.target.value })}
                    placeholder="State Bank of India"
                    className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-diamond-700 mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.account_holder_name}
                    onChange={(e) => setFormData({ ...formData, account_holder_name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-diamond-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.account_number}
                      onChange={(e) => setFormData({ ...formData, account_number: e.target.value })}
                      placeholder="1234567890"
                      className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-diamond-700 mb-2">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ifsc_code}
                      onChange={(e) => setFormData({ ...formData, ifsc_code: e.target.value.toUpperCase() })}
                      placeholder="SBIN0001234"
                      maxLength={11}
                      className="w-full px-4 py-3 border border-diamond-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" size="lg" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit for Verification'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
