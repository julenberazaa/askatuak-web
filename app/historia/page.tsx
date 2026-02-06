import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historia del Club',
  description: 'Explora 50 años de historia de Askatuak SBT. Desde 1975 hasta hoy, un legado de pasión por el baloncesto.',
};

export default function HistoriaPage() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/basketball/basketball-crowd-1.jpg"
          alt="Historia de Askatuak"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-askatuak-blue-900/70 via-askatuak-blue-900/50 to-askatuak-blue-900/80" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Historia del Club
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Medio siglo de historia viva. Un recorrido por 50 años de baloncesto,
                comunidad y valores en Donostia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro with Side Image */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Askatuak SaskiBaloi Taldea nació en <strong>1975</strong>, en pleno corazón de
                  Donostia-San Sebastián, con la ilusión de un grupo de apasionados del baloncesto
                  que querían crear algo más que un club deportivo: querían construir una comunidad.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Bajo el liderazgo del presidente <strong>Iñaki Almandóz</strong>, el club ha crecido
                  desde sus humildes inicios hasta convertirse en un referente del baloncesto formativo
                  en Gipuzkoa, manteniendo siempre sus valores fundacionales: esfuerzo, respeto,
                  trabajo en equipo y pasión por el juego.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/basketball/basketball-team-1.jpg"
                alt="Equipo Askatuak"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Archive Link - CRITICAL */}
      <section className="py-16 lg:py-24 bg-askatuak-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/basketball/basketball-action-1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-askatuak-accent rounded-full text-sm font-bold mb-6">
              📚 Archivo Histórico
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Explora nuestro archivo completo
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Hemos documentado meticulosamente <strong>cada año de nuestra historia</strong> desde
              1975 hasta hoy. Más de 50 años de fotografías, crónicas, resultados, leyendas y momentos
              inolvidables están preservados en nuestro archivo histórico.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-2xl text-gray-900 mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-askatuak-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ASK
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-askatuak-blue-900">Askatuak Historia</div>
                  <div className="text-gray-600">1975 | Historia Año a Año | 2026</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                El archivo histórico documenta:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">📖</span> Historias año por año
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">📰</span> Revista Askatuak
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">🏆</span> Leyendas del club
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">🤝</span> Acuerdo con GBC
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">🎉</span> Aniversarios
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <span className="font-semibold text-askatuak-blue-900">📸</span> Fotografías
                </div>
              </div>

              <a
                href="https://www.askatuak.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-askatuak-blue-900 text-white text-lg font-semibold rounded-xl hover:bg-askatuak-blue-800 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Visitar el Archivo Histórico
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-sm text-white/70">
              El archivo se abrirá en una nueva ventana. Es un sitio independiente dedicado
              exclusivamente a preservar nuestra historia.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Highlights */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-askatuak-blue-900 mb-16">
            Hitos históricos
          </h2>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* 1975 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-5xl font-black text-askatuak-blue-900 mb-2">1975</div>
                <h3 className="text-2xl font-semibold mb-4">Fundación del Club</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nace Askatuak SBT con la pasión de crear un club de baloncesto en Donostia.
                  Los primeros equipos comienzan su andadura con un sueño: construir comunidad.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/basketball/basketball-hoop-1.jpg"
                  alt="Fundación 1975"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 1985 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/basketball/basketball-training-1.jpg"
                  alt="Consolidación 1985"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-5xl font-black text-askatuak-blue-900 mb-2">1985</div>
                <h3 className="text-2xl font-semibold mb-4">Consolidación</h3>
                <p className="text-gray-600 leading-relaxed">
                  Primera década de éxitos. El club se consolida como referente del baloncesto
                  formativo en Gipuzkoa con múltiples categorías y cientos de jugadores.
                </p>
              </div>
            </div>

            {/* 2015 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-5xl font-black text-askatuak-blue-900 mb-2">2015</div>
                <h3 className="text-2xl font-semibold mb-4">40 Aniversario</h3>
                <p className="text-gray-600 leading-relaxed">
                  Celebración del 40 aniversario. Cuatro décadas de historia, formación
                  y compromiso con el baloncesto donostiarra.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/basketball/basketball-player-1.jpg"
                  alt="40 Aniversario"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 2025 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/basketball/basketball-dunk-1.jpg"
                  alt="50 Aniversario 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-askatuak-accent/20" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-askatuak-accent text-white rounded-full text-sm font-bold mb-3">
                  🎉 ¡Ahora!
                </div>
                <div className="text-5xl font-black text-askatuak-accent mb-2">2025</div>
                <h3 className="text-2xl font-semibold mb-4">50 Aniversario</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  50 años formando jugadores y personas. Celebración del aniversario con
                  eventos especiales y homenajes a nuestras leyendas.
                </p>
                <Link
                  href="/50-aniversario"
                  className="inline-flex items-center gap-2 text-askatuak-accent hover:text-askatuak-accent-hover font-semibold"
                >
                  Descubre la celebración
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Links */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-askatuak-blue-900">Explora más</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link
              href="/leyendas"
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-askatuak-blue-900 hover:shadow-xl transition-all"
            >
              <div className="relative h-[180px]">
                <Image
                  src="/images/basketball/basketball-action-2.jpg"
                  alt="Leyendas Askatuak"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-askatuak-blue-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-3xl mb-1">🏆</div>
                  <h3 className="text-lg font-bold text-white">Leyendas Askatuak</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Conoce a los grandes jugadores que han hecho historia en nuestro club.
                </p>
              </div>
            </Link>

            <Link
              href="/50-aniversario"
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-askatuak-accent hover:shadow-xl transition-all"
            >
              <div className="relative h-[180px]">
                <Image
                  src="/images/basketball/basketball-court-1.jpg"
                  alt="50 Aniversario"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-askatuak-accent/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-3xl mb-1">🎉</div>
                  <h3 className="text-lg font-bold text-white">50 Aniversario</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Celebra con nosotros medio siglo de baloncesto y comunidad.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
