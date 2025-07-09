import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { scaleIn } from '@/utils/animations';
import type { Skill } from '@/types';

interface SkillCardProps {
    skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div variants={scaleIn}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {skill.name}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                            {skill.yearsOfExperience}y
                        </Badge>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Proficiency</span>
                            <span className="font-medium">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                    </div>

                    {skill.yearsOfExperience && (
                        <p className="text-sm text-muted-foreground mt-3">
                            {skill.yearsOfExperience} years of experience
                        </p>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
