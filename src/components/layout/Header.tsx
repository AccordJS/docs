import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="bg-base-100 border-b border-base-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <img src="/accordjs-logo-big-no-bg.svg" alt="AccordJS" className="w-8 h-8" />
                        <span className="text-xl font-bold text-primary">AccordJS</span>
                    </div>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}
