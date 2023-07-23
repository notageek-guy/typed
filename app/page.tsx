import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero/hero";
import Navbar from "@/app/components/header/navbar";
export default function Home() {
  return (
    <div className="  flex flex-col min-h-screen bg-gradient-to-br from-zinc-900 to-gray-800 ">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
