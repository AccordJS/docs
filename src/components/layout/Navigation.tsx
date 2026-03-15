export default function Navigation() {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'Examples', href: '/examples' },
        { label: 'GitHub', href: 'https://github.com/AccordJS/accord', external: true },
    ];

    return (
        <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="text-base-content hover:text-primary transition-colors"
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
