'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Coffee, 
  Music, 
  Star, 
  ArrowRight, 
  Smile, 
  Zap, 
  Heart, 
  Disc,
  UtensilsCrossed,
  Ghost,
  Crown,
  Waves,
  Drumstick,
  Cookie
} from 'lucide-react';
import Image from 'next/image';

// --- Sub-components (could be moved to separate files later) ---

const Navbar = () => (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl flex items-center justify-between pointer-events-none">
    <a href="#hero">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-[#1a1a1a] text-[#fdfcf5] kinetic-text text-2xl px-4 py-2 neo-brutal-border pointer-events-auto cursor-pointer hover:rotate-2 transition-transform"
      >
        REMEDY.
      </motion.div>
    </a>
    
    <div className="flex gap-4 pointer-events-auto">
      <a href="#menu">
        <motion.button
          initial={{ y: -100, rotate: -5 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 0.1 }}
          className="hidden md:block font-mono font-bold text-xs px-4 py-2 neo-brutal-border bg-[#ff5c00] text-white hover:-translate-y-1 transition-transform"
        >
          MENU
        </motion.button>
      </a>
      <a href="#vibe">
        <motion.button
          initial={{ y: -100, rotate: 5 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 0.2 }}
          className="hidden md:block font-mono font-bold text-xs px-4 py-2 neo-brutal-border bg-[#9e2a2b] text-white hover:-translate-y-1 transition-transform"
        >
          VIBE
        </motion.button>
      </a>
      <a href="#story">
        <motion.button
          initial={{ y: -100, rotate: -3 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 0.3 }}
          className="hidden md:block font-mono font-bold text-xs px-4 py-2 neo-brutal-border bg-[#e07a5f] text-white hover:-translate-y-1 transition-transform"
        >
          STORY
        </motion.button>
      </a>
      <motion.button
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, delay: 0.4 }}
        className="bg-[#2b2d42] text-white font-mono font-bold text-xs px-6 py-2 neo-brutal-border flex items-center gap-2 hover:bg-[#1a1a1a]"
      >
        ORDER <Zap className="w-4 h-4 text-[#ff5c00]" />
      </motion.button>
    </div>
  </nav>
);

