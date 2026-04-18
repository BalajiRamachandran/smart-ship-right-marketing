'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const slides = [
  {
    src: '/screenshots/dashboard.png',
    alt: 'Smart Ship Right dashboard showing orders to ship, inventory stats, and real-time metrics',
    headline: 'Real-time Dashboard',
    description: 'Orders to ship, late orders, holds, picker performance — everything at a glance with live WebSocket updates.',
    badge: 'Live Updates',
    badgeColor: 'bg-green-500',
  },
  {
    src: '/screenshots/picking-batch.png',
    alt: 'Active picking batch showing items to pick, scan status, and tote assignment',
    headline: 'Batch Picking',
    description: 'Single and multi batch workflows with location-optimized routes. Barcode scanning validates every pick.',
    badge: '40% Faster',
    badgeColor: 'bg-blue-500',
  },
  {
    src: '/screenshots/packing-batch.png',
    alt: 'Packing batch with order verification, item scanning, and label generation',
    headline: 'Direct-to-Printer Labels',
    description: 'Labels and packing slips print directly to Zebra, DYMO, and thermal printers — no browser dialogs.',
    badge: 'Zero Clicks',
    badgeColor: 'bg-purple-500',
  },
  {
    src: '/screenshots/orders.png',
    alt: 'Order management list with status filters, search, and bulk actions',
    headline: 'Shopify Order Sync',
    description: 'Orders flow in via webhooks. Holds, fraud detection, and status tracking keep everything under control.',
    badge: '24/7 Sync',
    badgeColor: 'bg-amber-500',
  },
  {
    src: '/screenshots/skus.png',
    alt: 'SKU inventory list with stock levels, locations, and category filters',
    headline: 'Inventory Control',
    description: 'Track stock by SKU and location. Backorder detection, reservations, and Shopify variance checks built in.',
    badge: 'Real-time',
    badgeColor: 'bg-teal-500',
  },
  {
    src: '/screenshots/automation-rules.png',
    alt: 'Automation rules engine with conditions, actions, and triggers',
    headline: 'Automation Rules',
    description: 'Auto-hold fraud orders, auto-prioritize by carrier, trigger notifications — no code required.',
    badge: 'No Code',
    badgeColor: 'bg-rose-500',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="relative aspect-[16/10]">
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover object-top"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          ))}
        </div>

        {/* Overlay info bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent px-6 pb-5 pt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className={`inline-flex items-center rounded-full ${slide.badgeColor} px-2.5 py-0.5 text-xs font-semibold text-white mb-2`}>
                {slide.badge}
              </span>
              <h3 className="text-xl font-bold text-white">{slide.headline}</h3>
              <p className="mt-1 text-sm text-slate-300 max-w-md">{slide.description}</p>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Previous slide"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Next slide"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
