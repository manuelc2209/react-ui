import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/utils/animations';
import { projects } from '@/data/portfolio';

export function ProjectStats() {
    return (
        <>
            {/* Project Stats */}
            <motion.div variants={fadeInUp} className="mt-16">
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-center mb-8">Project Statistics</h3>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                                <div className="text-sm text-muted-foreground">Total Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {projects.filter((p) => p.featured).length}
                                </div>
                                <div className="text-sm text-muted-foreground">Featured Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {Array.from(new Set(projects.flatMap((p) => p.technologies))).length}
                                </div>
                                <div className="text-sm text-muted-foreground">Technologies Used</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {new Date().getFullYear() - Math.min(...projects.map((p) => p.year))}+
                                </div>
                                <div className="text-sm text-muted-foreground">Years Building</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={fadeInUp} className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                    Interested in working together or want to see more of my work?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                        <a href="#contact">Get In Touch</a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="https://github.com/manuel-correia" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View All on GitHub
                        </a>
                    </Button>
                </div>
            </motion.div>
        </>
    );
}
