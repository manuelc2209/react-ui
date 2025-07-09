import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';
import { scrollToSection } from '@/utils/helpers';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
    // const handleDownloadResume = () => {
    //     // In a real app, this would download the actual resume
    //     window.open(personalInfo.resumeUrl, '_blank');
    // };

    // const handleContactClick = () => {
    //     scrollToSection('contact');
    // };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
            data-testid="hero-section"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.div variants={fadeInUp} className="mb-6">
                            <Badge variant="secondary" className="mb-4">
                                Available for new opportunities
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Hi, I'm <span className="text-primary">{personalInfo.name}</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                                {personalInfo.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl">{personalInfo.bio}</p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="p-2"
                                data-testid="github-link"
                            >
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="p-2"
                                data-testid="linkedin-link"
                            >
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Avatar/Image */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                    <img
                                        src={personalInfo.avatar}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover rounded-full"
                                        onError={(e) => {
                                            // Fallback to initials if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-6xl font-bold text-primary">
                            ${personalInfo.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
                            >
                                <span className="text-sm font-bold">React</span>
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1
                                }}
                                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg"
                            >
                                <span className="text-sm font-bold">TS</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection('about')}
                        data-testid="scroll-indicator"
                    >
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
