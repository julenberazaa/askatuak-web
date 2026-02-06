'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import AnimatedSection from '@/components/ui/AnimatedSection';

const registrationOptions = [
  {
    title: 'Askatuak Eskola',
    emoji: '🏀',
    description: 'Deporte escolar para niños y niñas desde 6 años. Formación integral en baloncesto.',
    image: '/images/basketball/basketball-kids-1.jpg',
    features: [
      'Sedes: San Patricio y Altza',
      'Entrenamientos 2-3 veces/semana',
      'Técnicos titulados',
      'Competiciones escolares',
    ],
    href: '/eskola',
    buttonText: 'Más información →',
    accent: false,
  },
  {
    title: 'Equipos Federados',
    emoji: '🏆',
    description: '11 equipos competitivos en todas las categorías. Desde minibasket hasta senior.',
    image: '/images/basketball/basketball-team-1.jpg',
    features: [
      'Infantil, Cadete, Junior',
      'Rendimiento y participación',
      'Ligas federadas (FBV, GBF)',
      'Preparación física profesional',
    ],
    href: '/equipos/2025-2026',
    buttonText: 'Ver equipos →',
    accent: false,
  },
  {
    title: 'Campus de Verano',
    emoji: '☀️',
    description: 'Experiencia única de baloncesto durante el verano. Diversión y aprendizaje.',
    image: '/images/basketball/basketball-training-1.jpg',
    features: [
      'Julio 2026',
      'De 6 a 16 años',
      'Actividades complementarias',
      'Horario de 9:00 a 14:00',
    ],
    href: '/eskola/campus-verano',
    buttonText: 'Inscribirse →',
    accent: true,
  },
];

const whyAskatuak = [
  { icon: '50', title: '50 años de experiencia', description: 'Medio siglo formando jugadores y personas.' },
  { icon: '👥', title: 'Comunidad familiar', description: 'Más que un club, una familia unida por el baloncesto.' },
  { icon: '🎓', title: 'Técnicos cualificados', description: 'Entrenadores titulados y con amplia experiencia.' },
  { icon: '💙', title: 'Valores deportivos', description: 'Respeto, esfuerzo, trabajo en equipo y pasión.' },
];

export default function InscripcionesPage() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <Parallax speed={-15} className="absolute inset-0 h-[120%]">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero/hero-basketball-3.jpg"
              alt="Inscripciones Askatuak"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-askatuak-blue-900/95 to-askatuak-blue-900/70" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-askatuak-accent rounded-full text-white text-sm font-bold mb-8">
                📋 Plazas abiertas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Inscripciones 2025/2026
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Únete a la familia Askatuak. Abrimos inscripciones para deporte escolar,
                equipos federados y campus de verano.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-askatuak-blue-900 mb-16 text-center">
              Elige tu opción
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {registrationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${option.accent ? 'from-askatuak-accent/90' : 'from-askatuak-blue-900/90'} via-transparent to-transparent`} />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-5xl">{option.emoji}</div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-askatuak-blue-900 mb-3">{option.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={option.href}
                    className={`block w-full text-center px-6 py-4 font-bold rounded-xl transition-all hover:shadow-2xl hover:-translate-y-1 ${
                      option.accent
                        ? 'bg-askatuak-accent text-white hover:bg-askatuak-accent-hover'
                        : 'bg-askatuak-blue-900 text-white hover:bg-askatuak-blue-800'
                    }`}
                  >
                    {option.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Askatuak */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-askatuak-blue-900 mb-10">
                ¿Por qué Askatuak?
              </h2>
              <div className="space-y-8">
                {whyAskatuak.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-askatuak-blue-900 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-askatuak-blue-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/basketball/basketball-action-1.jpg"
                alt="Jugadores Askatuak"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Parallax speed={-10} className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/basketball/basketball-court-1.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-askatuak-blue-900/90" />
          </div>
        </Parallax>
        <div className="relative z-10 container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8">
                RENOVACIONES TEMPORADA
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                ¿Ya formas parte de Askatuak? Renueva tu inscripción para la temporada 2025/2026.
                Contacta con nosotros para más información.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-askatuak-blue-900 font-bold rounded-xl hover:bg-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-lg"
                >
                  Contactar
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="mailto:askatuak@askatuak.com"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-askatuak-accent text-white font-bold rounded-xl hover:bg-askatuak-accent-hover transition-all hover:shadow-2xl hover:-translate-y-1 text-lg"
                >
                  askatuak@askatuak.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
