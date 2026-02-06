'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import AnimatedCard from '@/components/cards/AnimatedCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const quickAccessCards = [
  {
    title: 'Askatuak Eskola',
    description: 'Deporte escolar en San Patricio y Altza desde los 6 años',
    image: '/images/basketball/basketball-kids-1.jpg',
    href: '/eskola',
  },
  {
    title: 'Equipos 25/26',
    description: '11 equipos federados en todas las categorías',
    image: '/images/basketball/basketball-team-1.jpg',
    href: '/equipos/2025-2026',
  },
  {
    title: '50 Aniversario',
    description: '1975-2025: Medio siglo de historia',
    image: '/images/basketball/basketball-crowd-1.jpg',
    href: '/50-aniversario',
  },
  {
    title: 'Últimos Resultados',
    description: 'Victoria 76-80 Cadete Yoga Shala',
    image: '/images/basketball/basketball-match-1.jpg',
    href: '/resultados',
  },
  {
    title: 'Campus Verano',
    description: 'Julio 2026 - ¡Inscripciones abiertas!',
    image: '/images/basketball/basketball-training-1.jpg',
    href: '/eskola/campus-verano',
  },
  {
    title: 'Contacto',
    description: 'Únete a la familia Askatuak',
    image: '/images/basketball/basketball-court-1.jpg',
    href: '/contacto',
  },
];

const latestNews = [
  {
    title: 'Otro paso más para impulsar el respeto',
    date: '30/01/2026',
    excerpt: 'El Diario Vasco destaca la labor de Askatuak en la promoción del respeto.',
    image: '/images/news/respeto-baloncesto.jpg',
    href: '/noticias/respeto-baloncesto',
  },
  {
    title: 'El Infantil 2012 se juega subir a Rendimiento Oro',
    date: '29/01/2026',
    excerpt: 'Este sábado se juega el partido de promoción. ¡Aupa mutilak!',
    image: '/images/news/infantil-2012-promocion.jpg',
    href: '/noticias/infantil-2012-promocion',
  },
  {
    title: 'El cadete Yoga Shala inicia la Liga con victoria',
    date: '26/01/2026',
    excerpt: 'Victoria emocionante 76-80 en prórroga frente a Ostadar.',
    image: '/images/news/cadete-yoga-shala-victoria.jpg',
    href: '/noticias/cadete-yoga-shala-victoria',
  },
];

const sponsors = [
  { name: 'Pressing Piscinas', logo: '/images/sponsors/pressing.jpg' },
  { name: 'Clínica Alaia', logo: '/images/sponsors/clinica-alaia.jpg' },
  { name: 'Donostia Udala', logo: '/images/sponsors/donostia-udala.jpg' },
  { name: 'Yoga Shala', logo: '/images/sponsors/yoga-shala.jpg' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Parallax Background */}
        <Parallax speed={-20} className="absolute inset-0 h-[120%]">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero/hero-basketball-1.jpg"
              alt="Askatuak Basketball"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </Parallax>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-askatuak-blue-900/70 via-askatuak-blue-900/50 to-askatuak-blue-900/90" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-askatuak-accent rounded-full text-sm font-bold mb-10"
            >
              🏀 Temporada 2025/2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
            >
              50 años de pasión
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-slate-200"
            >
              Askatuak SaskiBaloi Taldea · Donostia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/inscripciones"
                className="inline-flex items-center gap-3 px-10 py-5 bg-askatuak-accent text-white text-lg font-bold rounded-xl hover:bg-askatuak-accent-hover transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Inscripciones 2025/2026
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ========== QUICK ACCESS CARDS ========== */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-askatuak-blue-900 mb-16">
              Descubre Askatuak
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {quickAccessCards.map((card, index) => (
              <AnimatedCard
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== 50 ANIVERSARIO BANNER ========== */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <Parallax speed={-15} className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/basketball/basketball-action-1.jpg"
              alt="50 Aniversario"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-askatuak-blue-900/90" />
          </div>
        </Parallax>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-askatuak-accent rounded-full text-sm font-bold text-white mb-8">
                🎉 Celebración Especial
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                1975 — 2025
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Medio siglo de compromiso con el baloncesto, la formación y nuestra comunidad
              </p>
              <Link
                href="/50-aniversario"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-askatuak-blue-900 font-bold rounded-xl hover:bg-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Conoce nuestra historia
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== LATEST NEWS ========== */}
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-askatuak-blue-900">
                Últimas noticias
              </h2>
              <Link
                href="/noticias"
                className="text-askatuak-accent hover:text-askatuak-accent-hover font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Ver todas
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={article.href} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <time className="text-sm text-slate-500 font-medium">{article.date}</time>
                      <h3 className="text-xl font-bold text-askatuak-blue-900 mt-3 mb-3 group-hover:text-askatuak-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SASKIBALOIA DENONTZAT ========== */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-full text-sm font-bold mb-8">
                ♿ Baloncesto Inclusivo
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-askatuak-blue-900 mb-8">
                Saskibaloia Denontzat
              </h2>
              <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto">
                Baloncesto para todos y todas. En Askatuak creemos en el deporte inclusivo,
                donde cada persona puede disfrutar sin importar su nivel o capacidad.
              </p>
              <Link
                href="/saskibaloia-denontzat"
                className="inline-flex items-center gap-3 px-8 py-4 bg-askatuak-blue-900 text-white font-bold rounded-xl hover:bg-askatuak-blue-800 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Descubre más
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SPONSORS ========== */}
      <section className="py-24 lg:py-32 border-t border-slate-200">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-askatuak-blue-900 mb-4">
              Nuestros patrocinadores
            </h2>
            <p className="text-center text-slate-600 mb-16 text-lg">
              Gracias a su apoyo, seguimos creciendo
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center aspect-[3/2]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/patrocinadores"
                className="text-askatuak-accent hover:text-askatuak-accent-hover font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Ver todos los patrocinadores
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <Parallax speed={-10} className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/basketball/basketball-action-2.jpg"
              alt="Únete a Askatuak"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-askatuak-blue-900/90" />
          </div>
        </Parallax>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
                ¿Listo para unirte a Askatuak?
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12">
                Abrimos inscripciones para la temporada 2025/2026.
                ¡Forma parte de nuestra historia!
              </p>
              <Link
                href="/inscripciones"
                className="inline-flex items-center gap-3 px-10 py-5 bg-askatuak-accent text-white text-lg font-bold rounded-xl hover:bg-askatuak-accent-hover transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Inscríbete ahora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
