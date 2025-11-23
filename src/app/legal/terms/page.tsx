export default function TermsPage() {
    return (
        <div className="pt-20">
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h1 className="text-display-md font-display font-bold text-diamond-900 mb-8">
                            Terms & Conditions
                        </h1>

                        <p className="text-sm text-diamond-500 mb-8">Last Updated: November 2024</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">1. Service Agreement</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                By using Jewel Label's platform, you agree to our service terms, operational guidelines, vendor requirements,
                                and fulfillment processes. All technology, content, and platform features remain the intellectual property of Jewel Label.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">2. Vendor Responsibilities</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                As a vendor on the Jewel Label platform, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Provide accurate business information and maintain valid KYC documentation</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Maintain professional communication with customers</li>
                                <li>Honor pricing and product commitments</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">3. Platform Usage</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                The Jewel Label platform is provided as a SaaS solution. You may not reverse engineer, copy, or redistribute
                                any part of the platform technology.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">4. Intellectual Property</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                All platform features, design elements, and technology remain the property of Jewel Label. Your brand assets
                                and content remain your property.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">5. Termination</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Either party may terminate the service agreement with appropriate notice as outlined in your subscription plan.
                            </p>
                        </section>

                        <p className="text-diamond-600 mt-12">
                            For questions about these terms, please contact us at{' '}
                            <a href="mailto:Support@JewelLabel.com" className="text-primary-600 hover:underline">
                                Support@JewelLabel.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
