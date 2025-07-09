import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp } from '@/utils/animations';

interface Stat {
    label: string;
    value: string;
}

const stats: Stat[] = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Team Members Led', value: '15+' }
];

export function StatsGrid() {
    return (
        <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
