
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">traino</span>
            </div>
            <p className="text-gray-400 mb-6">
              Rationalisez votre gestion de formation RH avec notre plateforme complète.
              Planifiez, suivez et gérez toute votre formation employé en un seul endroit.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Intégrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sécurité</a></li>
            </ul>
          </div>

          {/* Company 
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>*/}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">contact@traino.fr</span>
              </div>
              {/* Contact 
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
              */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Toulouse, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 traino. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'Utilisation</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique des Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
