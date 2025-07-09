import { motion } from 'framer-motion';
import { Calendar, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInLeft } from '@/utils/animations';
import { formatDate, calculateExperience } from '@/utils/helpers';
import type { Experience } from '@/types';

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export function ExperienceCard({ experience: exp, index }: ExperienceCardProps) {
    return (
        <motion.div variants={fadeInLeft} transition={{ delay: index * 0.2 }}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            {exp.logo && (
                                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-lg font-bold text-primary">
                            ${exp.company[0]}
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                </div>
                            )}
                            <div>
                                <CardTitle className="text-xl">{exp.position}</CardTitle>
                                <p className="text-lg font-semibold text-primary">{exp.company}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                    {formatDate(exp.startDate)} -{' '}
                                    {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{calculateExperience(exp.startDate, exp.endDate)}</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{exp.description}</p>

                    {/* Key Achievements */}
                    <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            Key Achievements
                        </h4>
                        <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                                <li
                                    key={achievementIndex}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
