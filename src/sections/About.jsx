import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { journey, skills } from "../utils/data";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  // Helper buat ngecek terjemahan
  const getText = (key, fallback) => {
    const translated = t(key);
    // Kalau hasil translate sama dengan key-nya, berarti ga ketemu, pakai fallback
    return translated !== key ? translated : fallback;
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div>
            <SectionTitle
              subtitle={t("about_subtitle")} // Panggil key about_subtitle
              title={t("about_title")} // Panggil key about_title
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-light/80 text-lg leading-relaxed mb-6">
                {t("about_bio1")}
              </p>
              <p className="text-muted leading-relaxed mb-8">
                {t("about_bio2")}
              </p>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm bg-muted/10 text-light rounded-lg border border-muted/20 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-muted to-transparent"
            />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-12 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-0 top-1 w-8 h-8 rounded-full bg-dark border-2 border-muted flex items-center justify-center group-hover:border-accent transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-accent transition-colors" />
                  </motion.div>

                  <div className="glass rounded-xl p-6 hover:border-accent/30 transition-all">
                    <span className="text-xs font-mono text-accent">
                      {/* Pake helper getText */}
                      {getText(`journey_${index}_year`, item.year)}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-light mt-1 mb-2">
                      {getText(`journey_${index}_title`, item.title)}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {getText(`journey_${index}_desc`, item.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
