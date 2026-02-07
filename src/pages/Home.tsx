import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import heroImg from '../assets/home/hero2.jpg';

const featuredCategories = [
  {
    id: 1,
    title: 'Bridal Sarees',
    image: 'https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Exquisite handwoven silk sarees',
  },
  {
    id: 2,
    title: 'Traditional Jewelry',
    image: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gold-plated heritage designs',
  },
  {
    id: 3,
    title: 'Nilame Suits',
    image: 'https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFkaXRpb25hbCUyMHNhcmVlfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional ceremonial attire',
  },
];

const bestSellers = [
  {
    id: 1,
    name: 'Kandy Bridal Saree',
    category: 'Bridal Sarees',
    price: 'LKR 125,000',
    image: 'https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Temple Jewelry Set',
    category: 'Jewelry',
    price: 'LKR 85,000',
    image: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Royal Lehenga',
    category: 'Party Wear',
    price: 'LKR 95,000',
    image: 'https://images.unsplash.com/photo-1767790693645-2373e54d4f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGVoZW5nYSUyMGRyZXNzfGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Silk Saree Collection',
    category: 'Sarees',
    price: 'LKR 75,000',
    image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzg4OTkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const testimonials = [
  {
    name: 'Dilini Perera',
    text: 'The bridal saree I wore on my wedding day was absolutely stunning. The craftsmanship and attention to detail were exceptional. I felt like royalty!',
    rating: 5,
  },
  {
    name: 'Amaya Silva',
    text: 'Sarani Couture made my dream wedding outfit come true. The traditional jewelry perfectly complemented my saree. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sanduni Fernando',
    text: 'Exceptional quality and beautiful designs. The team was so helpful in customizing my lehenga. Worth every rupee!',
    rating: 5,
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-150 md:h-175 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Bridal Collection"
            className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            {/* Tagline */}
            <div className="inline-block px-4 py-2 bg-(--accent-gold)/20 backdrop-blur-sm rounded-full">
              <span className="text-(--accent-gold) text-sm tracking-widest font-medium">
                NEW COLLECTION 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white">
              Where Tradition Meets{" "}
              <span className="text-(--accent-gold)">Elegance</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/90">
              Discover our exquisite collection of handcrafted Sri Lankan bridal sarees,
              traditional jewelry, and ceremonial attire.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* Explore Collections */}
              <Link to="/products">
                <button className="
                  relative overflow-hidden px-8 py-3 rounded-lg font-medium shadow-lg
                  bg-(--brand-secondary) text-white
                  transition-all duration-300
                  hover:bg-linear-to-r hover:from-(--brand-primary) hover:to-(--accent-gold)
                  hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-(--accent-gold) focus:ring-offset-2
                ">
                  Explore Collections
                  {/* Optional subtle shine effect */}
                  <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transform skew-x-[-20deg] group-hover:w-full transition-all duration-500 pointer-events-none"></span>
                </button>
              </Link>

              {/* WhatsApp Inquiry */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative overflow-hidden px-8 py-3 rounded-lg font-medium shadow-lg
                  bg-white text-(--brand-secondary)
                  transition-all duration-300
                  hover:bg-(--accent-beige) hover:text-(--brand-primary)
                  focus:outline-none focus:ring-2 focus:ring-(--accent-gold) focus:ring-offset-2
                "
              >
                WhatsApp Inquiry
                <span className="absolute top-0 left-0 w-0 h-full bg-(--accent-gold)/20 transform skew-x-[-20deg] group-hover:w-full transition-all duration-500 pointer-events-none"></span>
              </a>
            </div>

          </div>
        </div>

        {/* Decorative Gradient Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-(--bg-primary) to-transparent">    </div>
      </section>


      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-(--bg-primary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-(--brand-primary) mb-4 font-serif">
              Featured Collections
            </h2>
            <p className="text-(--text-secondary) max-w-2xl mx-auto">
              Explore our carefully curated collections of traditional Sri Lankan fashion
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/product/${category.id}`}
                className="group relative overflow-hidden rounded-lg aspect-4/5 block shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Image */}
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl mb-2 font-serif">{category.title}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                  <div className="mt-4 inline-block border-b-2 border-(--accent-gold) pb-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Shop Now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-(--bg-primary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-(--brand-primary) mb-4 font-serif">
              Best Sellers
            </h2>
            <p className="text-(--text-secondary) font-medium">
              Our most loved pieces
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard
                tenantId={''}
                key={product.id}
                {...product}
                id={String(product.id)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="
                relative inline-block px-8 py-3 rounded-lg font-medium shadow-lg
                bg-(--brand-secondary) text-white
                transition-all duration-300
                hover:bg-linear-to-r hover:from-(--brand-primary) hover:to-(--accent-gold)
                hover:text-black
                focus:outline-none focus:ring-2 focus:ring-(--accent-gold) focus:ring-offset-2
              "
            >
              View All Products
              {/* Optional subtle shine animation */}
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transform skew-x-[-20deg] group-hover:w-full transition-all duration-500 pointer-events-none"></span>
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#8B4513] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
              What Our Brides Say
            </h2>
            <p className="text-[#E5D5C3]">Real stories from our cherished customers</p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <Quote className="h-12 w-12 text-[#D4AF37] mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-white text-lg mb-6 leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>

              <p className="text-[#D4AF37]">
                — {testimonials[currentTestimonial].name}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#5C4033] mb-4 font-serif">
              Follow Our Journey
            </h2>
            <p className="text-[#8B4513] mb-4">@saranicouture</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFkaXRpb25hbCUyMHNhcmVlfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1767790693645-2373e54d4f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGVoZW5nYSUyMGRyZXNzfGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((img, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Instagram ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#8B4513]/0 group-hover:bg-[#8B4513]/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-[#8B4513] to-[#5C4033]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
            Ready to Find Your Perfect Outfit?
          </h2>
          <p className="text-[#E5D5C3] mb-8 text-lg">
            Contact us on WhatsApp for personalized assistance and custom orders
          </p>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-md hover:bg-[#20BA5A] transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
