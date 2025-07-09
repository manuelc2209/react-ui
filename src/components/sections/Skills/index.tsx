import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { skills } from '@/data/portfolio';
import { SkillCard } from './SkillCard';
import { CategoryOverview } from './CategoryOverview';
import { SkillsSummary } from './SkillsSummary';

export function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'Tools & DevOps' },
        { id: 'other', label: 'Architecture' }
    ];

    const getSkillsByCategory = (category: string) => skills.filter((skill) => skill.category === category);

    return (
        <section id="skills" className="py-20" data-testid="skills-section">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and the technologies I work
                            with daily.
                        </p>
                    </motion.div>

                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                        {/* Category Tabs */}
                        <motion.div variants={fadeInUp} className="mb-8">
                            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:flex lg:justify-center">
                                {categories.map((category) => (
                                    <TabsTrigger key={category.id} value={category.id} className="text-sm">
                                        {category.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </motion.div>

                        {/* All Skills Overview */}
                        <TabsContent value="all" className="space-y-8">
                            <motion.div variants={staggerContainer}>
                                <h3 className="text-2xl font-semibold mb-6 text-center">
                                    Technology Stack Overview
                                </h3>
                                <div className="space-y-6">
                                    <CategoryOverview
                                        category="frontend"
                                        skills={getSkillsByCategory('frontend')}
                                    />
                                    <CategoryOverview
                                        category="backend"
                                        skills={getSkillsByCategory('backend')}
                                    />
                                    <CategoryOverview
                                        category="tools"
                                        skills={getSkillsByCategory('tools')}
                                    />
                                    <CategoryOverview
                                        category="architecture"
                                        skills={getSkillsByCategory('other')}
                                    />
                                </div>
                            </motion.div>
                        </TabsContent>

                        {/* Individual Category Content */}
                        {categories.slice(1).map((category) => (
                            <TabsContent key={category.id} value={category.id} className="">
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {getSkillsByCategory(category.id).map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <SkillsSummary />
                </motion.div>
            </div>
        </section>
    );
}
