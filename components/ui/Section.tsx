import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  alt?: boolean;
}

export function Section({ children, className = '', containerClassName = '', alt = false }: SectionProps) {
  return (
    <section className={`py-16 lg:py-20 ${alt ? 'bg-slate-50' : 'bg-white'} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
