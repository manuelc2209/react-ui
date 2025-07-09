import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { experience, testimonials } from '@/data/portfolio';
import { ExperienceCard } from './ExperienceCard';
import { TestimonialCard } from './TestimonialCard';
import { CareerHighlights } from './CareerHighlights';

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-muted/30" data-testid="experience-section">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My journey through different roles and the impact I've made along the way.
                        </p>
                    </motion.div>

                    {/* Experience Timeline */}
                    <div className="space-y-8 mb-16">
                        {experience.map((exp, index) => (
                            <ExperienceCard key={exp.id} experience={exp} index={index} />
                        ))}
                    </div>

                    <Separator className="my-16" />

                    {/* Testimonials Section */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-2xl font-bold text-center mb-12">What Colleagues Say</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <CareerHighlights />
                </motion.div>
            </div>
        </section>
    );
}