const FloatingDecoration = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const MENU_SECTIONS = [
    {
      title: "MORNING START",
      items: [
        { name: "Biggie Breakfast Roll", price: "$20" },
        { name: "Bacon & Egg Roll", price: "$13" },
        { name: "Breakfast Burrito", price: "$18" },
        { name: "Eggs on Toast", price: "$13" },
        { name: "Basic Toast (GF avail.)", price: "$9" },
        { name: "Bagel with Cream Cheese", price: "$7" },
        { name: "Bacon Roll (Ketchup/HP)", price: "$8" },
      ]
    },
    {
      title: "FANCY TOAST & TOASTIES",
      items: [
        { name: "House Refried Beans (Sourdough)", price: "$18" },
        { name: "Smashed Edamame (Sprouts)", price: "$14" },
        { name: "Smashed Avocado #1", price: "$16" },
        { name: "Smashed Avocado #2", price: "$18" },
        { name: "Beetroot Hummus & Halloumi", price: "$14" },
        { name: "Grilled Nectarine & Ricotta", price: "$14" },
        { name: "Fromage a Trois", price: "$16" },
        { name: "Kimcheese / Charlie Tuna", price: "$16" },
      ]
    },
    {
      title: "BAGELS & PLATES",
      items: [
        { name: "The Grace / The Kazu", price: "$17" },
        { name: "Smoked Salmon & Cream Cheese", price: "$18" },
        { name: "B.L.A.T / Hummus Bagel", price: "$18" },
        { name: "Avocado Pesto Bagel", price: "$16" },
        { name: "Pulled Beef Grilled Sandwich", price: "$15" },
        { name: "Vegan Quinoa 'Meat' Taco", price: "$16" },
        { name: "Salads (Chicken/Salmon)", price: "$22" },
      ]
    },
    {
      title: "SWEET & BOWLS",
      items: [
        { name: "Açaí Bowl (Granola/Fruit)", price: "$18" },
        { name: "Chia Pudding (GF, Ve)", price: "$16" },
        { name: "Black Sticky Rice Pudding", price: "$14" },
        { name: "Homemade Bircher Muesli", price: "$16" },
        { name: "Seasonal Fruit Platter", price: "$13" },
        { name: "Power Bowl (Maple Balsamic)", price: "$18" },
      ]
    },
    {
      title: "HOT BREWS",
      items: [
        { name: "Black (Espresso/Americano)", price: "$6" },
        { name: "White (Flat White/Latte)", price: "$6" },
        { name: "Mocha / Mochaccino", price: "$6.5" },
        { name: "Single Origin Filter / Batch", price: "$6" },
        { name: "Hot Chocolate / Chai Latte", price: "$7" },
        { name: "Matcha / Turmeric Latte", price: "$7" },
        { name: "Dirty Chai / Hot Honey", price: "$8" },
        { name: "English Breakfast / Green Tea", price: "$4" },
      ]
    },
    {
      title: "CHILL DRINKS",
      items: [
        { name: "Iced Latte / Americano", price: "$7" },
        { name: "Iced Mocha / Chocolate", price: "$8" },
        { name: "Iced Matcha / Fruit Tea", price: "$8" },
        { name: "Cold Brew / Cold Drip", price: "$7.5" },
        { name: "Karma Cola / Lemmmy", price: "$5.5" },
        { name: "Gingerella / Kombucha", price: "$6.5" },
        { name: "Fresh Orange Juice", price: "$5.5" },
      ]
    },
    {
      title: "SIDES / ADD ONS",
      items: [
        { name: "Hash Browns / Tomatoes", price: "$4" },
        { name: "Avocado / Fried Egg", price: "$5" },
        { name: "Black Pudding / Bacon", price: "$6" },
        { name: "Chorizo / Halloumi", price: "$8" },
        { name: "Smoked Salmon", price: "$10" },
        { name: "Extra Shot / Syrup", price: "$1" },
        { name: "Oat / Soy / Coconut Milk", price: "$0.5" },
      ]
    }
  ];

  return (
    <main className="relative min-h-screen selection:bg-[#ff5c00] selection:text-white">
      <div className="noise-bg fixed inset-0 z-[100]" />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-4 md:pt-8 pb-20 overflow-hidden">
        <motion.div 
          style={{ rotate: rotateTransform }}
          className="absolute top-1/4 left-10 opacity-10 pointer-events-none"
        >
          <Disc className="w-96 h-96 animate-spin-slow text-[#9e2a2b]" />
        </motion.div>

        <div className="container mx-auto px-6 z-10 text-center relative">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="kinetic-text text-7xl md:text-[12rem] tracking-tighter text-[#1a1a1a] leading-[0.8]"
          >
            <span className="block italic text-[#ff5c00] mb-[-0.1em] md:mb-[-0.2em]">YOUR</span>
            <span className="relative block">
              DAILY
              <FloatingDecoration className="top-0 -right-20 hidden md:block" delay={0.2}>
                <div className="bg-[#9e2a2b] text-white sticker scrapbook-rotate-2 uppercase !p-4 !border-[#1a1a1a]">
                  <Coffee className="w-12 h-12 text-white" />
                </div>
              </FloatingDecoration>
            </span>
            <span className="block text-stroke py-4">REMEDY.</span>
          </motion.h1>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-lg md:text-2xl mt-8 flex flex-col items-center gap-4"
          >
            <div className="uppercase tracking-widest bg-[#1a1a1a] text-[#fdfcf5] px-6 py-2 inline-block -rotate-1 font-bold">
              Vintage Coffee • Vinyl Soul • Warm Vibe
            </div>
            <p className="font-display font-black text-xl italic text-[#9e2a2b]">Good morning Boppers!</p>
          </motion.div>
          
          <div className="mt-12 flex flex-col md:row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-[#ff5c00] text-white px-12 py-6 text-2xl kinetic-text brutalist-border-orange tracking-tight hover:shadow-[12px_12px_0px_0px_#9e2a2b]"
            >
              EXPLORE THE LAB
            </motion.button>
            <div className="flex gap-4">
              <Coffee className="w-8 h-8 text-[#e07a5f] animate-bounce" />
              <Drumstick className="w-8 h-8 text-[#9e2a2b] animate-pulse" />
              <Cookie className="w-8 h-8 text-[#2b2d42] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Collage Elements */}
        <FloatingDecoration className="bottom-20 left-[10%] hidden lg:block" delay={0.5}>
          <div className="relative group hover:scale-110 transition-transform cursor-pointer">
            <div className="bg-[#ff5c00] w-48 h-48 rounded-full blur-3xl opacity-20 absolute -z-10" />
            <div className="p-4 bg-white brutalist-border -rotate-3 overflow-hidden">
                <Image 
                  src="/remedy.jpg" 
                  alt="Latte" 
                  width={200} 
                  height={200} 
                  className="hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-2 font-mono text-[10px] text-black">BATCH #042 // ETHIOPIAN HEIRLOOM</div>
            </div>
          </div>
        </FloatingDecoration>

        <FloatingDecoration className="top-[20%] right-[10%] hidden lg:block" delay={1}>
          <div className="relative group hover:scale-110 transition-transform">
            <div className="bg-[#9e2a2b] w-48 h-48 rounded-full blur-3xl opacity-20 absolute -z-10" />
            <div className="p-4 bg-[#fdfcf5] brutalist-border-red rotate-12 overflow-hidden">
                <Image 
                  src="/coffeeicon.jpg" 
                  alt="Coffee" 
                  width={250} 
                  height={250} 
                  className="opacity-90 contrast-110 group-hover:opacity-100 transition-all"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </FloatingDecoration>
      </section>

      {/* --- WARM TICKER --- */}
      <div className="bg-[#ff5c00] py-6 overflow-hidden border-y-4 border-[#1a1a1a] rotate-2 z-20 relative">
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 kinetic-text text-6xl text-white uppercase italic"
        >
          {Array(10).fill("SIP THE CORE • SPIN THE CLASSICS • VIBES FOREVER • HANDMADE ART • ").join("")}
        </motion.div>
      </div>

      {/* --- FULL MENU SECTION --- */}
      <section id="menu" className="py-24 md:py-32 bg-[#fdfcf5] relative overflow-hidden border-y-8 border-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-20 gap-12 text-center md:text-left">
            <div className="relative w-full md:w-auto">
              <h2 className="kinetic-text text-6xl md:text-[10rem] text-[#1a1a1a] leading-none mb-4">
                THE <br /> <span className="text-[#ff5c00]">FULL</span> <br /> MENU.
              </h2>
              <p className="font-mono text-sm max-w-sm mx-auto md:mx-0 text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
                [V] Vegetarian [VG] Vegan [GF] Gluten Free [DF] Dairy Free. All our ingredients are sourced from local artisans.
              </p>
              
              {/* DOWNLOAD BUTTON */}
              <div className="flex justify-center md:justify-start">
                <motion.a 
                  href="https://drive.google.com/file/d/1TjzG2sSdc4grnP879JXDerWP4wTj7POi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 bg-[#1a1a1a] text-white px-10 py-5 neo-brutal-border kinetic-text text-xl flex items-center gap-3 scrapbook-rotate-1 shadow-warm cursor-pointer no-underline"
                >
                  DOWNLOAD PDF <Star className="w-5 h-5 text-[#ff5c00] fill-[#ff5c00]" />
                </motion.a>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 p-10 bg-[#1a1a1a] text-white neo-brutal-border rotate-2 relative shadow-warm">
              <div className="absolute -top-6 -right-4 bg-[#ff5c00] text-white sticker rotate-12 kinetic-text px-4 py-2 text-sm">ADD ONS</div>
              <p className="font-mono text-xs uppercase font-black mb-6 flex items-center justify-center md:justify-start gap-2 text-[#f4a261]">
                {/* lucide-react zap */}
                <Zap className="w-4 h-4 fill-[#f4a261]" /> CUSTOMIZE YOUR BREW
              </p>
              <div className="space-y-4 font-mono text-[12px] uppercase">
                <div className="flex justify-between border-b border-zinc-700 pb-2"><span>Milk Alternatives</span><span>+$0.5</span></div>
                <div className="flex justify-between border-b border-zinc-700 pb-2"><span>Extra Shot / Syrup</span><span>+$1.0</span></div>
                <div className="flex justify-between border-b border-zinc-700 pb-2"><span>Add Cream / Ice Cream</span><span>+$1.0</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {MENU_SECTIONS.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="mb-10 relative self-center md:self-start">
                  <h3 className="kinetic-text text-3xl pb-2 border-b-8 border-[#ff5c00] inline-block relative z-10">
                    {section.title}
                  </h3>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#9e2a2b] opacity-10 rounded-full blur-2xl" />
                </div>
                <div className="space-y-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="font-display font-black text-lg md:text-xl uppercase group-hover:text-[#ff5c00] transition-colors leading-none">{item.name}</span>
                        <div className="flex-1 border-b-2 border-dotted border-zinc-300 mb-1 opacity-60" />
                        <span className="font-mono font-black text-[#ff5c00] text-lg tabular-nums">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block p-12 bg-[#1a1a1a] text-white neo-brutal-border -rotate-1 relative"
            >
              <div className="absolute -top-6 -right-6 bg-[#9e2a2b] text-white sticker -rotate-12 kinetic-text">DREAMY</div>
              <Waves className="w-12 h-12 mx-auto mb-6 text-[#f4a261]" />
              <p className="font-mono text-xl max-w-lg uppercase font-black italic">
                Clean food. Dreamy vibes. <br />
                Good morning Boppers!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO MENU (Highlights) --- */}
      <section className="py-24 md:py-32 px-6 container mx-auto relative text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <h2 className="kinetic-text text-6xl md:text-8xl text-[#1a1a1a]">
            THE <span className="text-[#9e2a2b]">FUEL</span> <br className="hidden md:block" /> 
            STATION.
          </h2>
          <p className="font-mono text-sm max-w-xs text-[#2b2d42] uppercase font-black">
            Curated brews and vintage eats for the creative soul. Handmade, small batch, pure heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          {/* Big Item */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 bg-[#1a1a1a] rounded-3xl neo-brutal-border p-8 flex flex-col justify-between group overflow-hidden relative shadow-warm"
          >
            <div className="absolute top-0 right-0 p-8 scale-0 group-hover:scale-150 transition-transform opacity-10 blur-xl bg-[#ff5c00] w-64 h-64 rounded-full" />
            <div className="relative z-10">
              <span className="font-mono text-[#f4a261] text-xs font-black">#01 // ARTISAN</span>
              <h3 className="kinetic-text text-5xl mt-4 text-white text-center">TERRACOTTA LATTE</h3>
              <p className="font-mono text-zinc-400 mt-2 max-w-xs mx-auto uppercase font-bold text-center">Smoked cinnamon, maple, and double shot espresso. Pure comfort.</p>
            </div>
            <div className="relative mt-auto pt-8 group-hover:-translate-y-4 transition-transform duration-500 overflow-hidden rounded-3xl">
               <Image 
                  src="/terracotta_artisan_latte.webp" 
                  alt="Terracotta Latte" 
                  width={600} 
                  height={400} 
                  className="rounded-3xl brutalist-border w-full h-full object-cover aspect-[3/2] sepia-[0.2]"
                  referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-4 -right-4 bg-[#ff5c00] text-white px-4 py-2 kinetic-text text-2xl rotate-6 neo-brutal-border">
                 $6.50
               </div>
            </div>
          </motion.div>

          {/* Wide Item */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-[#e07a5f] text-white p-8 rounded-3xl neo-brutal-border flex items-center justify-between group cursor-pointer shadow-warm"
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
              <span className="font-mono text-xs opacity-80 uppercase font-black">CHEF&apos;S SPECIAL</span>
              <h3 className="kinetic-text text-4xl mt-1 leading-tight text-center md:text-left">VINTAGE BURGER</h3>
              <p className="text-sm mt-4 font-mono font-bold leading-relaxed text-center md:text-left">Wagyu beef, caramelized onions, warm brioche.</p>
            </div>
            <div className="relative rotate-12 group-hover:rotate-0 transition-transform">
               <div className="absolute inset-0 bg-black blur-xl opacity-20" />
               <UtensilsCrossed className="w-24 h-24" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#9e2a2b] p-8 rounded-3xl neo-brutal-border text-white flex flex-col justify-center items-center text-center scrapbook-rotate-2 shadow-warm"
          >
            <Disc className="w-16 h-16 mb-4 animate-spin-slow text-[#ff5c00]" />
            <h3 className="kinetic-text text-2xl">SOUL TRACKS</h3>
            <p className="font-mono text-xs mt-2 opacity-70 italic font-bold">LIVE JAZZ EVERY SUNDAY</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#f4a261] rounded-3xl p-8 neo-brutal-border flex flex-col justify-between shadow-warm"
          >
            <div className="kinetic-text text-6xl leading-[0.75] text-[#1a1a1a]">FIBER<br/>WIFI</div>
            <Zap className="w-12 h-12 self-end text-[#1a1a1a]" />
          </motion.div>

          {/* Final Row */}
          <motion.div 
            whileHover={{ rotate: -2 }}
            className="md:col-span-2 bg-[#2b2d42] p-8 rounded-3xl brutalist-border flex flex-col md:flex-row gap-8 items-center shadow-warm"
          >
            <div className="w-1/2 md:w-1/3 flex-shrink-0">
              <Image 
                src="/warm_peach_tart_pastry.jpg" 
                alt="Pastry" 
                width={300} 
                height={300} 
                className="rounded-full brutalist-border-orange aspect-square object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="kinetic-text text-3xl text-[#f4a261]">PEACH TART</h3>
              <p className="font-mono text-xs text-zinc-400 mt-2 uppercase font-bold text-white">Hand-picked fruits, flaky crust, zero regrets.</p>
              <button className="mt-4 text-xs font-mono underline hover:text-[#f4a261] text-white transition-colors">UNLOCK RECIPE</button>
            </div>
          </motion.div>

          <motion.div className="bg-[#fdfcf5] text-[#1a1a1a] p-8 rounded-3xl brutalist-border relative group overflow-hidden shadow-warm">
             <div className="absolute inset-0 bg-[#ff5c00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <div className="relative z-10 flex flex-col h-full justify-between">
                <Smile className="w-12 h-12" />
                <h3 className="kinetic-text text-2xl italic">WARM VIBES ONLY.</h3>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section id="story" className="py-32 bg-[#1a1a1a] text-[#fdfcf5] relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <motion.div 
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-[#2b2d42] p-8 brutalist-border rotate-3 relative z-10 shadow-warm"
              >
                  <Image 
                    src="/remedy_story_image.jpg" 
                    alt="Remedy Story" 
                    width={800} 
                    height={600} 
                    className="sepia contrast-110 brutalist-border w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-10 -right-10 bg-[#9e2a2b] p-4 brutalist-border-red -rotate-12 hidden md:block shadow-warm">
                     <p className="font-mono text-xs font-bold text-white uppercase italic">ESTD. 2024</p>
                  </div>
              </motion.div>
              <div className="absolute top-20 -left-10 bg-[#ff5c00] w-full h-full -z-10 rotate-6 p-4 opacity-20" />
              <FloatingDecoration className="-bottom-10 -left-10" delay={2}>
                 <Heart className="w-20 h-20 text-[#e07a5f] opacity-50" />
              </FloatingDecoration>
            </div>

            <div className="order-1 md:order-2">
               <span className="font-mono text-[#f4a261] text-sm font-bold uppercase tracking-[0.5em]">THE LEGACY</span>
               <h2 className="kinetic-text text-7xl mt-4 leading-none text-white">
                 THE ART OF THE <br /> 
                 <span className="text-[#ff5c00]">ROAST.</span>
               </h2>
               <p className="font-mono text-zinc-400 mt-8 text-lg leading-relaxed font-bold">
                 Remedy isn&apos;t just a cafe. It&apos;s a laboratory where science meets soul. We spent years tracking down the rarest beans to create a roast that feels like a warm hug for your brain.
                 <br /><br />
                 Every brick in this shop was laid with a playlist in mind. Every cup is a chapter. Welcome to our story.
               </p>
               <motion.div className="mt-12 flex flex-col sm:flex-row gap-8 items-center md:items-start">
                  <div className="text-center md:text-left">
                    <div className="kinetic-text text-5xl text-[#ff5c00]">4.9/5</div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-2">REAL REVIEWS</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="kinetic-text text-5xl text-[#e07a5f]">8.5K+</div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-2">HAPPY CUSTOMERS</div>
                  </div>
               </motion.div>
            </div>
        </div>
      </section>

      {/* --- VIBE SECTION --- */}
      <section id="vibe" className="py-20 bg-[#9e2a2b] border-y-8 border-[#1a1a1a] relative">
         <div className="container mx-auto px-6 text-center">
            <h2 className="kinetic-text text-8xl md:text-[10rem] text-white opacity-10 absolute -top-10 left-0 w-full whitespace-nowrap overflow-hidden pointer-events-none">
              JAZZ • ROAST • FLOW • JAZZ • ROAST • FLOW
            </h2>
            <div className="relative z-10 pt-20">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="inline-block bg-[#fdfcf5] text-[#1a1a1a] p-8 neo-brutal-border rotate-2 mb-12 shadow-warm"
               >
                  <Music className="w-16 h-16 mx-auto mb-4 text-[#ff5c00]" />
                  <h3 className="kinetic-text text-4xl">SOUL CHECK</h3>
                  <p className="font-mono text-sm mt-2 italic font-black text-zinc-600">Curated Jazz & Neo-Soul Playlists</p>
               </motion.div>
               <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-[#1a1a1a] p-8 rounded-3xl brutalist-border-orange group cursor-pointer overflow-hidden relative shadow-warm">
                    <div className="absolute top-0 right-0 p-4 bg-[#ff5c00] text-white kinetic-text rotate-12 -translate-y-2 translate-x-2 group-hover:rotate-0 transition-transform">HOT</div>
                    <h4 className="kinetic-text text-2xl text-[#ff5c00]">THE LOUNGE</h4>
                    <p className="font-mono text-zinc-400 text-sm mt-2 font-bold uppercase">Leather chairs and warm lighting. Designed for deep focus.</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-8 rounded-3xl brutalist-border-red relative shadow-warm">
                    <Heart className="absolute -top-4 -right-4 w-12 h-12 text-[#9e2a2b] fill-[#9e2a2b]" />
                    <h4 className="kinetic-text text-2xl text-[#9e2a2b]">VINYL HOUR</h4>
                    <p className="font-mono text-zinc-400 text-sm mt-2 font-bold uppercase">Bring your own records every Thursday. We spin, you sip.</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-8 rounded-3xl brutalist-border shadow-warm">
                    <Disc className="w-8 h-8 text-[#e07a5f] mb-2" />
                    <h4 className="kinetic-text text-2xl text-[#e07a5f]">ADDICT</h4>
                    <p className="font-mono text-zinc-400 text-sm mt-2 font-bold uppercase">Subscribers get first dibs on limited harvest microlots.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="cult" className="py-32 px-6 container mx-auto">
        <div className="text-center mb-20">
           <h2 className="kinetic-text text-6xl md:text-9xl text-[#1a1a1a]">
             THE <span className="bg-[#ff5c00] text-white px-4 -rotate-2 inline-block">CULT.</span>
           </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: "Fantastic place with great vibe",
                text: "Fantastic place, went here several times for morning coffees and breakfast. Great vibe, great coffee, and amazing staff. Loved the menu and the atmosphere.", 
                name: "Christopher T", 
                color: "border-[#ff5c00]" 
              },
              { 
                title: "Coffee and food were phenomenal",
                text: "A place so good we had to come back before we flew out. Both the coffee and food were phenomenal. One of the few places I could enjoy cold brew in NZ.", 
                name: "Andrew Gregory", 
                color: "border-[#9e2a2b]" 
              },
              { 
                title: "Best flat white I’ve ever had",
                text: "Came in for breakfast and absolutely loved it. One of the best flat whites I’ve ever had. Food was excellent and service was quick even though it was busy.", 
                name: "Mark Urban", 
                color: "border-[#e07a5f]" 
              },
              { 
                title: "Friendly service and cool ambiance",
                text: "Friendly service, cool ambiance, great coffee, and the most refreshing chia seed pudding.", 
                name: "Uyen Duong", 
                color: "border-[#2b2d42]" 
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ rotate: i % 2 === 0 ? 1 : -1, y: -10 }}
                className="bg-[#1a1a1a] p-8 brutalist-border relative shadow-warm flex flex-col justify-between"
                style={{ borderColor: t.color.split('[')[1].split(']')[0] }}
              >
                <div className="absolute -top-6 -left-4 bg-[#fdfcf5] text-[#1a1a1a] px-4 py-2 brutalist-border text-xs font-mono font-black italic uppercase">⭐ {t.title}</div>
                <p className="font-mono text-sm leading-relaxed text-zinc-300 mt-4">&quot;{t.text}&quot;</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 brutalist-border flex items-center justify-center font-black text-[#ff5c00]">
                    {t.name[0]}
                  </div>
                  <span className="font-display font-bold uppercase tracking-widest text-sm text-white">{t.name}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- COMMUNITY IMAGE --- */}
      <section className="py-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden brutalist-border shadow-warm"
        >
          <Image 
            src="/customer_community.jpg" 
            alt="Remedy Community" 
            width={1920} 
            height={600} 
            className="w-full h-[400px] md:h-[600px] object-cover contrast-110 sepia-[0.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <h2 className="kinetic-text text-4xl md:text-6xl text-white">JOIN THE STORY.</h2>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-[#fdfcf5] py-20 mt-20 relative overflow-hidden border-t-8 border-[#ff5c00]">
        <div className="absolute top-0 right-0 p-20 opacity-10 blur-3xl bg-[#ff5c00] w-1/3 h-full rounded-full -z-10" />
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <h3 id="footer-logo" className="kinetic-text text-6xl md:text-7xl italic text-[#ff5c00]">REMEDY.CO</h3>
               <p className="font-mono mt-8 text-lg max-w-md uppercase tracking-tight font-black text-zinc-400">
                 SIP THE CORE. <br />
                 SPIN THE CLASSICS. <br />
                 BUILD THE STORY.
               </p>
               <div className="mt-12 flex gap-4">
                  {['IG', 'TW', 'DS', 'YT'].map(social => (
                    <button key={social} className="w-12 h-12 bg-[#2b2d42] text-white flex items-center justify-center kinetic-text neo-brutal-border hover:bg-[#ff5c00] hover:text-white transition-colors">
                      {social}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
               <h4 className="font-mono font-black text-xs uppercase bg-[#ff5c00] text-white px-2 py-1 self-center md:self-start inline-block">DIRECTORY</h4>
               <a href="#menu" className="font-display font-bold text-2xl uppercase hover:translate-x-2 transition-transform inline-block text-white hover:text-[#ff5c00]">LAB MENU</a>
               <a href="#story" className="font-display font-bold text-2xl uppercase hover:translate-x-2 transition-transform inline-block text-white hover:text-[#ff5c00]">THE STORY</a>
               <a href="#" className="font-display font-bold text-2xl uppercase hover:translate-x-2 transition-transform inline-block text-white hover:text-[#ff5c00]">LOCATIONS</a>
               <a href="#cult" className="font-display font-bold text-2xl uppercase hover:translate-x-2 transition-transform inline-block text-white hover:text-[#ff5c00]">JOIN THE CULT</a>
               <a href="#" className="font-display font-bold text-2xl uppercase hover:translate-x-2 transition-transform inline-block text-white hover:text-[#ff5c00]">CAREERS</a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
               <h4 className="font-mono font-black text-xs uppercase bg-[#9e2a2b] text-white px-2 py-1 self-center md:self-start inline-block">LAB_LOCATION</h4>
               <div className="relative w-full aspect-square bg-zinc-900 brutalist-border overflow-hidden group cursor-crosshair">
                  {/* Stylized Grid Map */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  {/* Stylized "Streets" (Brutalist Lines) */}
                  <div className="absolute top-1/4 left-0 w-full h-1 bg-zinc-800 rotate-12" />
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -rotate-6" />
                  <div className="absolute top-0 left-1/3 w-1 h-full bg-zinc-800 rotate-3" />
                  <div className="absolute top-0 left-2/3 w-1 h-full bg-zinc-800 -rotate-12" />

                  {/* The Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="bg-[#ff5c00] text-white p-2 neo-brutal-border relative z-10">
                        <Coffee className="w-6 h-6 fill-white" />
                      </div>
                      <div className="absolute inset-0 bg-[#ff5c00] blur-xl opacity-50 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Coordinates Overlay */}
                  <div className="absolute bottom-2 left-2 font-mono text-[8px] text-zinc-500 uppercase leading-tight">
                    COORD: 41.8781° N, 87.6298° W<br />
                    STATUS: OPEN_LATE
                  </div>
                  
                  {/* Hover Tag */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <span className="bg-[#ff5c00] text-white px-4 py-2 kinetic-text text-lg -rotate-3">WALK_IN</span>
                  </div>
               </div>
               <p className="font-mono text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-2">123 VINYL ST, CHICAGO IL</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
               <h4 className="font-mono font-black text-xs uppercase bg-[#2b2d42] text-white px-2 py-1 self-center md:self-start inline-block">TRACKER</h4>
               <div className="font-mono text-sm w-full max-w-[200px] mx-auto md:mx-0">
                  <div className="flex justify-between border-b border-zinc-700 py-2">
                    <span>REVIEWS:</span>
                    <span className="text-[#ff5c00] font-bold">1.2K+</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-700 py-2">
                    <span>CUSTOMERS:</span>
                    <span className="text-[#e07a5f] font-bold">8.5K+</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-700 py-2">
                    <span>RATING:</span>
                    <span className="animate-pulse text-[#ff5c00] font-black">★★★★★</span>
                  </div>
               </div>
               <div className="mt-8 flex gap-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-4 h-4 brutalist-border ${i === 4 ? 'bg-[#2b2d42]' : 'bg-[#e07a5f]'}`} />
                  ))}
               </div>
            </div>
        </div>
        
        <div className="container mx-auto px-6 mt-20 pt-12 border-t-2 border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase font-bold text-zinc-500 text-center">
           <span>© 2024 REMEDY COFFEE COLLECTIVE</span>
           <span>NO REASON. NO LIMITS. ONLY VIBES.</span>
           <span>BUILT BY REMEDY_ART_DEPT</span>
        </div>
      </footer>

      {/* Floating Global Sticker */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="fixed bottom-10 right-10 z-[200] cursor-grab active:cursor-grabbing hidden lg:block"
      >
        <div className="bg-[#9e2a2b] text-white sticker neo-brutal-border !p-6 scrapbook-rotate-2 scale-75 hover:scale-100 transition-transform flex flex-col items-center gap-2">
           <div className="relative">
             <Coffee className="w-8 h-8 fill-white" />
             <motion.div 
                animate={{ y: [-2, -12], opacity: [0, 1, 0], x: [-1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute -top-3 left-1 w-1 h-3 bg-white/60 blur-[1px] rounded-full"
             />
             <motion.div 
                animate={{ y: [-2, -14], opacity: [0, 1, 0], x: [1, -1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                className="absolute -top-4 left-3 w-1 h-4 bg-white/60 blur-[1px] rounded-full"
             />
             <motion.div 
                animate={{ y: [-2, -10], opacity: [0, 1, 0], x: [-0.5, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                className="absolute -top-3 left-5 w-1 h-2 bg-white/60 blur-[1px] rounded-full"
             />
           </div>
           <p className="kinetic-text text-2xl">SIP.</p>
        </div>
      </motion.div>
    </main>
  );
}
