import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/60 py-16 lg:py-20">
      <Container className="text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
      </Container>
    </section>
  );
}
