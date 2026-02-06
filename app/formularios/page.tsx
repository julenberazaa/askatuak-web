'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function FormulariosPage() {
  // INSTRUCCIONES PARA AÑADIR UN GOOGLE FORM:
  // 1. Abre tu Google Form
  // 2. Haz click en "Enviar" (arriba derecha)
  // 3. Selecciona el ícono "<>" (HTML)
  // 4. Copia el link que aparece en src="..."
  // 5. Reemplaza el link en googleFormUrl abajo

  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-askatuak-blue-900 via-askatuak-blue-800 to-askatuak-blue-700 py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 rounded-full text-white text-sm font-bold mb-8">
              📋 Formulario
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wide text-white mb-6">
              Formulario de Inscripción
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Completa el formulario para inscribirte o renovar tu plaza en Askatuak
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Instrucciones para el usuario */}
              <div className="bg-blue-50 border-l-4 border-askatuak-blue-600 p-6 mb-8 rounded-r-xl">
                <h2 className="text-lg font-bold text-askatuak-blue-900 mb-2">
                  📝 Instrucciones
                </h2>
                <p className="text-slate-700">
                  Completa todos los campos del formulario. Si tienes alguna duda,
                  contacta con nosotros en{' '}
                  <a
                    href="mailto:askatuak@askatuak.com"
                    className="text-askatuak-blue-600 hover:underline font-semibold"
                  >
                    askatuak@askatuak.com
                  </a>
                </p>
              </div>

              {/* Google Form Iframe */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <iframe
                  src={googleFormUrl}
                  width="100%"
                  height="1400"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                >
                  Cargando formulario…
                </iframe>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 text-center">
                <p className="text-slate-600 mb-4">
                  ¿Problemas con el formulario?
                </p>
                <a
                  href="mailto:askatuak@askatuak.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-askatuak-blue-900 text-white font-bold rounded-xl hover:bg-askatuak-blue-800 transition-all hover:shadow-xl"
                >
                  Contactar por email
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instructions for Admins */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span>⚙️</span>
                Para administradores: Cómo cambiar el formulario
              </h2>
              <ol className="space-y-3 text-slate-50">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>Abre tu Google Form en Google Forms</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>Haz click en "Enviar" (botón arriba a la derecha)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>Selecciona el ícono <code className="bg-orange-700 px-2 py-1 rounded">&lt;&gt;</code> (HTML)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>Copia el link que aparece en <code className="bg-orange-700 px-2 py-1 rounded">src="..."</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">5.</span>
                  <span>Abre el archivo <code className="bg-orange-700 px-2 py-1 rounded">app/formularios/page.tsx</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">6.</span>
                  <span>Reemplaza el link en <code className="bg-orange-700 px-2 py-1 rounded">googleFormUrl</code> (línea 13)</span>
                </li>
              </ol>
              <div className="mt-6 pt-6 border-t border-orange-400">
                <p className="text-sm">
                  💡 <strong>Tip:</strong> Puedes tener múltiples páginas de formularios.
                  Solo crea nuevas carpetas como <code className="bg-orange-700 px-2 py-1 rounded">app/formulario-inscripcion</code>,
                  <code className="bg-orange-700 px-2 py-1 rounded">app/formulario-renovacion</code>, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
