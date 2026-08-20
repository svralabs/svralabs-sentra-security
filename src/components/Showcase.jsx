import React from 'react';
import Button from './Button';
import Card from './Card';
import Badge from './Badge';
import Header from './Header';
import Footer from './Footer';

export default function Showcase() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="max-w-[container-max] mx-auto px-margin-desktop py-20">
          <section className="mb-section-gap">
            <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">Component Showcase</h2>

            <div className="mb-12">
              <h3 className="font-headline-md text-headline-md mb-6">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary" size="small">Small</Button>
                <Button variant="primary" size="large">Large</Button>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-headline-md text-headline-md mb-6">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <Card>
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">security</span>
                  <h4 className="font-headline-sm text-headline-sm mb-4">Stealth Aesthetic</h4>
                  <p className="text-on-surface-variant">Deep blacks and technical neutrals create a non-distractive environment optimized for long-duration monitoring.</p>
                </Card>
                <Card>
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">precision_manufacturing</span>
                  <h4 className="font-headline-sm text-headline-sm mb-4">Industrial Precision</h4>
                  <p className="text-on-surface-variant">Strict alignment and rhythmic spacing units ensure data density without compromising structural clarity.</p>
                </Card>
                <Card>
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">layers</span>
                  <h4 className="font-headline-sm text-headline-sm mb-4">Tonal Layering</h4>
                  <p className="text-on-surface-variant">Depth is established through backdrop filters and semi-transparent layers rather than heavy shadows.</p>
                </Card>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-headline-md text-headline-md mb-6">Badges</h3>
              <div className="flex flex-wrap gap-4">
                <Badge variant="primary">New</Badge>
                <Badge variant="secondary">Updated</Badge>
                <Badge variant="tertiary">Featured</Badge>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
