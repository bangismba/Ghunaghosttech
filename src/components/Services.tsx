// src/components/Services.tsx
import { Code, Palette, ShieldCheck, Rocket, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "We design and develop responsive, high-performance web and mobile applications tailored to meet your unique business goals and deliver seamless user experiences.",
      icon: <Smartphone className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Our creative design team builds visually stunning and user-focused interfaces that merge innovation with functionality, ensuring every click feels effortless.",
      icon: <Palette className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Cybersecurity",
      description:
        "We provide end-to-end cybersecurity solutions, from penetration testing to secure authentication, keeping your systems safe from modern digital threats.",
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Startup Acceleration",
      description:
        "From MVP development to branding and launch strategies, we help startups build solid foundations, scale fast, and make an impact in their industries.",
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Custom Web Solutions",
      description:
        "We build scalable, data-driven web platforms and tools that enhance productivity, automate processes, and unlock growth opportunities for your business.",
      icon: <Code className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section id="services" className="w-full bg-gray-50 text-gray-800 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What We <span className="text-blue-500">Offer</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-gray-900">GhunaGhost Tech Ltd</span>, 
          we deliver modern, secure, and intelligent technology solutions designed 
          to help businesses, startups, and individuals excel in a fast-changing digital world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
