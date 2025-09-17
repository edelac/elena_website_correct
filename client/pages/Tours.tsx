import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Calendar, DollarSign, Info } from "lucide-react";
import { tours } from "../data/tours";

export default function Tours() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 mb-3">
            Costa Rica Tours
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Handcrafted adventures across rainforests, volcanoes, beaches, and wildlife-rich national parks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour) => (
            <Card key={tour.slug} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-52 bg-brand-gray-100">
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-1">{tour.title}</h3>
                <div className="flex items-center gap-3 text-sm text-brand-gray-600 mb-3">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.region}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {tour.durationDays} day{tour.durationDays > 1 ? "s" : ""}</span>
                </div>
                <p className="text-brand-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-brand-gray-900 font-semibold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" /> {tour.priceUSD.toLocaleString()}
                  </div>
                  <Button asChild>
                    <Link to={`/tours/${tour.slug}`} className="inline-flex items-center">
                      Details <Info className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
