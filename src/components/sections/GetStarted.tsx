export default function GetStarted() {
    const steps = [
        {
            number: '1',
            title: 'Install AccordJS',
            description: 'Get started with a single command',
            code: 'npm install accordjs',
        },
        {
            number: '2',
            title: 'Create your bot',
            description: 'Set up your bot with minimal configuration',
            code: `import { AccordBot } from 'accordjs';

const bot = new AccordBot({
  intents: ['GUILD_MESSAGES']
});`,
        },
        {
            number: '3',
            title: 'Add functionality',
            description: 'Use plugins or custom event handlers',
            code: `bot.events.subscribe('MESSAGE_CREATE', (event) => {
  if (event.content === '!hello') {
    event.reply('Hello, World! 👋');
  }
});`,
        },
    ];

    return (
        <section className="section-padding bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                        Get started in <span className="gradient-text">minutes</span>
                    </h2>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        From zero to running Discord bot in just a few simple steps
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.title} className="bg-base-100 rounded-lg p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-lg mr-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-base-content">{step.title}</h3>
                                </div>

                                <p className="text-base-content/70 mb-4">{step.description}</p>

                                <div className="code-block">
                                    <pre className="text-sm">
                                        <code>{step.code}</code>
                                    </pre>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 space-y-6">
                        <div className="bg-base-100 rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-base-content mb-4">
                                Ready to build something amazing?
                            </h3>
                            <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
                                Join thousands of developers building powerful Discord bots with AccordJS. Get
                                comprehensive documentation, examples, and community support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/docs" className="btn btn-primary btn-lg">
                                    Read the Docs
                                </a>
                                <a href="/examples" className="btn btn-outline btn-lg">
                                    Browse Examples
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-base-100 rounded-lg p-4">
                                <div className="text-2xl mb-2">📚</div>
                                <h4 className="font-semibold text-base-content">Documentation</h4>
                                <p className="text-sm text-base-content/70">Complete guides and API reference</p>
                            </div>
                            <div className="bg-base-100 rounded-lg p-4">
                                <div className="text-2xl mb-2">💬</div>
                                <h4 className="font-semibold text-base-content">Community</h4>
                                <p className="text-sm text-base-content/70">Discord server and GitHub discussions</p>
                            </div>
                            <div className="bg-base-100 rounded-lg p-4">
                                <div className="text-2xl mb-2">🛠️</div>
                                <h4 className="font-semibold text-base-content">Examples</h4>
                                <p className="text-sm text-base-content/70">Real-world bot implementations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
