export default function ShippingPage() {
    return (
        <div className="pt-20">
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h1 className="text-display-md font-display font-bold text-diamond-900 mb-8">
                            Shipping Policy
                        </h1>

                        <p className="text-sm text-diamond-500 mb-8">Last Updated: November 2024</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">1. Fulfillment Process</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                All orders are fulfilled through certified logistics partners with complete tracking, quality checks, and
                                packaging standards under the vendor's branding.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">2. Shipping Timeline</h2>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Order processing: 1-2 business days</li>
                                <li>Domestic shipping: 3-7 business days</li>
                                <li>International shipping (Luxe plan): 7-14 business days</li>
                                <li>Express shipping available for premium orders</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">3. Packaging</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                Every order includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Premium branded packaging</li>
                                <li>Certificate of authenticity</li>
                                <li>Care instructions</li>
                                <li>Warranty documentation</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">4. Tracking</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Real-time tracking information is provided for all orders. Customers receive tracking updates via email and SMS.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">5. Shipping Costs</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Shipping costs are determined by order value, destination, and vendor preferences. Many vendors offer free
                                shipping above a certain order value.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">6. International Shipping</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Available for Luxe plan subscribers. Includes customs documentation, international tracking, and compliance
                                with destination country regulations.
                            </p>
                        </section>

                        <p className="text-diamond-600 mt-12">
                            For shipping inquiries, contact{' '}
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
