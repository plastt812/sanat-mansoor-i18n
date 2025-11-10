import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-3"
      >
        EN
      </Button>
      <Button
        variant={language === 'fa' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fa')}
        className="px-3"
      >
        FA
      </Button>
    </motion.div>
  );
}
