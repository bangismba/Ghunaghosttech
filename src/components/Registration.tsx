import { motion } from 'framer-motion';
import {
  Shield,
  Target,
  Users,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_RC, COMPANY_TIN, INCORPORATION_DATE } from '@utils/constants';

const objects = [
  "Website & Mobile App Design, Development, and Maintenance",
  "Cybersecurity Services including Audits, Penetration Testing, and Consultancy",
  "Tech Education and Training Programs",
  "IT Consulting, Software Development, and Cloud Services",
  "Trade in Computer Hardware and Software",
  "Collaborate with Institutions to Promote Digital Transformation and Cybersecurity Awareness",
];

export default function Registration() {
  return (
    <section id="registration" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§09</span>
            <span className="h-px w-8 bg-white/20" />
            <span>REGISTRATION</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            CERTIFICATE OF INCORPORATION
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              FEDERAL REPUBLIC OF NIGERIA
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              OFFICIAL
              <br />
              <span className="text-zinc-500">REGISTRATION</span>
              <br />
              & INCORPORATION.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0"
          >
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              Incorporated under the Companies and Allied Matters Act 2020.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Ghunaghost Tech Ltd is a duly registered private company
              limited by shares in the Federal Republic of Nigeria,
              operating with full legal authority to deliver digital
              solutions and technology services.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="border border-white/10">
          <div className="grid border-b border-white/10 lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-white/10 p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-zinc-500" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Certificate of Incorporation
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Registration No.
                  </span>
                  <p className="mt-1 font-mono text-xl tracking-tight text-white">
                    {COMPANY_RC}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Tax Identification Number
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    {COMPANY_TIN}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Incorporation Date
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    {INCORPORATION_DATE}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Registrar-General
                  </span>
                  <p className="mt-1 font-mono text-xs tracking-wide text-zinc-400">
                    Hussaini Ishaq Magaji SAN
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 lg:col-span-8 md:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Company Type
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    Private Company Limited by Shares
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Act
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    Companies and Allied Matters Act 2020
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Registered Office
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    Nigeria
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Share Capital
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    ₦ 1,000,000 (1,000,000 shares at ₦1 each)
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                    Liability
                  </span>
                  <p className="mt-1 font-mono text-sm tracking-wide text-zinc-300">
                    Limited by Shares
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500/70" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                    Full Compliance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500/70" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                    Legally Registered
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500/70" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                    Operating Since 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10">
            <div className="grid lg:grid-cols-12">
              <div className="flex flex-col justify-center border-b border-white/10 p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-zinc-500" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Objects of the Company
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  The company is established to carry on the following
                  business activities in accordance with the Memorandum
                  of Association.
                </p>
              </div>

              <div className="p-6 lg:col-span-8 md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  {objects.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border border-white/5 p-4 transition hover:border-white/10"
                    >
                      <span className="mt-0.5 font-mono text-[10px] text-zinc-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[9px] leading-relaxed tracking-[0.05em] text-zinc-400">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-white/10 p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-zinc-500" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Subscribers
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                The several persons whose names and addresses are
                subscribed hereunder, desirous of being formed into a
                Company in pursuance of this Memorandum of Association.
              </p>
            </div>

            <div className="p-6 lg:col-span-8 md:p-10">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/5">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-4 py-3 text-left font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        Address
                      </th>
                      <th className="px-4 py-3 text-right font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        Shares
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 transition hover:bg-white/5">
                      <td className="px-4 py-3 font-mono text-[10px] tracking-wide text-zinc-300">
                        Aliyu Muhammadu Babangida
                      </td>
                      <td className="px-4 py-3 font-mono text-[9px] tracking-wide text-zinc-500">
                        No 3 Jim Nwobodo St, Apo Legislative Quarters, Abuja
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-[10px] tracking-wide text-zinc-400">
                        500,000
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="border-t border-white/5">
                    <tr>
                      <td colSpan={2} className="px-4 py-3 font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        Total Allotted
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-[10px] tracking-wide text-zinc-400">
                        500,000
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="px-4 py-3 font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
                        Nominal Share Capital
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-[10px] tracking-wide text-zinc-400">
                        ₦ 1,000,000
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            MEMORANDUM OF ASSOCIATION
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            COMPANIES AND ALLIED MATTERS ACT 2020
          </div>
        </div>
      </div>
    </section>
  );
}