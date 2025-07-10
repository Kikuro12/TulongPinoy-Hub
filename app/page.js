import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, FileText, AlertTriangle, ShoppingCart, GraduationCap, Wifi, Brain, Gift } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TulongPinoy Hub</h1>
        <p className="text-lg md:text-xl mb-6">
          Free Digital Services for Every Filipino — Powered by Marwen Deiparine
        </p>
        <Button size="lg" className="bg-yellow-400 text-black font-bold hover:bg-yellow-300">
          Explore Services
        </Button>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Free Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, description }) => (
            <Card key={title} className="shadow-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Icon className="w-10 h-10 mb-4 text-blue-700" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 TulongPinoy Hub • Created by Marwen Deiparine
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Barangay Document Auto-Filler",
    icon: FileText,
    description: "Generate barangay certificates and clearances fast."
  },
  {
    title: "Free Job Alerts & Resume Builder",
    icon: Sparkles,
    description: "Create a resume and receive job listings in your area."
  },
  {
    title: "SMS Reminders",
    icon: Globe,
    description: "Set reminders for bills, meds, and important dates."
  },
  {
    title: "Disaster & Relief Info",
    icon: AlertTriangle,
    description: "Get updates on typhoons, earthquakes, and relief goods."
  },
  {
    title: "Digital Palengke",
    icon: ShoppingCart,
    description: "Buy and sell local goods through your barangay online."
  },
  {
    title: "Libre Edukasyon",
    icon: GraduationCap,
    description: "Free learning materials for all levels."
  },
  {
    title: "Free WiFi Map",
    icon: Wifi,
    description: "Find free internet zones near you."
  },
  {
    title: "Mental Health Support",
    icon: Brain,
    description: "Talk, reflect, and get help anonymously."
  },
  {
    title: "Load Raffle & Games",
    icon: Gift,
    description: "Win free load by joining raffles and fun quizzes."
  }
];