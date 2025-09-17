import { Card, CardContent } from "../components/ui/card";
import { Leaf, Globe2, Users, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainable by Design",
      description:
        "We partner with reserves, lodges, and operators that protect wildlife and minimize impact—so your trip supports conservation.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description:
        "Our bilingual guides grew up exploring these trails. Their knowledge of seasons, wildlife, and culture shapes every tour.",
    },
    {
      icon: Globe2,
      title: "Authentic Experiences",
      description:
        "Small groups, family-owned restaurants, and community-led projects ensure your visit benefits local communities.",
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Certified guides, vetted partners, and clear briefings keep your adventure smooth and worry-free.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-brand-gray-700">
            We are a Costa Rican tour agency crafting meaningful travel across rainforests, volcanoes, and beaches. Our mission is to share the biodiversity and culture we love—responsibly and thoughtfully.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v) => (
              <Card key={v.title} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">{v.title}</h3>
                  <p className="text-brand-gray-600">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Hiking trail in the cloud forest"
              className="rounded-xl shadow-lg w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">Our Story</h2>
            <p className="text-brand-gray-700 leading-relaxed">
              What began as weekend hikes with friends became a mission to help travelers explore Costa Rica the right way—guided by locals who care. We design trips that balance adventure and comfort, so you return with unforgettable memories and a deeper connection to nature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
