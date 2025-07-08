
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice RH",
      company: "TechCorp Solutions",
      content: "Cette plateforme a complètement transformé notre gestion de formation. Nous sommes passés de 10 heures par semaine sur la planification à seulement 1 heure. La fonction signatures automatiques seule nous a fait économiser d'innombrables heures de paperasse.",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Pierre Martin",
      role: "Chief People Officer",
      company: "Innovation Labs",
      content: "Le tableau de bord analytique nous donne des insights que nous n'avions jamais eus auparavant. Nous pouvons maintenant suivre l'efficacité de formation et prendre des décisions basées sur les données pour nos programmes d'apprentissage. Absolument révolutionnaire.",
      rating: 5,
      avatar: "PM"
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Formation",
      company: "Manufacturing Global",
      content: "La conformité était notre plus gros casse-tête. Maintenant avec le suivi automatisé et les signatures numériques, nous sommes toujours prêts pour les audits. La tranquillité d'esprit que cela nous apporte est inestimable.",
      rating: 5,
      avatar: "SB"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Adoré par les
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Professionnels RH</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ne nous croyez pas sur parole. Voici ce que disent les leaders RH de 
            leur expérience avec notre plateforme de gestion de formation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Approuvé par des entreprises de toutes tailles</p>
          <div className="flex justify-center items-center gap-12 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-300 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
