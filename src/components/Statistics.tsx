
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "50 000+",
      label: "Employés Formés",
      description: "Dans plus de 500 entreprises mondiales"
    },
    {
      icon: Clock,
      number: "75%",
      label: "Temps Économisé",
      description: "Sur les tâches d'administration formation"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taux de Completion",
      description: "Taux moyen de completion des formations"
    },
    {
      icon: Award,
      number: "99%",
      label: "Conformité",
      description: "Conformité réglementaire atteinte"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des Résultats Prouvés qui
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Parlent d'Eux-Mêmes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre plateforme a aidé des organisations du monde entier à rationaliser leurs processus 
            de formation et à obtenir des résultats remarquables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-xl font-semibold text-blue-400 mb-2">{stat.label}</div>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">ROI</div>
            <div className="text-white">300% de retour sur investissement moyen la première année</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">Installation</div>
            <div className="text-white">Mise en ligne en moins de 24h avec notre configuration rapide</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">Support</div>
            <div className="text-white">Note de satisfaction client de 4,9/5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
