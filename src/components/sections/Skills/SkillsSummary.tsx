import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp } from '@/utils/animations';
import { skills } from '@/data/portfolio';

export function SkillsSummary() {
    return (
        <>
            {/* Skills Summary */}
            <motion.div variants={fadeInUp} className="mt-16">
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {skills.filter((s) => s.proficiency >= 90).length}
                                </div>
                                <div className="text-sm text-muted-foreground">Expert Level Skills</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {
                                        skills.filter((s) => s.yearsOfExperience && s.yearsOfExperience >= 3)
                                            .length
                                    }
                                </div>
                                <div className="text-sm text-muted-foreground">3+ Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {Math.round(
                                        skills.reduce((acc, skill) => acc + skill.proficiency, 0) /
                                            skills.length
                                    )}
                                    %
                                </div>
                                <div className="text-sm text-muted-foreground">Average Proficiency</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Currently Learning */}
            <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-center">Currently Exploring</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Next.js 15', 'React Server Components', 'Bun', 'Astro', 'Tauri'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                            🚀 {tech}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
