// export default function Contact() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-blue-600">Contact Page</h1>
//       <p>This is the Contact Page.</p>
//     </div>
//   )
// }
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#8B4513] to-[#5C4033] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-serif">Get In Touch</h1>
          <p className="text-[#E5D5C3] text-lg">
            We're here to help make your special day perfect
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-[#E5D5C3]">
              <h3 className="text-[#5C4033] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8B4513]/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#8B4513]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B4513] mb-1">Address</p>
                    <p className="text-[#5C4033]">
                      123 Galle Road<br />
                      Colombo 03<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B4513]/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#8B4513]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B4513] mb-1">Phone</p>
                    <a href="tel:+94771234567" className="text-[#5C4033] hover:text-[#8B4513]">
                      +94 77 123 4567
                    </a>
                    <br />
                    <a href="tel:+94112345678" className="text-[#5C4033] hover:text-[#8B4513]">
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B4513]/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#8B4513]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B4513] mb-1">Email</p>
                    <a href="mailto:info@saranicouture.lk" className="text-[#5C4033] hover:text-[#8B4513]">
                      info@saranicouture.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B4513]/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#8B4513]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B4513] mb-1">Hours</p>
                    <p className="text-[#5C4033]">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM<br />
                      <span className="text-sm text-[#8B4513]">Sundays by appointment</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5D5C3]">
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#20BA5A] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-[#E5D5C3]">
              <h3 className="text-2xl text-[#5C4033] mb-6 font-serif">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#5C4033] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-[#E5D5C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-[#FAF8F6]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#5C4033] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-[#E5D5C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-[#FAF8F6]"
                      placeholder="+94"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#5C4033] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[#E5D5C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-[#FAF8F6]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-[#5C4033] mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    className="w-full px-4 py-3 border border-[#E5D5C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-[#FAF8F6]"
                  >
                    <option value="">Select an option</option>
                    <option value="bridal">Bridal Sarees</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="nilame">Nilame Suits</option>
                    <option value="party">Party Wear</option>
                    <option value="custom">Custom Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#5C4033] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-[#E5D5C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-[#FAF8F6]"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#D4AF37] transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-[#8B4513] text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#E5D5C3]">
              <div className="aspect-[16/9] bg-[#E5D5C3] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128532!2d79.84434731477232!3d6.914744095007668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259682f35d0dd%3A0x82d5c12ab5c3b6c0!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1647234567890!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#5C4033] mb-2">Visit Our Showroom</h3>
                <p className="text-sm text-[#8B4513] mb-4">
                  Experience our collections in person. Book an appointment for personalized service.
                </p>
                <a
                  href="https://maps.google.com/?q=Galle+Road+Colombo+03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#8B4513] hover:text-[#5C4033] underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5C4033] mb-8 font-serif text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-[#E5D5C3] pb-6">
              <h3 className="text-[#5C4033] mb-2">Do you offer custom designs?</h3>
              <p className="text-[#8B4513]">
                Yes! We specialize in custom bridal wear. Our designers will work closely with you 
                to create your dream outfit. Contact us to schedule a consultation.
              </p>
            </div>

            <div className="border-b border-[#E5D5C3] pb-6">
              <h3 className="text-[#5C4033] mb-2">How long does it take for a custom order?</h3>
              <p className="text-[#8B4513]">
                Custom orders typically take 4-8 weeks depending on the complexity and embroidery 
                work required. We recommend ordering at least 3 months before your event.
              </p>
            </div>

            <div className="border-b border-[#E5D5C3] pb-6">
              <h3 className="text-[#5C4033] mb-2">Do you ship internationally?</h3>
              <p className="text-[#8B4513]">
                Yes, we ship worldwide. Shipping costs and delivery times vary by location. 
                Contact us for a shipping quote.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-[#5C4033] mb-2">Can I schedule a private viewing?</h3>
              <p className="text-[#8B4513]">
                Absolutely! We offer private appointments for brides and their families. 
                Contact us via WhatsApp or call to schedule your exclusive viewing session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;