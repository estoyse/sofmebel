"use client";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallBack";

export function Hero() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-greenDeep '>
      <div className='absolute inset-0 opacity-30'>
        <div
          className='absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
        <div
          className='absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `linear-gradient(#C6A969 1px, transparent 1px), linear-gradient(90deg, #C6A969 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 lg:pt-24  pt-36 pb-16'>
        <div className='grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='space-y-8'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-goldAccent/30 bg-goldAccent/10'
            >
              <Sparkles className='w-4 h-4 text-goldAccent' />
              <span className='text-sm tracking-wide text-goldAccent'>
                2026 Collection
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='space-y-4 font-serif'
            >
              <h1 className='text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] text-white font-light -tracking-[0.02em]'>
                Uyingizni qulay
                <span className='block mt-2 text-goldAccent font-normal'>
                  va nafis qiling
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='text-lg lg:text-xl max-w-xl leading-relaxed text-white/70 font-light'
            >
              Sof Mebel bilan zamonaviy va sifatli mebellar orqali uyingizga
              yangi hayot bag‘ishlang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className='flex flex-wrap gap-4 pt-4'
            >
              <button className='group px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:gap-5 hover:shadow-2xl bg-goldAccent text-greenDeep font-medium'>
                <span className='tracking-wide'>
                  Kolleksiyalar bilan tanishish
                </span>
                <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
              </button>

              <button className='px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 border border-goldAccent/30 text-white font-normal'>
                <span className='tracking-wide'>Batafsil</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className='flex gap-12 pt-8'
            >
              <div>
                <div className='text-3xl mb-1 text-goldAccent font-light'>
                  500+
                </div>
                <div className='text-sm text-white/50'>Premium Dizaynlar</div>
              </div>
              <div>
                <div className='text-3xl mb-1 text-goldAccent font-light'>
                  50K+
                </div>
                <div className='text-sm text-white/50'>Mijozlar</div>
              </div>
              <div>
                <div className='text-3xl mb-1 text-goldAccent font-light'>
                  25+
                </div>
                <div className='text-sm text-white/50'>Yillik Tajriba</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative h-[600px] lg:h-[700px]'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='absolute top-0 right-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border border-goldAccent/20'
            >
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1762803841422-5b8cf8767cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzb2ZhfGVufDF8fHx8MTc3MTg0OTMxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Luxury modern sofa'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='absolute bottom-0 left-0 w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border border-goldAccent/20'
            >
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1760611656233-915efdf138b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwY2hhaXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE4NDkzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Minimalist luxury chair'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='absolute top-1/2 left-1/4 -translate-y-1/2 px-6 py-4 rounded-2xl backdrop-blur-xl shadow-2xl bg-greenDeep/80 border border-goldAccent/30'
            >
              <div className='text-sm mb-1 text-white/60'>Yangilik</div>
              <div className='text-xl mb-1 text-goldAccent font-medium'>
                Zenith Kolleksiyasi
              </div>
              <div className='text-sm text-white/80'>$2,499 dan boshlab</div>
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className='absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 border-2 border-goldAccent'
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className='absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10 border-2 border-goldAccent'
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-xs tracking-widest uppercase text-goldAccent/60'>
          Pastga
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='w-[1px] h-12 bg-goldAccent/40'
        />
      </motion.div>
    </div>
  );
}
