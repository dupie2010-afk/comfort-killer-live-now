import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import wakeupcall from "../assets/Wakeupcall.png";
import comfortkiller from "../assets/Comfortkiller.png";
import shadowprotocol from "../assets/Shadowprotocol.png";
export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Static handling
    setSubmitted(true);
    console.log("Subscription attempt (static):", email);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            THE <span className="text-brand-red">ARMORY</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-bold uppercase tracking-widest">
            Tools for the uncomfortable.
          </p>
        </motion.div>
        <div className="text-center py-24 border-t border-white/10 border-b border-white/10 mb-20">
  <p className="text-brand-red uppercase tracking-[0.4em] text-sm mb-6">
    ENTER THE MOVEMENT
  </p>

  <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
    Comfort Is
    <br />
    The Drug.
  </h2>

  <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
    Most people stay trapped in loops of distraction, weakness, and delay.
    Comfort Killer was built for those ready to break the pattern.
  </p>
</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <ProductCard 
            title="A INSTANT EYE OPENER"
            image={wakeupcall}
            description="This is not Motivation. This is a Mirror."
            type="Ebook"
            href="https://payhip.com/b/3nePy"
            featured
          />
          
          <ProductCard 
            title="A REAL AWAKENING"
            image={comfortkiller}
            description="Day 3 she registered her Business. Day 4 he chose Sobriety"
            type="IMMERSION"
            href="https://payhip.com/b/xQFv4"
            ctaText="Start your RESET"
          />
          
          <ProductCard 
            title="The Shadow Protocol"
            image={shadowprotocol}
            price="COMING SOON"
            description="Forging your deep dark shadows. WAITLISTED."
            type="The Entity"
            disabled
          />
        </div>

        <div className="mt-32 p-12 bg-neutral-900 border border-white/5 text-center">
          <h2 className="text-3xl font-black mb-4 uppercase">Want the full experience?</h2>
          {submitted ? (
            <p className="text-brand-red font-black text-xl uppercase italic">The call is coming. Watch your inbox.</p>
          ) : (
            <>
              <p className="text-white/50 mb-8 max-w-2xl mx-auto font-medium">
                The inner circle membership is currently closed. Enter your email to be notified when we open new slots for the next cohort.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border border-white/10 px-6 py-4 font-bold uppercase tracking-widest focus:border-brand-red outline-none transition-colors text-white"
                />
                <button type="submit" className="bg-brand-red px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-red-light transition-all text-white shadow-xl">
                  Notify Me
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ 
  title, 
  image, 
  price, 
  description, 
  type, 
  featured, 
  disabled, 
  href,
  ctaText = "Access Now"
}: { 
  title: string,
  image?: string,
  price?: string, 
  description: string, 
  type: string, 
  featured?: boolean, 
  disabled?: boolean,
  href?: string,
  ctaText?: string
}) {
  return (
    <motion.div 
      whileHover={!disabled ? { y: -10 } : {}}
      className={`p-1 flex flex-col h-full ${featured ? 'bg-gradient-to-b from-brand-red to-transparent shadow-[0_0_30px_rgba(139,0,0,0.2)]' : 'bg-white/5 border border-white/10'}`}
    >
      <div className="bg-black p-8 flex-1 flex flex-col relative overflow-hidden group">
        {image && (
  <img
    src={image}
    alt={title}
    className="w-full h-56 object-cover object-top mb-4 rounded"
  />
)}
        {featured && (
           <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest z-20">
             Most Essential
           </div>
      )}    

        <span className="text-xs font-black text-brand-red uppercase tracking-[0.2em] mb-2">{type}</span>
        <h3 className="text-2xl font-black mb-4 group-hover:text-brand-red transition-colors">{title}</h3>
        <p className="text-white/50 mb-8 leading-relaxed flex-1 italic font-medium">"{description}"</p>
        <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-auto">
          <span className="text-2xl font-black">{price}</span>
          {disabled ? (
            <span className="px-6 py-3 font-black uppercase tracking-widest text-xs bg-white/5 text-white/20">
              Waitlisted
            </span>
          ) : (
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-black uppercase tracking-widest text-xs bg-white text-black hover:bg-brand-red hover:text-white transition-all shadow-lg"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
