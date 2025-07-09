import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/utils/animations';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div variants={fadeInUp} transition={{ delay: index * 0.2 }}>
            <Card className="h-full">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                {testimonial.avatar ? (
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-full"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-sm font-bold text-primary">
                            ${testimonial.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-sm font-bold text-primary">
                                        {testimonial.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                                {testimonial.position} at {testimonial.company}
                            </p>
                        </div>
                    </div>

                    <blockquote className="text-muted-foreground italic mb-4">
                        "{testimonial.content}"
                    </blockquote>

                    {testimonial.linkedinUrl && (
                        <Button variant="ghost" size="sm" asChild>
                            <a
                                href={testimonial.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs"
                            >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View on LinkedIn
                            </a>
                        </Button>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
