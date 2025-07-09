import { motion } from 'framer-motion';
import { fadeInRight } from '@/utils/animations';
import { personalInfo } from '@/data/portfolio';

export function BioSection() {
    return (
        <motion.div variants={fadeInRight} className="space-y-6">
            <div>
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                    <p>{personalInfo.bio}</p>
                    <p>
                        With over 7 years of experience in frontend development, I've had the privilege of
                        working with amazing teams and leading projects that have impacted thousands of users.
                        My journey started with a curiosity about how websites work, and it has evolved into a
                        passion for creating seamless, accessible, and performant web applications.
                    </p>
                    <p>
                        Currently working at Boost IT, I focus on building scalable React applications,
                        mentoring junior developers, and implementing best practices that ensure code quality
                        and team productivity. I believe in continuous learning and staying up-to-date with
                        the latest technologies and industry trends.
                    </p>
                </div>
            </div>

            <div>
                <h4 className="text-lg font-semibold mb-3">What I'm passionate about:</h4>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Building user-centric applications with exceptional UX
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Leading and mentoring development teams
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Implementing modern development practices and testing
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Exploring new technologies and sharing knowledge
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}
