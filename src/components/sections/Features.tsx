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
            <div className="container">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="section-title font-bold text-base-content mb-4 sm:mb-6">
                        Why choose <span className="gradient-text">AccordJS</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto px-4">
                        Built from the ground up for modern Discord bot development with TypeScript at its core
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-base-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow border border-base-300"
                        >
                            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                            <h3 className="text-lg sm:text-xl font-bold text-base-content mb-2 sm:mb-3">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
