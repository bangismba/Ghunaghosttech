// src/components/Founder.tsx
import { motion } from "framer-motion";
import profile from "../assets/img/profile.jpg";

export default function Founder() {
  return (
    <section
      id="founder"
      className="w-full bg-gray-900 text-white px-6 py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src={profile}
            alt="Aliyu Muhammadu Babangida"
            className="rounded-2xl shadow-2xl w-72 md:w-96 object-cover border-4 border-blue-600"
          />
        </motion.div>

        {/* Founder Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Meet Our Founder
          </h2>
          <h3 className="text-2xl text-blue-500 font-semibold mb-6">
            Aliyu Muhammadu Babangida — CEO & Founder
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Born in Maiduguri and raised in Abuja, <strong>Aliyu Muhammadu Babangida </strong> 
            is a visionary software developer, UI/UX designer, and cybersecurity professional. 
            He founded <strong>Ghunaghost Tech Ltd</strong> with the mission to empower Africa’s 
            digital transformation through innovation, security, and education.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            The name <strong>“Ghunaghost”</strong> carries deep meaning — “Ghuna” represents 
            his ancestral clan from Dghwede Tribe of Gwoza LGA, Borno state, Nigeria while “Ghost” symbolizes the invisible 
            yet powerful nature of technology and cybersecurity. Together, the name stands 
            for a blend of heritage and high-tech innovation — the unseen power that drives 
            progress in the digital age.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Through Ghunaghost Tech Ltd, Aliyu leads a team committed to building secure, 
            scalable, and user-centered digital solutions — from web/mobile App design and development to cybersecurity 
            to tech education and cloud innovation — shaping the future of Africa’s digital ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-purple-800/20 pointer-events-none"></div>
    </section>
  );
}
