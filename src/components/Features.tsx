
import { Calendar, BarChart3, FileSignature, Users, Clock, Shield, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Planification Intelligente",
      description: "Planifiez facilement les sessions de formation avec détection automatique des conflits et notifications automatiques.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Analytics Temps Réel",
      description: "Suivez les taux de completion, les métriques d'engagement et le ROI avec des tableaux de bord complets.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FileSignature,
      title: "Signatures Automatiques",
      description: "Simplifiez la conformité avec des signatures numériques automatiquement capturées et stockées en sécurité.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Gestion des Employés",
      description: "Gérez les exigences de formation, certifications et progrès de tous les employés en un lieu central.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Suivi du Temps",
      description: "Suivez automatiquement les heures de formation et générez des rapports pour la conformité et la paie.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Gestion de Conformité",
      description: "Assurez la conformité réglementaire avec des rappels automatiques et le suivi des certifications.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tout ce dont vous avez besoin pour
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Gérer la Formation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plateforme complète élimine la complexité de la gestion de formation, 
            donnant aux équipes RH les outils nécessaires pour réussir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional benefits */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Choisir Notre Plateforme ?</h3>
            <p className="text-lg text-gray-600">Rejoignez des milliers de professionnels RH qui ont transformé leur gestion de formation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, text: "Installation 50% Plus Rapide" },
              { icon: CheckCircle, text: "99,9% de Disponibilité" },
              { icon: Shield, text: "Sécurité Entreprise" },
              { icon: Users, text: "Support 24/7" }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
