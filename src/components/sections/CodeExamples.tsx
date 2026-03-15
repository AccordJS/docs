import { useState } from 'react';

export default function CodeExamples() {
    const [activeTab, setActiveTab] = useState(0);

    const examples = [
        {
            title: 'Basic Bot Setup',
            description: 'Get started with a simple bot configuration',
            code: `import { AccordBot, IntentFlags } from 'accordjs';

const bot = new AccordBot({
  intents: [IntentFlags.GUILD_MESSAGES, IntentFlags.MESSAGE_CONTENT],
});

bot.onReady(() => {
  console.log(\`Bot logged in as \${bot.user?.tag}\`);
});

bot.start(process.env.DISCORD_TOKEN);`,
        },
        {
            title: 'Plugin Development',
            description: 'Create modular functionality with plugins',
            code: `import { Plugin, PluginContext } from 'accordjs';

export class WelcomePlugin implements Plugin {
  name = 'welcome';

  register(ctx: PluginContext) {
    ctx.events.subscribe('MEMBER_JOIN', this.handleMemberJoin);
  }

  protected handleMemberJoin = (event: MemberJoinEvent) => {
    const channel = event.guild.getSystemChannel();
    if (channel) {
      channel.send(\`Welcome \${event.member.displayName}! 👋\`);
    }
  };
}`,
        },
        {
            title: 'Event Handling',
            description: 'Type-safe event handling with normalized events',
            code: `import { MessageCreateEvent } from 'accordjs';

bot.events.subscribe('MESSAGE_CREATE', (event: MessageCreateEvent) => {
  if (event.content.startsWith('!ping')) {
    event.reply({
      content: \`Pong! Latency: \${event.client.latency}ms\`,
      ephemeral: true
    });
  }

  if (event.content.startsWith('!info')) {
    const embed = new AccordEmbed()
      .setTitle('Server Info')
      .addField('Members', event.guild.memberCount.toString())
      .setColor('primary');

    event.reply({ embeds: [embed] });
  }
});`,
        },
    ];

    return (
        <section className="section-padding bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                        See it in <span className="gradient-text">action</span>
                    </h2>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        Clean, type-safe APIs that make Discord bot development enjoyable
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center mb-8">
                        {examples.map((example, index) => (
                            <button
                                key={example.title}
                                type="button"
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 m-2 rounded-lg font-medium transition-colors ${
                                    activeTab === index
                                        ? 'bg-primary text-primary-content'
                                        : 'bg-base-300 text-base-content hover:bg-base-100'
                                }`}
                            >
                                {example.title}
                            </button>
                        ))}
                    </div>

                    <div className="bg-base-100 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-base-300 px-6 py-4 border-b border-base-content/20">
                            <h3 className="text-lg font-semibold text-base-content">{examples[activeTab].title}</h3>
                            <p className="text-base-content/70 text-sm mt-1">{examples[activeTab].description}</p>
                        </div>
                        <div className="p-6">
                            <pre className="code-block text-sm overflow-x-auto">
                                <code>{examples[activeTab].code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
