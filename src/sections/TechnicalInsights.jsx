import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { insights } from "../utils/data";
import { useTranslation } from "react-i18next"; // Import hook i18n

// --- Custom Icons ---
const LayersIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const GaugeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
);

const AccessibilityIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6" />
    <path d="M12 18v2" />
    <path d="M8 10h8" />
    <path d="M6 18h12" />
  </svg>
);

const iconMap = {
  Layers: LayersIcon,
  Database: DatabaseIcon,
  Gauge: GaugeIcon,
  Accessibility: AccessibilityIcon,
};

// Helper untuk cek terjemahan
const getText = (t, key, fallback) => {
  const translated = t(key);
  return translated !== key ? translated : fallback;
};

export default function TechnicalInsights() {
  const { t } = useTranslation();

  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-1/2 h-96 bg-gradient-to-l from-burgundy/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle={t("insights_subtitle")}
          title={t("insights_title")}
          description={t("insights_desc")}
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => {
            const Icon = iconMap[insight.icon];
            // Pakai helper biar fallback ke data asli kalo belum ada terjemahan
            const title = getText(
              t,
              `insight_${index + 1}_title`,
              insight.title,
            );
            const desc = getText(
              t,
              `insight_${index + 1}_desc`,
              insight.description,
            );

            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 glass rounded-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-burgundy/20 flex items-center justify-center"
                    >
                      <Icon className="text-accent" size={24} />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-light mb-2 group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-muted/20">
            <div className="w-3 h-3 rounded-full bg-burgundy" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-muted" />
            <span className="ml-4 text-xs text-muted font-mono">
              philosophy.js
            </span>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code>
              <span className="text-muted">{t("code_comment")}</span>
              {"\n\n"}
              <span className="text-burgundy">const</span>{" "}
              <span className="text-light">philosophy</span> = {"{\n"}
              {"  "}
              <span className="text-accent">learning</span>:{" "}
              <span className="text-light">'{t("code_learning")}'</span>,{"\n"}
              {"  "}
              <span className="text-accent">consistency</span>:{" "}
              <span className="text-light">'{t("code_consistency")}'</span>,
              {"\n"}
              {"  "}
              <span className="text-accent">problemSolving</span>:{" "}
              <span className="text-light">'{t("code_problemSolving")}'</span>,
              {"\n"}
              {"  "}
              <span className="text-accent">simplicity</span>:{" "}
              <span className="text-light">'{t("code_simplicity")}'</span>,
              {"\n"}
              {"  "}
              <span className="text-accent">curiosity</span>:{" "}
              <span className="text-light">'{t("code_curiosity")}'</span>,{"\n"}
              {"};"}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
