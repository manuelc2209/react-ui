import { useAtom } from 'jotai';
import { themeAtom } from '@/store/atoms';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Footer } from '@/components/layout/Footer';
import './App.css';

function App() {
    const [theme] = useAtom(themeAtom);

    return (
        <div className={`min-h-screen ${theme}`} data-testid="app">
            <div className="bg-background text-foreground">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    {/* <Contact /> */}
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
