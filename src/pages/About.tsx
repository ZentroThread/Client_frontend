import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import Jewelry from '../assets/home/jewelry.jpg';
import saree from '../assets/home/sare.jpg'
import nilame from '../assets/home/nilame.jpg'
import hero2 from '../assets/home/hero3.jpg'
import {contacts} from '@/constants/contact'

export default function About() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      {/* Hero Section */}
<div className="relative h-105 md:h-135 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0">
    <ImageWithFallback
      src={hero2}
      alt="About Sarani Couture"
      className="w-full h-full object-cover"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/40"></div>
  </div>


  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

    <div className="max-w-2xl space-y-5">

      {/* Small Label */}
      <p className="text-sm tracking-[0.25em] uppercase text-(--accent-gold)">
        Sarani Couture
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
        Our Story
      </h1>

      {/* Gold Divider */}
      <div className="w-16 h-0.5 bg-(--accent-gold)"></div>

      {/* Description */}
      <p className="text-lg text-white/90 max-w-xl">
        Three generations of crafting Sri Lankan elegance and preserving
        timeless bridal traditions.
      </p>

    </div>

  </div>

</div>

      {/* Our Heritage */}
      <section className="py-16 md:py-24 bg-(--bg-primary)">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif text-(--brand-secondary)">
                Heritage & Tradition
              </h2>
              <div className="space-y-4 text-(--text-secondary) leading-relaxed">
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

            <div className="grid grid-cols-2 gap-4 ">
              <div className="aspect-3/4 overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={nilame}
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-3/4 overflow-hidden rounded-lg mt-8">
                <ImageWithFallback
                  src={saree}
                  alt="Traditional wear"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-linear-to-br from-(--accent-beige) to-(--surface-elevated) border-t border-(--border-soft)">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 font-serif text-(--brand-secondary)">
              Our Values
            </h2>
            <p className="text-(--text-muted) max-w-2xl mx-auto">
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-(--accent-beige) flex items-center justify-center">
                  <Icon className="h-8 w-8 text-(--accent-gold)" />
                </div>
                <h3 className="mb-2 font-serif">{title}</h3>
                <p className="text-sm text-(--text-muted)">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-4/3 overflow-hidden rounded-lg">
              <ImageWithFallback
                src= {Jewelry}
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif text-(--brand-secondary)">
                Handcrafted Excellence
              </h2>
              <div className="space-y-4 text-(--text-secondary)">
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
                      <span className="w-2 h-2 bg-(--accent-gold) rounded-full mt-2" />
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
      <section className="py-16 md:py-24 bg-linear-to-br from-(--accent-beige) to-(--surface-elevated) border-t border-(--border-soft)">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4 font-serif text-(--brand-secondary)">
            Visit Our Showroom
          </h2>
          <p className="mb-8 text-(--text-secondary)">
            Experience our collections in person and consult with our fashion experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${contacts.phone}`}
              className="bg-[#25D366] text-white px-8 py-3 rounded-md hover:opacity-90"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="bg-white text-(--brand-primary) px-8 py-3 rounded-md hover:opacity-90"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
