import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { scaleIn } from '@/utils/animations';
import { projects } from '@/data/portfolio';

interface ProjectCardProps {
    project: (typeof projects)[0];
    featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <motion.div variants={scaleIn}>
            <Card
                className={`h-full hover:shadow-lg transition-all duration-300 group ${
                    featured ? 'ring-2 ring-primary/20' : ''
                }`}
            >
                <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                {project.featured && (
                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{project.year}</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-4xl mb-2">🚀</div>
                        <div class="text-sm text-muted-foreground">${project.title}</div>
                      </div>
                    </div>
                  `;
                                }
                            }}
                        />
                    </div>

                    {/* Long Description for Featured Projects */}
                    {featured && project.longDescription && (
                        <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                    )}

                    {/* Technologies */}
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-2 pt-2">
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <Button size="sm" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                </a>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
