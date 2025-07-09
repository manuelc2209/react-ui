import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp } from '@/utils/animations';

export function CareerHighlights() {
    return (
        <motion.div variants={fadeInUp} className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-center mb-8">Career Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">7+</div>
                            <div className="text-sm text-muted-foreground">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">10+</div>
                            <div className="text-sm text-muted-foreground">Team Members Led</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Project Success Rate</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
