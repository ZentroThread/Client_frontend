import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-(--bg-primary)">
      {/* Header */}
      <div className="md:py-24 bg-linear-to-br from-(--accent-beige) to-(--surface-elevated) border-t border-(--border-soft) py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-(--brand-secondary)">
          <h1 className="text-4xl md:text-5xl  mb-4 font-serif">
            Get In Touch
          </h1>
          <p className="text-lg">
            We're here to help make your special day perfect
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-(--surface) rounded-xl p-6 border border-(--border-soft) shadow-md">
              <h3 className="text-lg font-serif text-(--text-primary) mb-6">
                Contact Information
              </h3>

              <InfoItem icon={MapPin} title="Address">
                123 Galle Road <br /> Colombo 03 <br /> Sri Lanka
              </InfoItem>

              <InfoItem icon={Phone} title="Phone">
                +94 77 123 4567 <br /> +94 11 234 5678
              </InfoItem>

              <InfoItem icon={Mail} title="Email">
                info@saranicouture.lk
              </InfoItem>

              <InfoItem icon={Clock} title="Hours">
                Mon – Sat: 9.00 AM – 7.00 PM <br />
                <span className="text-sm text-(--text-muted)">
                  Sundays by appointment
                </span>
              </InfoItem>

              <div className="mt-8 pt-6 border-t border-(--border-soft)">
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-(--brand-primary) text-white py-3 rounded-md hover:bg-(--accent-gold) transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form + Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Form */}
            <div className="bg-(--surface) p-8 rounded-xl border border-(--border-soft) shadow-md">
              <h3 className="text-2xl font-serif text-(--text-primary) mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input label="Full Name" placeholder="Your name" />
                  <Input label="Phone Number" placeholder="+94" />
                </div>

                <Input label="Email Address" placeholder="your@email.com" />
                <Select label="Inquiry Type" />
                <Textarea label="Message" />

                <button className="w-full bg-(--brand-primary) text-white py-3 rounded-md hover:bg-(--accent-gold) transition">
                  Send Message
                </button>

                <p className="text-center text-sm text-(--text-muted)">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>

            {/* Map */}
            <div className="bg-(--surface) border border-(--border-soft) rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-72"
                loading="lazy"
                src="https://www.google.com/maps?q=Galle+Road+Colombo+03&output=embed"
              />
              <div className="p-6">
                <h3 className="font-serif text-(--text-primary) mb-2">
                  Visit Our Showroom
                </h3>
                <p className="text-(--text-secondary) text-sm mb-4">
                  Experience our collections in person.
                </p>
                <a
                  href="https://maps.google.com/?q=Galle+Road+Colombo+03"
                  target="_blank"
                  className="text-(--brand-primary) hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */
function InfoItem({ icon: Icon, title, children }: any) {
  return (
    <div className="flex gap-4">
      <div className="p-3 rounded-full">
        <Icon className="h-5 w-5 text-(--brand-primary)" />
      </div>
      <div>
        <p className="text-sm text-(--text-muted)">{title}</p>
        <p className="text-(--text-secondary)">{children}</p>
      </div>
    </div>
  );
}


function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="block mb-2 text-(--text-secondary)">
        {label}
      </label>
      <input
        className="w-full px-4 py-3 rounded-md border border-(--border-soft) bg-(--surface-elevated)
        focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent
        hover:border-(--brand-primary) outline-none transition"
        placeholder={placeholder}
      />
    </div>
  );
}

function Select({ label }: any) {
  return (
    <div>
      <label className="block mb-2 text-(--text-secondary)">
        {label}
      </label>
      <select className="w-full px-4 py-3 rounded-md border border-(--border-soft) bg-(--surface-elevated)
      hover:border-(--brand-primary) transition">
        <option>Select an option</option>
        <option>Bridal Sarees</option>
        <option>Jewelry</option>
        <option>Nilame Suits</option>
        <option>Custom Order</option>
      </select>
    </div>
  );
}

function Textarea({ label }: any) {
  return (
    <div>
      <label className="block mb-2 text-(--text-secondary)">
        {label}
      </label>
      <textarea
        rows={5}
        className="w-full px-4 py-3 rounded-md border border-(--border-soft) bg-(--surface-elevated)
        focus:ring-2 focus:ring-(--brand-primary) hover:border-(--brand-primary)
        outline-none transition"
      />
    </div>
  );
}

export default Contact;
