import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { fadeInRight } from '@/utils/animations';
import { validateEmail } from '@/utils/helpers';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactForm() {
    const { toast } = useToast();
    const [form, setForm] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast({
                title: 'Missing Information',
                description: 'Please fill in all required fields.',
                variant: 'destructive'
            });
            return;
        }

        if (!validateEmail(form.email)) {
            toast({
                title: 'Invalid Email',
                description: 'Please enter a valid email address.',
                variant: 'destructive'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 2000));

            toast({
                title: 'Message Sent!',
                description: "Thank you for your message. I'll get back to you soon!"
            });

            // Reset form
            setForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again later.',
                variant: 'destructive'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div variants={fadeInRight}>
            <Card className="">
                <CardHeader className="">
                    <CardTitle className="">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="" htmlFor="name">
                                    Name *
                                </Label>
                                <Input
                                    className=""
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="" htmlFor="email">
                                    Email *
                                </Label>
                                <Input
                                    className=""
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    value={form.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="" htmlFor="subject">
                                Subject
                            </Label>
                            <Input
                                className=""
                                id="subject"
                                type="text"
                                placeholder="What's this about?"
                                value={form.subject}
                                onChange={(e) => handleInputChange('subject', e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="" htmlFor="message">
                                Message *
                            </Label>
                            <Textarea
                                className=""
                                id="message"
                                placeholder="Tell me about your project or just say hello..."
                                rows={6}
                                value={form.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
