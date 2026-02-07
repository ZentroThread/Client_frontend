import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="About Sarani Couture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white mb-4 font-serif">
              Our Story
            </h1>
            <p className="text-lg text-white/90">
              Three generations of crafting Sri Lankan elegance
            </p>
          </div>
        </div>
      </div>

      {/* Our Heritage */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif">
                Heritage & Tradition
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Sarani Couture was founded in 1965 in the heart of Colombo, bringing together
                  the finest artisans and craftspeople from across Sri Lanka.
                </p>
                <p>
                  For over five decades, we have been crafting exquisite bridal sarees, traditional
                  jewelry, and ceremonial attire.
                </p>
                <p>
                  Today, Sarani Couture is recognized as one of Sri Lanka's premier luxury brands.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758995115518-26f90aa61b97?q=80&w=1080"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761125135351-268e72e39158?q=80&w=1080"
                  alt="Traditional wear"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 font-serif">
              Our Values
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', text: 'Uncompromising quality in every stitch and detail' },
              { icon: Sparkles, title: 'Authenticity', text: 'True to our heritage and techniques' },
              { icon: Heart, title: 'Passion', text: 'Love for our craft drives everything we create' },
              { icon: Users, title: 'Community', text: 'Supporting local artisans and crafts' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-beige)] flex items-center justify-center">
                  <Icon className="h-8 w-8 text-[var(--accent-gold)]" />
                </div>
                <h3 className="mb-2 font-serif">{title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756483496981-05b741fdd40a?q=80&w=1080"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif">
                Handcrafted Excellence
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Every piece at Sarani Couture is crafted by master artisans with meticulous care.
                </p>
                <p>
                  From silk weaving to gold zari embroidery, perfection is ensured at every stage.
                </p>

                <div className="pt-4 space-y-3">
                  {[
                    'Hand-selected premium silk and fabrics',
                    'Traditional hand-weaving techniques',
                    'Gold zari embroidery by master artisans',
                    'Quality inspection at every stage',
                  ].map(item => (
                    <div key={item} className="flex gap-3">
                      <span className="w-2 h-2 bg-[var(--accent-gold)] rounded-full mt-2" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4 font-serif">
            Visit Our Showroom
          </h2>
          <p className="mb-8 text-white/90">
            Experience our collections in person and consult with our fashion experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94771234567"
              className="bg-[#25D366] text-white px-8 py-3 rounded-md hover:opacity-90"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="bg-white text-[var(--brand-primary)] px-8 py-3 rounded-md hover:opacity-90"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
