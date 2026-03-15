export default function Hero() {
    return (
        <section className="section-padding bg-gradient-to-br from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <img
                            src="/accordjs-logo-big-no-bg.svg"
                            alt="AccordJS Logo"
                            className="w-55 h-55 mx-auto mb-6"
                        />
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="gradient-text">Build Discord bots</span>
                        <br />
                        <span className="text-base-content">with confidence</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                        Typed. Modular. Discord bots done right.
                    </p>

                    <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                        Type-safe, plugin-driven Discord bot framework that abstracts away Discord.js complexity while
                        providing powerful event handling and modular architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="/docs" className="btn btn-primary btn-lg">
                            Get Started
                        </a>
                        <a href="https://github.com/AccordJS/accord" className="btn btn-outline btn-lg">
                            View on GitHub
                        </a>
                    </div>

                    <div className="code-block text-left max-w-2xl mx-auto">
                        <pre className="text-sm">
                            {`import { AccordBot, IntentFlags } from 'accordjs';

const bot = new AccordBot({
  intents: [IntentFlags.GUILD_MESSAGES],
});

bot.onReady(() => {
  console.log(\`Bot logged in as \${bot.user?.tag}\`);
});

bot.start(process.env.DISCORD_TOKEN);`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
