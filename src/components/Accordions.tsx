import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, BookOpen, GraduationCap, Award, Briefcase, HelpCircle, HeartHandshake } from "lucide-react";
import AnimatedToggleIcon from "./AnimatedToggleIcon";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function Accordions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const items: AccordionItem[] = [
    {
      id: "about",
      title: "ОБО МНЕ",
      icon: <HeartHandshake className="h-5 w-5 text-brand-gold shrink-0" />,
      content: (
        <div className="space-y-3 text-sm text-brand-slate/85 leading-relaxed">
          <p>
            Здравствуйте! Меня зовут <strong>Павел Александрович Веляев</strong>. Я практикующий врач-психиатр I категории, психиатр-нарколог, психотерапевт.
          </p>
          <p>
            В своей практике я совмещаю глубокие клинические знания в области психиатрии с современными методами психотерапии. Моя главная цель — помочь вам обрести внутреннюю опору, справиться с кризисами, восстановить душевное равновесие и повысить качество жизни.
          </p>
          <p>
            Я гарантирую полную <strong>конфиденциальность, бережность и безопасность</strong>. В работе со мной нет места осуждению — только профессиональная поддержка, понимание и совместный поиск путей решения ваших проблем.
          </p>
        </div>
      )
    },
    {
      id: "education",
      title: "БАЗОВОЕ ОБРАЗОВАНИЕ",
      icon: <GraduationCap className="h-5 w-5 text-brand-gold shrink-0" />,
      content: (
        <div className="space-y-4 text-sm text-brand-slate/85 leading-relaxed">
          <div className="border-l-2 border-brand-gold pl-3 py-1">
            <h6 className="font-bold text-brand-slate">ФГБОУ ВО «Тульский государственный университет»</h6>
            <p className="text-xs text-brand-slate/60 font-medium">Год окончания: 2014 г.</p>
            <p className="text-xs text-brand-slate/75 mt-0.5">Специальность: «Лечебное дело»</p>
          </div>
          <div className="border-l-2 border-brand-gold pl-3 py-1">
            <h6 className="font-bold text-brand-slate">Интернатура по специальности «Психиатрия»</h6>
            <p className="text-xs text-brand-slate/60 font-medium">Период: 2014–2015 гг.</p>
            <p className="text-xs text-brand-slate/75 mt-0.5">База обучения: ФГБОУ ВО «Тульский государственный университет»</p>
          </div>
        </div>
      )
    },
    {
      id: "qualification",
      title: "ДОПОЛНИТЕЛЬНОЕ ОБУЧЕНИЕ И СЕРТИФИКАТЫ",
      icon: <Award className="h-5 w-5 text-brand-gold shrink-0" />,
      content: (
        <div className="space-y-3 text-sm text-brand-slate/85 leading-relaxed">
          <p className="text-xs text-brand-slate/65 mb-2">
            Имею действующие профессиональные сертификаты и прошёл специализированную подготовку по следующим направлениям:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-brand-gold mt-1">•</span>
              <div>
                <span className="font-semibold text-brand-slate">Психотерапия</span>
                <p className="text-xs text-brand-slate/50">Действующий сертификат специалиста</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-gold mt-1">•</span>
              <div>
                <span className="font-semibold text-brand-slate">Психиатрия-наркология</span>
                <p className="text-xs text-brand-slate/50">Действующий сертификат специалиста</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-gold mt-1">•</span>
              <div>
                <span className="font-semibold text-brand-slate">Судебно-психиатрическая экспертиза</span>
                <p className="text-xs text-brand-slate/50">Действующий сертификат специалиста</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "experience",
      title: "ОПЫТ РАБОТЫ",
      icon: <Briefcase className="h-5 w-5 text-brand-gold shrink-0" />,
      content: (
        <div className="space-y-3 text-sm text-brand-slate/85 leading-relaxed">
          <div className="relative border-l border-brand-cream-dark pl-4 space-y-4 ml-1">
            <div className="relative">
              <div className="absolute -left-[20.5px] top-1.5 h-3 w-3 rounded-full bg-brand-gold" />
              <span className="text-xs font-bold text-brand-gold-dark">Декабрь 2022 — настоящее время</span>
              <h6 className="font-bold text-brand-slate mt-0.5">Заведующий психоневрологическим диспансером</h6>
              <p className="text-xs text-brand-slate/70">ГУЗ «ТОКПБ№1 им. Н.П. Каменева» (филиал г. Алексин)</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[20.5px] top-1.5 h-3 w-3 rounded-full bg-brand-gold-dark" />
              <span className="text-xs font-bold text-brand-slate/50">2017 — настоящее время</span>
              <h6 className="font-bold text-brand-slate mt-0.5">Врач на амбулаторном приеме</h6>
              <p className="text-xs text-brand-slate/70">ГУЗ «ТОКПБ№1 им. Н.П. Каменева» и ГУЗ «ТГКБСМП им. Д.Я. Ваныкина»</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[20.5px] top-1.5 h-3 w-3 rounded-full bg-brand-cream-dark" />
              <span className="text-xs font-bold text-brand-slate/50">С 01.09.2015 — настоящее время</span>
              <h6 className="font-bold text-brand-slate mt-0.5">Врач-психиатр</h6>
              <p className="text-xs text-brand-slate/70">Областная психиатрическая больница</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-3" id="info-accordions">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="scroll-mt-24 md:scroll-mt-28 border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 rounded-2xl bg-brand-card-bg/60 dark:bg-brand-card-bg/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-gold/50 hover:shadow-md"
          >
            <button
              onClick={() => toggle(item.id)}
              className="group w-full flex items-center justify-between p-4 text-left transition-colors cursor-pointer select-none"
              id={`accordion-btn-${item.id}`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-serif font-bold text-xs tracking-wider text-brand-slate">
                  {item.title}
                </span>
              </div>
              <motion.div 
                className={`relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full border shadow-xs transition-all duration-300 group-hover:shadow-sm ${
                  isOpen 
                    ? "bg-brand-gold/15 border-brand-gold/40 text-brand-gold" 
                    : "bg-brand-card-bg/70 dark:bg-brand-card-bg/50 border-brand-cream-dark/50 dark:border-brand-cream-dark/30 text-brand-slate/60 group-hover:text-brand-gold group-hover:border-brand-gold/40"
                }`}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              >
                <AnimatedToggleIcon isOpen={isOpen} size="sm" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 border-t border-brand-cream-dark/30 dark:border-brand-cream-dark/15 bg-brand-cream-light/30">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
