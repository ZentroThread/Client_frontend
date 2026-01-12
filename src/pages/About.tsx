// export default function About() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-blue-600">About Page</h1>
//       <p>This is the About Page.</p>
//     </div>
//   )
// }
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Sarani Couture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#5C4033] mb-6 font-serif">
                Heritage & Tradition
              </h2>
              <div className="space-y-4 text-[#5C4033] leading-relaxed">
                <p>
                  Sarani Couture was founded in 1965 in the heart of Colombo, bringing together 
                  the finest artisans and craftspeople from across Sri Lanka. Our journey began 
                  with a simple vision: to preserve and celebrate the rich heritage of Sri Lankan 
                  traditional fashion.
                </p>
                <p>
                  For over five decades, we have been crafting exquisite bridal sarees, traditional 
                  jewelry, and ceremonial attire that honor our cultural legacy while embracing 
                  contemporary elegance. Each piece tells a story of skilled craftsmanship passed 
                  down through generations.
                </p>
                <p>
                  Today, Sarani Couture is recognized as one of Sri Lanka's premier luxury brands 
                  for traditional fashion, serving brides and families across the island and beyond. 
                  Our commitment to quality, authenticity, and artistic excellence remains unwavering.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFkaXRpb25hbCUyMHNhcmVlfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Traditional wear"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#5C4033] mb-4 font-serif">
              Our Values
            </h2>
            <p className="text-[#8B4513] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#8B4513]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#8B4513]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Excellence</h3>
              <p className="text-sm text-[#8B4513]">
                Uncompromising quality in every stitch and detail
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8B4513]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-[#8B4513]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Authenticity</h3>
              <p className="text-sm text-[#8B4513]">
                True to our heritage and traditional techniques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8B4513]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#8B4513]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Passion</h3>
              <p className="text-sm text-[#8B4513]">
                Love for our craft drives everything we create
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8B4513]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#8B4513]" />
              </div>
              <h3 className="text-[#5C4033] mb-2">Community</h3>
              <p className="text-sm text-[#8B4513]">
                Supporting local artisans and traditional crafts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzg4OTkyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl text-[#5C4033] mb-6 font-serif">
                Handcrafted Excellence
              </h2>
              <div className="space-y-4 text-[#5C4033] leading-relaxed">
                <p>
                  Every piece at Sarani Couture is a testament to the skill and dedication of our 
                  master craftspeople. Our artisans spend weeks, sometimes months, creating each 
                  bridal saree with meticulous attention to detail.
                </p>
                <p>
                  From hand-weaving silk to intricate gold thread embroidery, from traditional 
                  jewelry making to custom fitting, we ensure that every aspect of your special 
                  outfit is crafted to perfection.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                    <p>Hand-selected premium silk and fabrics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                    <p>Traditional hand-weaving techniques</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                    <p>Gold zari embroidery by master artisans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                    <p>Quality inspection at every stage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B4513] to-[#5C4033]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
            Visit Our Showroom
          </h2>
          <p className="text-[#E5D5C3] mb-8 text-lg">
            Experience our collections in person and consult with our fashion experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-md hover:bg-[#20BA5A] transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-[#8B4513] px-8 py-3 rounded-md hover:bg-[#E5D5C3] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
