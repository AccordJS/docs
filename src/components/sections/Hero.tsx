export default function Hero() {
    return (
        <section className="section-padding bg-gradient-to-br from-base-100 to-base-200">
            <div className="container">
                <div className="text-center max-w-5xl mx-auto">
                    <div className="mb-6 sm:mb-8">
                        <img
                            src="/accordjs-logo-big-no-bg.svg"
                            alt="AccordJS Logo"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>

                    <h1 className="hero-title font-bold mb-4 sm:mb-6">
                        <span className="gradient-text">Build Discord bots</span>
                        <br />
                        <span className="text-base-content">with confidence</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-3 sm:mb-4">
                        Typed. Modular. Discord bots done right.
                    </p>

                    <p className="text-base sm:text-lg text-base-content/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                        Type-safe, plugin-driven Discord bot framework that abstracts away Discord.js complexity while
                        providing powerful event handling and modular architecture.
                    </p>

                    <div className="button-group mb-8 sm:mb-12">
                        <a href="/docs" className="btn btn-primary btn-lg">
                            Get Started
                        </a>
                        <a href="https://github.com/AccordJS/accord" className="btn btn-outline btn-lg">
                            View on GitHub
                        </a>
                    </div>

                    <div className="code-block text-left max-w-full sm:max-w-2xl mx-auto">
                        <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
                            <code>{`import { AccordBot, IntentFlags } from 'accordjs';

const bot = new AccordBot({
  intents: [IntentFlags.GUILD_MESSAGES],
});

bot.onReady(() => {
  console.log(\`Bot logged in as \${bot.user?.tag}\`);
});

bot.start(process.env.DISCORD_TOKEN);`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
