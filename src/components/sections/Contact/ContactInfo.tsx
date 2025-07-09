import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInLeft } from '@/utils/animations';
import { personalInfo } from '@/data/portfolio';

export function ContactInfo() {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: '',
            href: '',
            description: 'Send me an email'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: personalInfo.github,
            description: 'Check out my code'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: personalInfo.linkedin,
            description: 'Connect professionally'
        },
        {
            icon: ExternalLink,
            label: 'Portfolio',
            href: personalInfo.website,
            description: 'View my work'
        }
    ];

    return (
        <motion.div variants={fadeInLeft} className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                    I'm always interested in new opportunities, whether it's a full-time position, freelance
                    project, or just a chat about technology and development.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
                {contactMethods.map((method) => (
                    <Card key={method.label} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                            <a
                                href={method.href}
                                className="flex items-center gap-4 group"
                                target={method.label === 'Location' ? '_blank' : undefined}
                                rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <method.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                                        {method.label}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">{method.description}</p>
                                    <p className="text-sm font-medium">{method.value}</p>
                                </div>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Social Links */}
            <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <Button key={social.label} variant="outline" size="sm" asChild className="group">
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.description}
                            >
                                <social.icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                {social.label}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
