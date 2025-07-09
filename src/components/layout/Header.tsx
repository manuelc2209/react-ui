import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { themeAtom, activeNavAtom } from '@/store/atoms';
import { scrollToSection } from '@/utils/helpers';
import { personalInfo } from '@/data/portfolio';
import type { NavSection } from '@/types';

const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }
];

export function Header() {
    const [theme, setTheme] = useAtom(themeAtom);
    const [activeNav, setActiveNav] = useAtom(activeNavAtom);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleNavClick = (sectionId: NavSection) => {
        setActiveNav(sectionId);
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
            }`}
            data-testid="header"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold cursor-pointer"
                        onClick={() => handleNavClick('home')}
                    >
                        {personalInfo.name}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                                    activeNav === item.id ? 'text-primary' : 'text-muted-foreground'
                                }`}
                                data-testid={`nav-${item.id}`}
                            >
                                {item.label}
                                {activeNav === item.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="p-2"
                            data-testid="theme-toggle"
                        >
                            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            data-testid="mobile-menu-toggle"
                        >
                            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-border"
                        data-testid="mobile-nav"
                    >
                        <div className="flex flex-col space-y-2 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-left px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                                        activeNav === item.id ? 'text-primary' : 'text-muted-foreground'
                                    }`}
                                    data-testid={`mobile-nav-${item.id}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
}
