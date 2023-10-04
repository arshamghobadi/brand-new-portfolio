import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div
      className="text-white h-screen snap-y 
  snap-mandatory overflow-y-scroll 
  overflow-x-hidden z-0 scrollbar 
  scrollbar-smooth scrollbar-track-gray-400/20 
  scrollbar-thumb-[#F7AB0A]/80"
    >
      <section>
        <Header />
      </section>
      <section>
        <Hero id="hero" className="snap-start" />
      </section>
    </div>
  );
}
