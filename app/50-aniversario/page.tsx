'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
  { value: '50', label: 'Años de historia' },
  { value: '11', label: 'Equipos esta temporada' },
  { value: '2', label: 'Escuelas' },
  { value: '∞', label: 'Recuerdos' },
];

const events = [
  {
    emoji: '🏛️',
    title: 'Acto Institucional',
    date: '23 de octubre, 2025',
    description: 'Entrega de medallas de oro a miembros destacados en el Ayuntamiento de Donostia.',
  },
  {
    emoji: '🏆',
    title: 'Torneo 50 Aniversario',
    date: 'Fechas por confirmar',
    description: 'Torneo especial con equipos invitados de toda la región.',
  },
  {
    emoji: '🎊',
    title: 'Cena de Gala',
    date: 'Fecha por confirmar',
    description: 'Reunión de leyendas del club y celebración con toda la familia Askatuak.',
  },
];

const galleryImages = [
  { src: '/images/basketball/basketball-action-1.jpg', alt: 'Acción', span: '' },
  { src: '/images/hero/hero-basketball-3.jpg', alt: 'Partido', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/basketball/basketball-kids-1.jpg', alt: 'Infantiles', span: '' },
  { src: '/images/basketball/basketball-training-1.jpg', alt: 'Entrenamiento', span: '' },
  { src: '/images/basketball/basketball-dunk-1.jpg', alt: 'Mate', span: '' },
];

export default function Aniversario50Page() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/hero-basketball-2.jpg"
            alt="50 Aniversario Askatuak"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-askatuak-blue-900/60 via-askatuak-accent/20 to-askatuak-blue-900/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-8">
                🎉 Edición Especial
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6">
                50 Aniversario
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-6">
                1975 — 2025
              </p>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Medio siglo construyendo historia, formando personas, creando comunidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message from President */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-askatuak-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    IA
                  </div>
                  <div>
                    <div className="text-xl font-bold text-askatuak-blue-900">Iñaki Almandóz</div>
                    <div className="text-slate-600">Presidente de Askatuak SBT</div>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed italic text-lg">
                    "Hace 50 años, un grupo de apasionados del baloncesto decidimos crear algo más
                    que un club deportivo. Queríamos construir una familia, una comunidad unida por
                    los valores del deporte y el respeto mutuo."
                  </p>
                  <p className="text-slate-700 leading-relaxed italic mt-6 text-lg">
                    "Hoy, medio siglo después, puedo decir con orgullo que lo hemos conseguido.
                    Miles de niños y niñas han aprendido a amar el baloncesto en Askatuak."
                  </p>
                  <p className="text-right font-semibold text-askatuak-blue-900 mt-8 not-italic">
                    — Iñaki Almandóz, 73 años
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/basketball/basketball-team-1.jpg"
                alt="Equipo Askatuak"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/basketball/basketball-court-1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-askatuak-blue-900 mb-16">
              50 años en cifras
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-black text-askatuak-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Mosaic */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-askatuak-blue-900 mb-16">
              Momentos inolvidables
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative h-[200px] md:h-[250px] rounded-xl overflow-hidden ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/basketball/basketball-crowd-1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-askatuak-blue-900/90" />
        </div>
        <div className="relative z-10 container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4">
              Eventos del 50 Aniversario
            </h2>
            <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto text-lg">
              A lo largo de 2025 celebramos con eventos especiales, homenajes y
              actividades para toda la comunidad Askatuak.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-6">{event.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{event.date}</p>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legends Recognition */}
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/basketball/basketball-player-1.jpg"
                alt="Leyendas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-askatuak-blue-900/90 via-askatuak-blue-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-2xl font-bold text-white">Leyendas Askatuak</h3>
              </div>
            </motion.div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-askatuak-blue-900 mb-8">
                Homenaje a nuestras leyendas
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                50 años de Askatuak son 50 años de grandes jugadores que han dejado su huella.
                Desde Essie "Helicoptero" Hollis y Nate "Sheriff" Davis hasta las nuevas generaciones,
                todos forman parte de nuestra historia.
              </p>
              <Link
                href="/leyendas"
                className="inline-flex items-center gap-3 px-8 py-4 bg-askatuak-accent text-white font-bold rounded-xl hover:bg-askatuak-accent-hover transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Conoce a las leyendas
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Historic Archive Link */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="text-5xl mb-6">📚</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-askatuak-blue-900 mb-8">
                50 años documentados
              </h2>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                Cada año de nuestra historia está meticulosamente documentado en nuestro archivo
                histórico. Fotografías, crónicas, resultados y anécdotas desde 1975 hasta hoy.
              </p>
              <a
                href="https://www.askatuak.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-askatuak-blue-900 text-white font-bold rounded-xl hover:bg-askatuak-blue-800 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Visitar archivo histórico
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/basketball/basketball-hoop-1.jpg"
                alt="Archivo histórico"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Share the Celebration */}
      <section className="py-24 lg:py-32">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-askatuak-blue-900 mb-8">
              Comparte tu historia
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              ¿Jugaste en Askatuak? ¿Tienes fotos antiguas? ¿Un recuerdo especial?
              Compártelo con el hashtag <strong className="text-askatuak-accent">#Askatuak50Años</strong>
            </p>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.facebook.com/Askatuak"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-askatuak-blue-800 text-white font-bold rounded-xl hover:bg-askatuak-blue-900 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/askatuak_sbt/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
