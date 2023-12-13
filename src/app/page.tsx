import Image from 'next/image'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}
