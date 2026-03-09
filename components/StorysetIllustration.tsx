import Image from 'next/image';

export const STORYSET_KEYS = [
  'hero',
  'warehouse',
  'inventory',
  'picking',
  'order',
  'dashboard',
  'integration',
] as const;

export type StorysetKey = (typeof STORYSET_KEYS)[number];

const ALT_BY_KEY: Record<StorysetKey, string> = {
  hero: 'Warehouse and delivery illustration',
  warehouse: 'Warehouse management illustration',
  inventory: 'Inventory and stock illustration',
  picking: 'Picking and fulfillment illustration',
  order: 'Order processing illustration',
  dashboard: 'Analytics dashboard illustration',
  integration: 'Integrations and connections illustration',
};

interface StorysetIllustrationProps {
  name: StorysetKey;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a Storyset/unDraw illustration from public/illustrations/storyset/{name}.svg.
 * Use alongside Sketches for a combined visual. See public/illustrations/storyset/README.md.
 */
export function StorysetIllustration({ name, className = '', priority = false }: StorysetIllustrationProps) {
  const src = `/illustrations/storyset/${name}.svg`;
  return (
    <Image
      src={src}
      alt={ALT_BY_KEY[name]}
      width={400}
      height={300}
      className={`w-full h-auto object-contain ${className}`}
      priority={priority}
    />
  );
}
