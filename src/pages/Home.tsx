import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import heroImg from '../assets/home/hero2.jpg';
import Jewelery from '../assets/home/jewelry.jpg';
import saree from '../assets/home/sare.jpg'
import nilame from '../assets/home/nilame.jpg'
import nilame1 from '../assets/social/nilame1.jpg'
import lehanga1 from '../assets/social/lehanga1.jpg'
import lehanga2 from '../assets/social/lehanga2.jpg'
import sarre1 from '../assets/social/saree.jpg'
import { useGetAllAttiresForAllTenants } from '@/hooks/attires/useGetAllAttiresForAllTenants ';

const featuredCategories = [
  {
    id: 1,
    title: 'Bridal Sarees',
    image: saree,
    description: 'Exquisite handwoven silk sarees',
  },
  {
    id: 2,
    title: 'Traditional Jewelry',
    image: Jewelery,
    description: 'Gold-plated heritage designs',
  },
  {
    id: 3,
    title: 'Nilame Suits',
    image: nilame,
    description: 'Traditional ceremonial attire',
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
  const { attires: allProducts = [] } = useGetAllAttiresForAllTenants();

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
            {allProducts?.slice(0, 4).map((product) => (
              <ProductCard
                name={product.attireName} price={product.attirePrice.toString()} image={product.imageUrl || ''} key={product.id}
                {...product}
                id={String(product.id)}
                category={product.category.categoryName}
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
      {/* <section className="py-16 md:py-24 bg-[#8B4513] relative overflow-hidden">
       
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
      </section> */}

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
              nilame1,
              lehanga1,
              lehanga2,
              sarre1,
            ].map((img, idx) => (
              <a
                key={idx}
                href="https://web.facebook.com/hirusandubridalwear"
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
                      className="h-8 w-8 text-(--text-primary) dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-label="Facebook"
                    >
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
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
