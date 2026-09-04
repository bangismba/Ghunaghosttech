import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactMessage } from '@lib/firebase/messages';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
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
  const [focused, setFocused] = useState<string | null>(null);

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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: COMPANY_EMAIL },
    { icon: Phone, label: 'Phone', value: COMPANY_PHONE },
    { icon: MapPin, label: 'Location', value: COMPANY_ADDRESS },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/3 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="border-y border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            <span>§10</span>
            <span className="h-px w-8 bg-[var(--border-color)]" />
            <span>CONTACT</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
            GET IN TOUCH
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              REACH OUT
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl text-[var(--text-primary)]">
              LET'S
              <br />
              <span className="text-[var(--text-secondary)]">CONNECT.</span>
              <br />
              BUILD.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)] max-w-sm">
              Have a project in mind? Need a digital solution? We're here to help.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-12 space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <Icon className="h-4 w-4 text-[#00d4ff]" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {item.label}
                      </span>
                      <p className="font-mono text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Availability Badge */}
            <div className="mt-10 flex items-center gap-3 p-3 border border-[var(--border-color)] rounded-xl bg-[var(--bg-secondary)]/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
                Available for projects
              </span>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] tracking-tight">
                  Send a Message
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={`block text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5 transition-colors ${
                      focused === 'name' ? 'text-[#00d4ff]' : 'text-[var(--text-muted)]'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                      required
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full transition-all duration-300 ${
                      focused === 'name' ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </div>
                  <div className="relative">
                    <label className={`block text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5 transition-colors ${
                      focused === 'email' ? 'text-[#00d4ff]' : 'text-[var(--text-muted)]'
                    }`}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                      required
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full transition-all duration-300 ${
                      focused === 'email' ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className={`block text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5 transition-colors ${
                    focused === 'phone' ? 'text-[#00d4ff]' : 'text-[var(--text-muted)]'
                  }`}>
                    Phone Number (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full transition-all duration-300 ${
                    focused === 'phone' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Subject */}
                <div className="relative">
                  <label className={`block text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5 transition-colors ${
                    focused === 'subject' ? 'text-[#00d4ff]' : 'text-[var(--text-muted)]'
                  }`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full transition-all duration-300 ${
                    focused === 'subject' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className={`block text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5 transition-colors ${
                    focused === 'message' ? 'text-[#00d4ff]' : 'text-[var(--text-muted)]'
                  }`}>
                    Your Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300 resize-y"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full transition-all duration-300 ${
                    focused === 'message' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div className={`flex items-start gap-3 p-4 rounded-xl border ${
                    status.type === 'success' 
                      ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' 
                      : 'border-red-500/30 bg-red-500/5 text-red-400'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm font-mono">{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] py-4 font-mono text-sm text-white hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative flex items-center justify-center gap-3">
                    <Send className="h-4 w-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                    <ArrowRight className={`h-4 w-4 transition-all duration-300 ${
                      loading ? 'opacity-0' : 'group-hover:translate-x-1'
                    }`} />
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] blur-xl transition-opacity duration-500 ${
                    loading ? 'opacity-0' : 'opacity-0 group-hover:opacity-50'
                  }`} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            AVAILABLE FOR PROJECTS
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              RESPONSE WITHIN 24 HOURS
            </span>
            <span className="h-3 w-px bg-[var(--border-color)]" />
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Online
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}