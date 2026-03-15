import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'Examples', href: '/examples' },
        { label: 'GitHub', href: 'https://github.com/AccordJS/accord', external: true },
    ];

    return (
        <>
            {/* Desktop Navigation */}
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

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <button
                    type="button"
                    className="p-2 rounded-md text-base-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-base-100 border-b border-base-300 shadow-lg z-50">
                        <nav className="px-4 py-3 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-base-content hover:text-primary transition-colors py-2"
                                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
