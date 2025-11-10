import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-0.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full p-1.5 border border-primary/20 backdrop-blur-sm"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-3.5 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('fa')}
        className={`px-3.5 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
          language === 'fa'
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FA
      </motion.button>
    </motion.div>
  );
}