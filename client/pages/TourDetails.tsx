import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, MapPin, Calendar, DollarSign, Star } from "lucide-react";

export default function TourDetails() {
  const { slug } = useParams<{ slug: string }>();
  const tour = useMemo(() => tours.find((t) => t.slug === slug), [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="max-w-xl w-full">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-semibold mb-2">Tour not found</h1>
            <p className="text-brand-gray-600 mb-6">The tour you are looking for does not exist or was removed.</p>
            <Button asChild>
              <Link to="/tours" className="inline-flex items-center">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Tours
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-[320px] md:h-[420px] overflow-hidden">
        <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="md:flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-brand-gray-600 mb-6">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {tour.region}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {tour.durationDays} day{tour.durationDays > 1 ? "s" : ""}</span>
              <span className="inline-flex items-center gap-2"><DollarSign className="w-4 h-4" /> {tour.priceUSD.toLocaleString()}</span>
              <span className="inline-flex items-center gap-2"><Star className="w-4 h-4" /> {tour.difficulty}</span>
            </div>
            <p className="text-lg text-brand-gray-700 leading-relaxed mb-8">{tour.description}</p>

            <h2 className="text-2xl font-semibold text-brand-gray-900 mb-3">Highlights</h2>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray-700 mb-10">
              {tour.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tour.images.slice(1).map((src) => (
                <img key={src} src={src} alt={`${tour.title} highlight`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>

          <div className="md:w-80 w-full">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-brand-gray-600">From</div>
                  <div className="text-3xl font-bold">${tour.priceUSD.toLocaleString()}</div>
                </div>
                <Button size="lg" className="w-full">Request Booking</Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full">
                  <Link to="/tours" className="inline-flex items-center justify-center"><ArrowLeft className="mr-2 w-4 h-4" /> Back to all tours</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
