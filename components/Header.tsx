'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'El Club',
    href: '#',
    children: [
      { name: 'Misión, Visión y Valores', href: '/mision-vision-valores' },
      { name: 'Estructura', href: '/estructura' },
      { name: '¿Dónde Estamos?', href: '/donde-estamos' },
      { name: 'Contacto', href: '/contacto' },
    ],
  },
  {
    name: 'Área Deportiva',
    href: '#',
    children: [
      { name: 'Askatuak Eskola', href: '/eskola' },
      { name: 'Equipos 2025/2026', href: '/equipos/2025-2026' },
      { name: 'Saskibaloia Denontzat', href: '/saskibaloia-denontzat' },
      { name: 'Resultados', href: '/resultados' },
      { name: 'Competiciones', href: '/competiciones' },
    ],
  },
  {
    name: 'Área Social',
    href: '#',
    children: [
      { name: 'Eventos', href: '/eventos' },
      { name: 'Noticias', href: '/noticias' },
      { name: 'Crónicas', href: '/cronicas' },
    ],
  },
  {
    name: 'Historia',
    href: '#',
    children: [
      { name: '50 Aniversario', href: '/50-aniversario' },
      { name: 'Historia del Club', href: '/historia' },
      { name: 'Leyendas', href: '/leyendas' },
    ],
  },
  {
    name: 'Galería',
    href: '#',
    children: [
      { name: 'Fotos', href: '/galeria/fotos' },
      { name: 'Videos', href: '/galeria/videos' },
      { name: 'Presentaciones', href: '/galeria/presentaciones' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center pb-1">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/brand/logo.png"
                  alt="Askatuak Saski Baloi Taldea Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bebas tracking-wide text-gray-900">ASKATUAK SASKI BALOI TALDEA</div>
                <div className="text-xs text-gray-600">Desde 1975</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-base font-semibold text-gray-900 hover:text-askatuak-blue transition-colors"
            >
              Inicio
            </Link>
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="px-4 py-2 text-base font-semibold text-gray-900 hover:text-askatuak-blue transition-colors">
                  {item.name}
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-askatuak-blue"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/inscripciones"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Inscripciones →
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 hover:text-askatuak-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-custom py-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href="/inscripciones"
              className="block px-4 py-3 text-base font-semibold bg-orange-500 text-white rounded-xl text-center mb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inscripciones →
            </Link>

            {navigation.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {item.name}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block pl-8 pr-4 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
