import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <section id="contact" className="py-20" data-testid="contact-section">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ready to start a project together? I'd love to hear from you. Send me a message
                            and I'll respond as soon as possible.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <ContactInfo />
                        <ContactForm />
                    </div>

                    {/* Additional Info */}
                    <motion.div variants={fadeInUp} className="mt-16 text-center">
                        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    I typically respond to all inquiries within 24 hours. For urgent matters,
                                    feel free to reach out via phone or LinkedIn for a faster response.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
