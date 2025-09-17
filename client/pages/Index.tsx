import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, MapPin, Leaf, Compass, Camera } from "lucide-react";
import { tours } from "../data/tours";

export default function Index() {
  const featured = tours.slice(0, 3);
  const gallery = tours.flatMap((t) => t.images.map((src) => ({ src, alt: t.title }))).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Costa Rica coastline at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Costa Rica
              <span className="block text-brand-orange-100">Rainforests, Volcanoes, Beaches</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Small-group tours crafted by local experts. Wildlife-rich jungles, cloud-forest canopies, and Pacific sunsets—experience Pura Vida.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/tours" className="inline-flex items-center">
                  Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 md:py-20 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">Local Guides. Real Adventure.</h2>
              <p className="text-lg text-brand-gray-700 mb-6">
                We are a Costa Rican tour agency creating authentic experiences across Arenal, Monteverde, Manuel Antonio, Tortuguero, and Guanacaste. From wildlife encounters to beach days, we curate trips that balance discovery and comfort.
              </p>
              <div className="flex flex-wrap gap-4 text-brand-gray-700">
                <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm"><PalmTree className="w-4 h-4 text-primary" /> Eco‑friendly operations</div>
                <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm"><Compass className="w-4 h-4 text-primary" /> Expert local guides</div>
                <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm"><MapPin className="w-4 h-4 text-primary" /> Small groups</div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="Rainforest canopy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">Popular Tours</h2>
              <p className="text-brand-gray-600 mt-2">Handpicked experiences our travelers love</p>
            </div>
            <Button variant="link" asChild>
              <Link to="/tours" className="inline-flex items-center">View all <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featured.map((tour) => (
              <Card key={tour.slug} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-brand-gray-100">
                  <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-brand-gray-900">{tour.title}</h3>
                  <p className="text-brand-gray-600 mt-2 line-clamp-2">{tour.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-brand-gray-900 font-semibold">${tour.priceUSD.toLocaleString()}</span>
                    <Button asChild>
                      <Link to={`/tours/${tour.slug}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 md:py-20 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">Gallery</h2>
              <p className="text-brand-gray-600 mt-2">A peek into the journey</p>
            </div>
            <Button variant="link" asChild>
              <Link to="/gallery" className="inline-flex items-center"><Camera className="mr-2 w-4 h-4" /> See more</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className="w-full h-40 md:h-56 object-cover rounded-lg" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for your Costa Rica adventure?</h2>
          <p className="mt-3 text-white/90">
            Tell us your travel style and dates—we'll craft the perfect itinerary.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Plan My Trip</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
