export default function ReturnsPage() {
    return (
        <div className="pt-20">
            <section className="section-padding bg-white">
                <div className="container-premium">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h1 className="text-display-md font-display font-bold text-diamond-900 mb-8">
                            Return & Repair Policy
                        </h1>

                        <p className="text-sm text-diamond-500 mb-8">Last Updated: November 2024</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">1. Return Policy</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                Returns and repairs follow a structured process managed by Jewel Label and our fulfillment partners.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>30-day return window from delivery date</li>
                                <li>Products must be in original condition with certification</li>
                                <li>Return shipping handled by Jewel Label</li>
                                <li>Refunds processed within 7-10 business days</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">2. Repair Services</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                We offer comprehensive repair services for all jewelry sold through the platform:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-diamond-700">
                                <li>Free repairs for manufacturing defects within warranty period</li>
                                <li>Paid repairs for wear and tear or accidental damage</li>
                                <li>Certified repair partners ensure quality</li>
                                <li>Turnaround time: 10-15 business days</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">3. Process</h2>
                            <p className="text-diamond-700 leading-relaxed mb-4">
                                To initiate a return or repair:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 text-diamond-700">
                                <li>Contact our support team with order details</li>
                                <li>Receive return/repair authorization</li>
                                <li>Ship product using provided label</li>
                                <li>Track status through vendor dashboard</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-display font-bold text-diamond-900 mb-4">4. Vendor Options</h2>
                            <p className="text-diamond-700 leading-relaxed">
                                Vendors may enable or disable return/repair services based on their subscription plan. Premium plans include
                                enhanced return and repair support.
                            </p>
                        </section>

                        <p className="text-diamond-600 mt-12">
                            For return or repair inquiries, contact{' '}
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
