export default function Features() {
    const features = [
        {
            title: 'Type Safety',
            description: 'Zero any types, full TypeScript support with intelligent autocompletion',
            icon: '🔒',
        },
        {
            title: 'Plugin Architecture',
            description: "Modular, extensible design that scales with your bot's complexity",
            icon: '🧩',
        },
        {
            title: 'Event System',
            description: 'Normalized event handling with typed event bus and reactive patterns',
            icon: '⚡',
        },
        {
            title: 'Client Isolation',
            description: 'Discord.js abstracted away - focus on logic, not library specifics',
            icon: '🛡️',
        },
        {
            title: 'Developer Experience',
            description: 'Clean APIs, great tooling, and comprehensive documentation',
            icon: '🚀',
        },
        {
            title: 'Performance',
            description: 'Efficient event processing with built-in analytics and monitoring',
            icon: '📊',
        },
    ];

    return (
        <section className="section-padding bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                        Why choose <span className="gradient-text">AccordJS</span>?
                    </h2>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        Built from the ground up for modern Discord bot development with TypeScript at its core
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-base-200 rounded-lg p-6 hover:shadow-lg transition-shadow border border-base-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-base-content mb-3">{feature.title}</h3>
                            <p className="text-base-content/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
