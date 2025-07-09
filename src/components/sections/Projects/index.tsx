import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { projects } from '@/data/portfolio';
import type { ProjectFilter } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectStats } from './ProjectStats';

export function Projects() {
    const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('all');

    const filters = [
        { id: 'all' as ProjectFilter, label: 'All Projects' },
        { id: 'frontend' as ProjectFilter, label: 'Frontend' },
        { id: 'fullstack' as ProjectFilter, label: 'Full Stack' },
        { id: 'mobile' as ProjectFilter, label: 'Mobile' }
    ];

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section id="projects" className="py-20" data-testid="projects-section">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A showcase of my recent work and the technologies I've used to bring ideas to
                            life.
                        </p>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.div variants={fadeInUp} className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 text-center">⭐ Highlighted Work</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} featured />
                            ))}
                        </div>
                    </motion.div>

                    {/* All Projects with Filters */}
                    <Tabs
                        value={selectedFilter}
                        onValueChange={(value) => setSelectedFilter(value as ProjectFilter)}
                        className="w-full"
                    >
                        {/* Filter Tabs */}
                        <motion.div variants={fadeInUp} className="mb-8">
                            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex lg:justify-center">
                                {filters.map((filter) => (
                                    <TabsTrigger key={filter.id} value={filter.id} className="text-sm">
                                        {filter.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </motion.div>

                        {/* Project Grid */}
                        {filters.map((filter) => (
                            <TabsContent key={filter.id} value={filter.id} className="">
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {(filter.id === 'all'
                                        ? projects
                                        : projects.filter((p) => p.category === filter.id)
                                    ).map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <ProjectStats />
                </motion.div>
            </div>
        </section>
    );
}
