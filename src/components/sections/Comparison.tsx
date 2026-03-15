export default function Comparison() {
    const comparisons = [
        {
            feature: 'Type Safety',
            discord: '⚠️ Manual typing required',
            accord: '✅ Built-in TypeScript support',
        },
        {
            feature: 'Event Handling',
            discord: '🔧 Raw Discord.js events',
            accord: '✅ Normalized, typed events',
        },
        {
            feature: 'Plugin System',
            discord: '❌ No built-in architecture',
            accord: '✅ Modular plugin system',
        },
        {
            feature: 'Client Management',
            discord: '🔧 Direct Discord.js exposure',
            accord: '✅ Abstracted client interface',
        },
        {
            feature: 'Error Handling',
            discord: '⚠️ Manual implementation',
            accord: '✅ Built-in error boundaries',
        },
        {
            feature: 'Analytics',
            discord: '❌ No built-in support',
            accord: '✅ Event analytics included',
        },
    ];

    return (
        <section className="section-padding bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                        Why <span className="gradient-text">AccordJS</span>?
                    </h2>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        See how AccordJS simplifies Discord bot development compared to raw Discord.js
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-base-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-base-300">
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-base-content">Feature</h3>
                            </div>
                            <div className="p-4 text-center border-x border-base-content/20">
                                <h3 className="font-bold text-base-content">Raw Discord.js</h3>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-primary">AccordJS</h3>
                            </div>
                        </div>

                        {comparisons.map((item) => (
                            <div
                                key={item.feature}
                                className="grid grid-cols-1 md:grid-cols-3 border-t border-base-content/10"
                            >
                                <div className="p-4 font-medium text-base-content">{item.feature}</div>
                                <div className="p-4 text-base-content/70 border-x border-base-content/10">
                                    {item.discord}
                                </div>
                                <div className="p-4 text-base-content font-medium">{item.accord}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 inline-block">
                            <h3 className="text-xl font-bold text-primary mb-2">Ready to make the switch?</h3>
                            <p className="text-base-content/80 mb-4">
                                AccordJS provides migration guides and compatibility layers
                            </p>
                            <a href="/docs/migration" className="btn btn-primary">
                                Migration Guide
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
