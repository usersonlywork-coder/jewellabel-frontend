export default function PrivacyPage() {
    return (
        <div className="pt-20">
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h1 className="text-display-md font-display font-bold text-diamond-900 mb-8">
                            Privacy Policy
                        </h1>

                        <p className="text-sm text-diamond-500 mb-8">Last Updated: November 2024</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">1. Information We Collect</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                We collect and process only the information necessary to operate your store securely:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Business information (PAN, GST, bank details)</li>
                                <li>Brand assets (logo, content, images)</li>
                                <li>Order and transaction data</li>
                                <li>Analytics and usage data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">2. How We Use Your Data</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Your data is used exclusively to provide and improve our services. We never share your data with third parties
                                without your explicit consent, except as required by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">3. Data Security</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                All data is encrypted in transit and at rest. We employ industry-standard security measures including SSL
                                certificates, secure databases, and regular security audits.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">4. Your Rights</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Access your personal data</li>
                                <li>Request data correction or deletion</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Export your data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">5. Cookies</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                We use cookies to improve user experience and analyze platform usage. You can control cookie preferences
                                through your browser settings.
                            </p>
                        </section>

                        <p className="text-diamond-600 mt-12">
                            For privacy-related questions, contact us at{' '}
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
