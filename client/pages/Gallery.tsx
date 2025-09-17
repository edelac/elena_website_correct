import { tours } from "../data/tours";

export default function Gallery() {
  const images = tours.flatMap((t) => t.images.map((src) => ({ src, alt: t.title })));
  return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 mb-3">Costa Rica Gallery</h1>
          <p className="text-lg md:text-xl text-brand-gray-600 max-w-3xl mx-auto">A glimpse of our favorite moments—from rainforest canopies to Pacific sunsets.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="space-y-4">
          {images.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="w-full mb-4 rounded-lg break-inside-avoid object-cover" />
          ))}
        </div></div>
      </div>
    </div>
  );
}
