export default function Footer() {
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/AccordJS', icon: '📦' },
        { name: 'Discord', href: 'https://discord.gg/accordjs', icon: '💬' },
        { name: 'X (Twitter)', href: 'https://x.com/accordjs', icon: '🐦' },
        { name: 'Reddit', href: 'https://reddit.com/r/accordjs', icon: '📱' },
    ];

    const quickLinks = [
        { name: 'Documentation', href: '/docs' },
        { name: 'Getting Started', href: '/docs/getting-started' },
        { name: 'API Reference', href: '/docs/api' },
        { name: 'Examples', href: '/examples' },
    ];

    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/favicon.svg" alt="AccordJS" className="w-8 h-8" loading="lazy" />
                            <span className="text-xl font-bold text-primary">AccordJS</span>
                        </div>
                        <p className="text-base-content/70 max-w-md">
                            Build powerful Discord bots with TypeScript. Event-driven architecture, plugin system, and
                            type safety out of the box.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base-content mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base-content mb-4">Community</h3>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/70 hover:text-primary transition-colors flex items-center space-x-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>{link.icon}</span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-base-300 mt-8 pt-8 text-center">
                    <p className="text-base-content/60">© {new Date().getFullYear()} AccordJS. MIT License.</p>
                </div>
            </div>
        </footer>
    );
}
