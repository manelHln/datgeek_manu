import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
import SocialMedia from '@/components/SocialMedia';
import Services from '@/components/Services';
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <div className="text-primary-text">
      <SocialMedia />
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  )
}
