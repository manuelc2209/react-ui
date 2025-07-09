import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Skill } from '@/types';

interface CategoryOverviewProps {
    category: string;
    skills: Skill[];
}

export function CategoryOverview({ category, skills }: CategoryOverviewProps) {
    return (
        <Card className="mb-6">
            <CardHeader className="">
                <CardTitle className="capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent className="">
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge
                            key={skill.name}
                            variant={skill.proficiency >= 85 ? 'default' : 'secondary'}
                            className="text-sm"
                        >
                            {skill.name}
                            {skill.proficiency >= 90 && ' ⭐'}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
