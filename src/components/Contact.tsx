import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactMessage } from '@lib/firebase/messages';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@utils/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContactMessage(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§10</span>
            <span className="h-px w-8 bg-white/20" />
            <span>CONTACT</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            GET IN TOUCH
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              REACH OUT
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              LET'S
              <br />
              <span className="text-zinc-500">CONNECT.</span>
              <br />
              BUILD.
            </h2>
            <p className="mt-6 text-sm leading-7 text-zinc-500">
              Have a project in mind? Need a digital solution? We're here to help.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-zinc-600 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Email
                  </span>
                  <p className="font-mono text-sm text-zinc-400">{COMPANY_EMAIL}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-zinc-600 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Phone
                  </span>
                  <p className="font-mono text-sm text-zinc-400">{COMPANY_PHONE}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-zinc-600 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Location
                  </span>
                  <p className="font-mono text-sm text-zinc-400">
                    {COMPANY_ADDRESS}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="border border-white/10 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none resize-y"
                  required
                />

                {status.message && (
                  <div className={`p-4 border font-mono text-sm ${
                    status.type === 'success' 
                      ? 'border-emerald-500/30 text-emerald-400' 
                      : 'border-red-500/30 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 border border-white/30 py-4 font-mono text-sm hover:bg-white hover:text-black transition disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            AVAILABLE FOR PROJECTS
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            RESPONSE WITHIN 24 HOURS
          </div>
        </div>
      </div>
    </section>
  );
}