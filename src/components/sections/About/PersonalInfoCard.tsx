import { motion } from 'framer-motion';
import { MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInLeft } from '@/utils/animations';
import { personalInfo } from '@/data/portfolio';

export function PersonalInfoCard() {
    return (
        <motion.div variants={fadeInLeft}>
            <Card className="p-6">
                <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mr-4">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">
                          ${personalInfo.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                        </div>
                      `;
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
                            <p className="text-muted-foreground">{personalInfo.title}</p>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{personalInfo.location}</span>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        <Badge className="" variant="outline">
                            Remote friendly
                        </Badge>
                    </div>

                    <div className="flex gap-3">
                        <Button size="sm" asChild>
                            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4 mr-2" />
                                Resume
                            </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                LinkedIn
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
