import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { PersonalInfoCard } from './PersonalInfoCard';
import { BioSection } from './BioSection';
import { StatsGrid } from './StatsGrid';

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30" data-testid="about-section">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Get to know more about my journey, skills, and passion for creating exceptional
                            digital experiences.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <PersonalInfoCard />
                        <BioSection />
                    </div>

                    <StatsGrid />
                </motion.div>
            </div>
        </section>
    );
}
