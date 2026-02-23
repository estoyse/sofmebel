"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ui/ImageWithFallBack";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const collections = [
  {
    id: 1,
    name: "Velvet Luxe",
    category: "Divanlar va Burchakli Divanlar",
    price: "From $3,299",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXNoaW9uZWQlMjBzb2ZhJTIwYmVpZ2V8ZW58MXx8fHwxNzcxODUwNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sumptuous velvet upholstery with cloud-like comfort",
  },
  {
    id: 2,
    name: "Aurora Collection",
    category: "Kreslolar",
    price: "From $1,899",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1765663241884-ebd171bdda1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHZlbHZldCUyMGFybWNoYWlyfGVufDF8fHx8MTc3MTg1MDQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Statement pieces with sculptural elegance",
  },
  {
    id: 3,
    name: "Meridian Series",
    category: "Dam Olish Kreslolari",
    price: "From $4,599",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1759722665610-e13e59aa117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWN0aW9uYWwlMjBjb3VjaHxlbnwxfHx8fDE3NzE4NTA0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Customizable configurations for modern living",
  },
  {
    id: 4,
    name: "Zenith Lounge",
    category: "Dam Olish Kreslolari",
    price: "From $2,199",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1767050321604-a2654be8fad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbG91bmdlJTIwY2hhaXIlMjBjdXNoaW9ufGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Perfect balance of form and relaxation",
  },
  {
    id: 5,
    name: "Imperial Chaise",
    category: "Dekorativ Kreslolar",
    price: "From $2,799",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1768573264026-b540abdc3384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2hhaXNlJTIwbG9uZ3VlfGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Timeless elegance meets contemporary design",
  },
  {
    id: 6,
    name: "Signature Series",
    category: "Dekorativ Kreslolar",
    price: "From $1,599",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1759264244744-4b0077534bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2NlbnQlMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bold designs that command attention",
  },
];

const categories = [
  "Barchasi",
  "Divanlar va Burchakli Divanlar",
  "Kreslolar",
  "Dam Olish Kreslolari",
  "Dekorativ Kreslolar",
];

export function Collections() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredCollections =
    activeCategory === "Barchasi"
      ? collections
      : collections.filter(item => item.category === activeCategory);

  return (
    <div className='relative w-full py-24 lg:py-32'>
      <div className='absolute top-0 right-0 w-[600px] h-[600px] opacity-5 pointer-events-none'>
        <div
          className='w-full h-full rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #1F3D2B 0%, transparent 70%)",
          }}
        />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='text-center mb-16 lg:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-block px-4 py-2 rounded-full mb-6 bg-greenDeep/5 border border-greenDeep/10'
          >
            <span className='text-sm tracking-wide text-greenDeep'>
              Maxsus saralangan to‘plam
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tight font-serif text-greenDeep font-light -tracking-[0.02em]'
          >
            Yumshoq mebellarning
            <span className='block mt-2 text-goldAccent font-normal'>
              Sara dizaynli kolleksiyalari
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg max-w-2xl mx-auto text-greenDeep/60'
          >
            Hayotdagi nozik va sifatni qadrlaydiganlar uchun yaratilgan, yuqori
            sifatli yumshoq mebellarning saralangan to‘plamini kashf eting.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-wrap justify-center gap-3 mb-16'
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 border font-normal ${
                activeCategory === category
                  ? "bg-goldAccent text-greenDeep border-goldAccent font-medium"
                  : "bg-greenDeep/5 text-greenDeep/60 border-greenDeep/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {filteredCollections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className='group relative'
            >
              <div className='relative h-[400px] rounded-3xl overflow-hidden mb-6'>
                <motion.div
                  animate={{
                    scale: hoveredId === item.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className='w-full h-full'
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-cover'
                  />
                </motion.div>

                <div
                  className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-greenDeep/80 via-transparent to-transparent ${
                    hoveredId === item.id ? "opacity-100" : "opacity-70"
                  }`}
                />

                <div className='absolute top-4 right-4 px-3 py-2 rounded-full backdrop-blur-md flex items-center gap-2 bg-goldAccent/90'>
                  <Star className='w-4 h-4 fill-greenDeep text-greenDeep' />
                  <span className='text-sm text-greenDeep font-medium'>
                    {item.rating}
                  </span>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0,
                    y: hoveredId === item.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className='absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md flex items-center gap-2 bg-goldAccent/95 text-greenDeep'
                >
                  <span className='font-medium'>Ko&apos;rish</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.button>
              </div>

              <div className='space-y-3'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-2xl mb-1 text-greenDeep font-normal'>
                      {item.name}
                    </h3>
                    <p className='text-sm text-greenDeep/50'>{item.category}</p>
                  </div>
                  <div className='text-lg whitespace-nowrap text-goldAccent font-medium'>
                    {item.price}
                  </div>
                </div>

                <p className='text-sm leading-relaxed text-greenDeep/60'>
                  {item.description}
                </p>

                <motion.button
                  className='flex items-center gap-2 pt-2 group/link'
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className='text-sm text-greenDeep font-medium'>
                    To&apos;liq kolleksiya
                  </span>
                  <ArrowRight className='w-4 h-4 text-goldAccent transition-transform group-hover/link:translate-x-1' />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-16'
        >
          <button className='px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl border-2 border-greenDeep text-greenDeep font-medium'>
            Barcha kolleksiyalar
          </button>
        </motion.div>
      </div>
    </div>
  );
}
