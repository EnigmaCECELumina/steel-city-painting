import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Credentials } from '@/components/Credentials';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
export default function Home() { return <div className="min-h-screen flex flex-col"><Header /><main className="flex-1"><Hero /><Services /><About /><Portfolio /><Testimonials /><Credentials /><ContactForm /></main><Footer /></div>; }
