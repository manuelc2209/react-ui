import { faker } from '@faker-js/faker';

import { IThread } from '../context/contextType';

export const mockedThreads: IThread[] = [
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Discussion on AI Ethics',
        subtitle: 'The importance of ethical considerations in AI development',
        user: {
            id: 'user001',
            firstName: 'John',
            lastName: 'Doe'
        },
        sideSection: {
            postTimeTracker: new Date(1674153241555),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Machine Learning Tips and Tricks',
        subtitle: 'Share your ML hacks and best practices',
        user: {
            id: 'user002',
            firstName: 'Jane',
            lastName: 'Smith'
        },
        sideSection: {
            postTimeTracker: new Date(1674153241555),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'ITs Guidelines',
        subtitle: 'Share your IT guidelines',
        user: {
            id: 'user003',
            firstName: 'Mike',
            lastName: 'Smith'
        },
        sideSection: {
            postTimeTracker: new Date(1624151241525),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Introduction to Machine Learning',
        subtitle: 'An overview of ML algorithms and applications',
        user: {
            id: 'user123',
            firstName: 'Emily',
            lastName: 'Johnson'
        },
        sideSection: {
            postTimeTracker: new Date('2022-05-15T10:30:00.000Z'),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Data Visualization Techniques',
        subtitle: 'Exploring different methods for visualizing data',
        user: {
            id: 'user789',
            firstName: 'Sophia',
            lastName: 'Garcia'
        },
        sideSection: {
            postTimeTracker: new Date('2022-11-30T08:15:00.000Z'),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Introduction to Python Programming',
        subtitle: 'Getting started with Python for beginners',
        user: {
            id: 'userabc',
            firstName: 'Daniel',
            lastName: 'Lee'
        },
        sideSection: {
            postTimeTracker: new Date('2022-07-10T16:20:00.000Z'),
            replies: Math.floor(Math.random() * 10000) + 1,
            views: Math.floor(Math.random() * 10000) + 1
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'Artificial Intelligence in Healthcare',
        subtitle: 'Applications of AI in the medical field',
        user: {
            id: 'userdef',
            firstName: 'Olivia',
            lastName: 'Wilson'
        },
        sideSection: {
            postTimeTracker: new Date('2022-12-05T11:55:00.000Z'),
            replies: 932,
            views: 4620
        }
    },
    {
        avatar: faker.image.avatarGitHub(),
        title: 'JavaScript Frameworks Comparison',
        subtitle: 'Analyzing the pros and cons of popular JS frameworks',
        user: {
            id: 'userxyz',
            firstName: 'David',
            lastName: 'Thompson'
        },
        sideSection: {
            postTimeTracker: new Date('2022-08-18T09:10:00.000Z'),
            replies: 1537,
            views: 6241
        }
    }
];
