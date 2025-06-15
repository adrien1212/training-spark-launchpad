
import { Calendar, BarChart3, FileSignature, Users, Clock, Shield, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Training Scheduling",
      description: "Effortlessly schedule training sessions with intelligent conflict detection and automatic notifications.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track training completion rates, engagement metrics, and ROI with comprehensive dashboards.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FileSignature,
      title: "Automatic Signatures",
      description: "Streamline compliance with digital signatures that are automatically captured and stored securely.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Employee Management",
      description: "Manage training requirements, certifications, and progress for all employees in one central location.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Automatically track training hours and generate reports for compliance and payroll purposes.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated reminders and certification tracking.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Manage Training</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform eliminates the complexity of training management, 
            giving HR teams the tools they need to succeed.
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h3>
            <p className="text-lg text-gray-600">Join thousands of HR professionals who have transformed their training management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, text: "50% Faster Setup" },
              { icon: CheckCircle, text: "99.9% Uptime" },
              { icon: Shield, text: "Enterprise Security" },
              { icon: Users, text: "24/7 Support" }
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
