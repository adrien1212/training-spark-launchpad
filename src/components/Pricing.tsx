
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "Parfait pour découvrir notre plateforme",
      features: [
        "Jusqu'à 10 employés",
        "3 formations par mois",
        "Rapports de base",
        "Support par email",
        "Stockage 1GB"
      ],
      buttonText: "Commencer Gratuitement",
      popular: false
    },
    {
      name: "Business",
      price: "10€",
      period: "/mois",
      description: "Idéal pour les petites et moyennes entreprises",
      features: [
        "Jusqu'à 100 employés",
        "Formations illimitées",
        "Analytics avancés",
        "Signatures automatiques",
        "Support prioritaire",
        "Stockage 10GB",
        "Intégrations API"
      ],
      buttonText: "Essayer Business",
      popular: true
    },
    {
      name: "Enterprise",
      price: "20€",
      period: "/mois",
      description: "Pour les grandes organisations",
      features: [
        "Employés illimités",
        "Formations illimitées",
        "Analytics personnalisés",
        "Signatures automatiques",
        "Support dédié 24/7",
        "Stockage illimité",
        "API complète",
        "Formation personnalisée",
        "SSO et sécurité avancée"
      ],
      buttonText: "Essayer Enterprise",
      popular: false
    },
    {
      name: "Sur Mesure",
      price: "Contact",
      period: "",
      description: "Solution personnalisée pour vos besoins spécifiques",
      features: [
        "Configuration personnalisée",
        "Développement sur mesure",
        "Migration de données",
        "Formation dédiée",
        "Support premium",
        "SLA garantie",
        "Conformité spécifique"
      ],
      buttonText: "Nous Contacter",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Choisissez le Plan qui
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Vous Convient</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs transparents et flexibles pour accompagner votre croissance. 
            Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border border-gray-200'} hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Plus Populaire
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-semibold py-3 rounded-lg transition-colors duration-300`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Tous les plans incluent un essai gratuit de 14 jours • Aucune carte de crédit requise
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ Support client inclus</span>
            <span>✓ Mise à jour automatique</span>
            <span>✓ Sécurité bancaire</span>
            <span>✓ Conformité RGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
