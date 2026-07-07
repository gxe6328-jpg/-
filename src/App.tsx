import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Award,
  BookOpen,
  MapPin,
  Send,
  ShieldCheck,
  Share2,
  Activity,
  MessageCircle,
  MessageSquare
} from "lucide-react";
import Accordions from "./components/Accordions";
import AnimatedToggleIcon from "./components/AnimatedToggleIcon";
import ScrollToTopButton from "./components/ScrollToTopButton";

import pavelPortrait from "./assets/images/pavel_photo_latest.jpg";
import vkLogo from "./assets/images/icons8-vk-48.png";
import maxLogo from "./assets/images/Max_logo_2025.png";

const helpCategories = [
  {
    title: "Депрессивные состояния",
    desc: "Сниженное настроение, апатия, постоянная усталость, потеря интереса и радости к жизни."
  },
  {
    title: "Тревога и панические атаки",
    desc: "Внезапные приступы паники, постоянная фоновая тревожность, страхи, фобии и навязчивые мысли (ОКР)."
  },
  {
    title: "Личностные кризисы",
    desc: "Неуверенность в себе, проблемы с самооценкой, поиск себя и своего призвания, возрастные кризисы."
  },
  {
    title: "Сложности в отношениях",
    desc: "Семейные и партнерские конфликты, созависимость, трудности в общении с близкими и коллегами."
  },
  {
    title: "Зависимости (Наркология)",
    desc: "Преодоление различных видов зависимостей (алкогольная, никотиновая, игровая), поддержка близких родственников."
  },
  {
    title: "Нарушения сна и психосоматика",
    desc: "Бессонница, тревожные сновидения, телесные симптомы и недомогания без явных физических причин."
  }
];

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [shared, setShared] = useState(false);
  const [openHelpIdx, setOpenHelpIdx] = useState<number | null>(null);

  const toggleHelp = (idx: number) => {
    setOpenHelpIdx(openHelpIdx === idx ? null : idx);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Психотерапевт Павел Веляев",
        text: "Персональный сайт врача-психотерапевта Павла Александровича Веляева",
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream-light text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-slate flex flex-col font-sans overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col flex-1"
        style={{ backfaceVisibility: "hidden", transform: "translate3d(0, 0, 0)" }}
      >
      
      {/* ========================================================== */}
      {/* MOBILE & TABLET LAYOUT (Screens under lg)                  */}
      {/* Inspired by Taplink link-in-bio style, matching mockup     */}
      {/* ========================================================== */}
      <div className="block lg:hidden w-full max-w-md mx-auto min-h-screen flex flex-col bg-brand-cream-light">
        
        {/* Top Portrait Image centered and scaled down */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-brand-cream shrink-0">
            <img
              src={pavelPortrait}
              alt="Врач-психотерапевт Веляев Павел Александрович"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-[center_62%] scale-[1.3] filter contrast-[1.02] brightness-[0.98]"
            />
          </div>
        </div>

        {/* Doctor Identity & Status */}
        <div className="text-center px-6 mt-4 space-y-2">
          <h2 className="font-serif text-2xl font-bold text-brand-slate tracking-tight">
            Веляев Павел Александрович
          </h2>
          <p className="text-xs text-brand-slate/65 leading-relaxed font-medium">
            Врач-психиатр I категории, психиатр-нарколог, психотерапевт
          </p>
        </div>

        {/* Primary Booking Button as explicitly requested */}
        <div className="px-6 mt-6">
          <a
            href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-brand-card-bg hover:bg-brand-gold/5 text-brand-slate py-4.5 px-5 rounded-2xl border-2 border-brand-gold hover:border-brand-gold transition-all duration-300 shadow-md active:scale-[0.98] text-center flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-brand-gold/10 -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />
            <span className="text-xs uppercase tracking-[0.15em] font-extrabold text-brand-slate flex items-center gap-1.5">
              ЗАПИСЬ НА ПРИЕМ
            </span>
            <span className="text-[10px] text-brand-gold-dark mt-1 font-semibold uppercase tracking-wider">Клиника на Пирогова (г. Щёкино)</span>
          </a>
        </div>

        {/* Contact Actions styled like the mockup (white background, thin border, subtext) */}
        <ScrollAnimate className="px-6 space-y-3 mt-4">
          <a
            href="https://vk.ru/good_psihika"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate font-sans py-4 px-6 rounded-2xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 shadow-xs active:scale-[0.98] text-center flex flex-col items-center justify-center cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-brand-slate flex items-center gap-2">
              <img src={vkLogo} className="h-5.5 w-5.5 object-contain logo-brighten" alt="VK" /> СВЯЗАТЬСЯ В ВКОНТАКТЕ
            </span>
            <span className="text-[9px] text-brand-slate/50 mt-1 font-normal uppercase tracking-wider">Быстрый ответ и запись на консультацию</span>
          </a>

          <a
            href="https://max.ru"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate font-sans py-4 px-6 rounded-2xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 shadow-xs active:scale-[0.98] text-center flex flex-col items-center justify-center cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-brand-slate flex items-center gap-2">
              <img src={maxLogo} className="h-4.5 w-4.5 object-contain rounded-md logo-brighten" alt="Max" /> МЕССЕНДЖЕР МАКС
            </span>
            <span className="text-[9px] text-brand-slate/50 mt-1 font-normal uppercase tracking-wider">Для оперативной связи в чате</span>
          </a>
        </ScrollAnimate>

        {/* Heart Rate / ECG divider matching image */}
        <div className="flex items-center gap-4 px-6 py-6">
          <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
          <div className="text-brand-gold shrink-0">
            <Activity className="h-4 w-4" />
          </div>
          <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
        </div>

        {/* Accordions and Information list */}
        <div className="px-6 space-y-6 flex-1">
          <ScrollAnimate className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-cream/50 text-brand-gold rounded-xl">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-slate">
                  Кому и с чем я помогу
                </h3>
                <p className="text-[9px] text-brand-slate/45 uppercase tracking-wider">Профессиональная помощь</p>
              </div>
            </div>

            <div className="bg-brand-card-bg rounded-3xl border border-brand-cream-dark/60 shadow-xs divide-y divide-brand-cream-dark/40 overflow-hidden">
              {helpCategories.map((cat, idx) => {
                const isOpen = openHelpIdx === idx;
                return (
                  <div
                    key={idx}
                    className="transition-colors duration-300 hover:bg-brand-cream-light/20"
                  >
                    <button
                      onClick={() => toggleHelp(idx)}
                      className="group w-full flex items-center justify-between p-4 text-left cursor-pointer select-none"
                    >
                      <h4 className="font-serif font-bold text-brand-slate text-sm sm:text-base flex items-center gap-2.5 pr-2">
                        <span className="h-1.5 w-1.5 bg-brand-gold rounded-full shrink-0" />
                        {cat.title}
                      </h4>
                      <div className="rounded-full bg-brand-cream-dark/30 dark:bg-brand-cream-dark/60 p-1.5 text-brand-slate/50 dark:text-brand-slate/60 shrink-0 transition-all duration-300 group-hover:bg-brand-gold/20 group-hover:text-brand-gold flex items-center justify-center">
                        <AnimatedToggleIcon isOpen={isOpen} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4 pt-1.5 bg-brand-cream-light/10 text-[13px] sm:text-sm text-brand-slate/80 leading-relaxed font-medium">
                            {cat.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollAnimate>

          {/* Heart Rate / ECG divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
            <div className="text-brand-gold shrink-0">
              <Activity className="h-4 w-4" />
            </div>
            <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
          </div>

          <ScrollAnimate>
            <Accordions />
          </ScrollAnimate>
        </div>

        {/* Mobile footer with sharing and disclaimer */}
        <div className="px-6 py-8 mt-10 border-t border-brand-cream-dark/40 space-y-6 bg-brand-cream-light/50 text-center">
          <button
            onClick={handleShare}
            className="w-full py-3 bg-brand-card-bg hover:bg-brand-cream-light text-brand-slate/80 text-xs font-semibold rounded-xl border border-brand-cream-dark/50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Share2 className="h-4 w-4" />
            <span>{shared ? "Ссылка скопирована!" : "Поделиться визиткой"}</span>
          </button>

          <div className="text-[10px] text-brand-slate/40 space-y-1.5 leading-relaxed">
            <p>© 2026 Врач Веляев П.А. Лицензия № ЛО-71-01-002345</p>
            <p className="italic">Информация носит ознакомительный характер. Имеются противопоказания, требуется консультация специалиста.</p>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* DESKTOP LAYOUT (Screens lg and above)                      */}
      {/* ========================================================== */}
      <div className="hidden lg:flex flex-col min-h-screen">
        
        {/* Desktop Header */}
        <header className="w-full bg-brand-card-bg/85 backdrop-blur-md border-b border-brand-cream-dark/60 sticky top-0 z-40 px-4 py-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-brand-slate text-brand-cream rounded-xl flex items-center justify-center font-serif text-xl font-bold border border-brand-gold/30 shadow-sm">
                ПВ
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-brand-slate tracking-tight">
                  Павел Веляев
                </h1>
                <p className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-semibold">
                  Врач-психотерапевт • Психиатр
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://vk.ru/good_psihika"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate text-xs font-semibold px-4 py-2.5 rounded-xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <img src={vkLogo} className="h-5.5 w-5.5 object-contain logo-brighten" alt="VK" />
                <span>ВКонтакте</span>
              </a>
              <a
                href="https://max.ru"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate text-xs font-semibold px-4 py-2.5 rounded-xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <img src={maxLogo} className="h-4.5 w-4.5 object-contain rounded-sm logo-brighten" alt="Max" />
                <span>Мессенджер МАКС</span>
              </a>
            </div>
          </div>
        </header>

        {/* Desktop Content Grid */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12 grid grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols) */}
          <div className="col-span-7 space-y-8">
            <section className="space-y-6 relative overflow-hidden">
              <div className="absolute -left-8 -top-12 text-[12rem] font-serif text-brand-slate/[0.03] pointer-events-none select-none">PSY</div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark/70 mb-2">Научно обоснованная психотерапия</span>
                <h2 className="font-serif text-8xl text-brand-slate leading-[0.85] tracking-tighter mb-4">
                  Павел<br />
                  <span className="ml-16 italic text-brand-gold">Веляев</span>
                </h2>
              </div>
              
              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] w-16 bg-brand-slate"></div>
                <p className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-slate">
                  Врач-психотерапевт & Клинический психиатр
                </p>
              </div>

              <p className="text-brand-slate/80 text-lg leading-relaxed max-w-2xl font-serif italic text-gray-600 mb-4">
                Глубинная работа с вашими состояниями, позволяющая обрести внутреннюю опору и ясность в мире неопределенности. Профессиональная терапевтическая поддержка от сертифицированного специалиста с действующими сертификатами и многолетним опытом.
              </p>
            </section>

            {/* Credentials Row */}
            <ScrollAnimate delay={0.1}>
              <section className="grid grid-cols-3 gap-4">
                <div className="bg-brand-card-bg p-5 rounded-2xl border border-brand-cream-dark/60 shadow-xs flex items-center gap-3.5 hover:border-brand-gold/40 transition-colors">
                  <div className="p-2.5 bg-brand-cream/50 text-brand-gold rounded-xl">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-brand-slate leading-none">14+ лет</span>
                    <span className="text-xs text-brand-slate/60 font-medium">Практики</span>
                  </div>
                </div>

                <div className="bg-brand-card-bg p-5 rounded-2xl border border-brand-cream-dark/60 shadow-xs flex items-center gap-3.5 hover:border-brand-gold/40 transition-colors">
                  <div className="p-2.5 bg-brand-cream/50 text-brand-gold rounded-xl">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-brand-slate leading-none">I Категория</span>
                    <span className="text-xs text-brand-slate/60 font-medium">Квалификация</span>
                  </div>
                </div>

                <div className="bg-brand-card-bg p-5 rounded-2xl border border-brand-cream-dark/60 shadow-xs flex items-center gap-3.5 hover:border-brand-gold/40 transition-colors">
                  <div className="p-2.5 bg-brand-cream/50 text-brand-gold rounded-xl">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-brand-slate leading-none">100%</span>
                    <span className="text-xs text-brand-slate/60 font-medium">Конфиденциально</span>
                  </div>
                </div>
              </section>
            </ScrollAnimate>

            {/* Divider with Heart Rate Line */}
            <div className="flex items-center gap-4 py-3">
              <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
              <div className="text-brand-gold shrink-0">
                <Activity className="h-4 w-4" />
              </div>
              <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
            </div>

            {/* Who and How section */}
            <ScrollAnimate className="space-y-4">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-xl font-bold text-brand-slate">
                    Кому и с чем я помогу
                  </h3>
                </div>
                
                <div className="bg-brand-card-bg rounded-3xl border border-brand-cream-dark/60 shadow-xs divide-y divide-brand-cream-dark/40 overflow-hidden">
                  {helpCategories.map((cat, idx) => {
                    const isOpen = openHelpIdx === idx;
                    return (
                      <div
                        key={idx}
                        className="transition-colors duration-300 hover:bg-brand-cream-light/20"
                      >
                        <button
                          onClick={() => toggleHelp(idx)}
                          className="group w-full flex items-center justify-between p-4 text-left cursor-pointer select-none"
                        >
                          <h4 className="font-serif font-bold text-brand-slate text-base md:text-lg flex items-center gap-2.5 pr-2">
                            <span className="h-1.5 w-1.5 bg-brand-gold rounded-full shrink-0" />
                            {cat.title}
                          </h4>
                          <div className="rounded-full bg-brand-cream-dark/30 dark:bg-brand-cream-dark/60 p-1.5 text-brand-slate/50 dark:text-brand-slate/60 shrink-0 transition-all duration-300 group-hover:bg-brand-gold/20 group-hover:text-brand-gold flex items-center justify-center">
                            <AnimatedToggleIcon isOpen={isOpen} size="sm" />
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-4 pt-1.5 bg-brand-cream-light/10 text-sm md:text-base text-brand-slate/80 leading-relaxed font-medium">
                                {cat.desc}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            </ScrollAnimate>

            {/* Divider with Heart Rate Line */}
            <div className="flex items-center gap-4 py-3">
              <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
              <div className="text-brand-gold shrink-0">
                <Activity className="h-4 w-4" />
              </div>
              <div className="h-[1px] flex-1 bg-brand-cream-dark/50" />
            </div>

            {/* Accordions */}
            <ScrollAnimate className="space-y-4">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-xl font-bold text-brand-slate">
                    Информация о специалисте
                  </h3>
                </div>
                <Accordions />
              </section>
            </ScrollAnimate>
          </div>

          {/* Right Column (5 cols, Sticky) */}
          <div className="col-span-5 sticky top-28 space-y-8 flex flex-col items-stretch">
            
            {/* Portrait Card (Scaled Down) */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56 bg-brand-cream rounded-full border-4 border-brand-card-bg shadow-lg overflow-hidden group">
                <img
                  src={pavelPortrait}
                  alt="Врач-психотерапевт Веляев Павел Александрович"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover object-[center_62%] scale-[1.3] filter contrast-[1.02] brightness-[0.98] group-hover:scale-[1.38] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Contact Panel */}
            <div className="bg-brand-card-bg p-6 rounded-3xl border border-brand-cream-dark/60 shadow-sm space-y-4">
              <h4 className="font-serif text-lg font-bold text-brand-slate">
                Контакты и запись на прием
              </h4>

              <a
                href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-card-bg hover:bg-brand-gold/5 text-brand-slate py-4.5 px-6 rounded-2xl border-2 border-brand-gold hover:border-brand-gold transition-all duration-300 shadow-md active:scale-[0.98] text-center flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-brand-gold/10 -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />
                <span className="text-xs uppercase font-sans tracking-[0.15em] font-extrabold text-brand-slate">ЗАПИСАТЬСЯ НА ПРИЕМ</span>
                <span className="text-[10px] text-brand-gold-dark mt-1 font-semibold uppercase tracking-wider font-sans">Клиника на Пирогова (г. Щёкино)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://vk.ru/good_psihika"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate text-xs font-semibold py-3.5 px-4 rounded-xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 text-center flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                >
                  <img src={vkLogo} className="h-6 w-6 object-contain logo-brighten" alt="VK" />
                  <span className="tracking-wider uppercase text-[10px]">МОЙ ВКОНТАКТЕ</span>
                </a>
                <a
                  href="https://max.ru"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-card-bg hover:bg-brand-btn-hover-bg text-brand-slate text-xs font-semibold py-3.5 px-4 rounded-xl border border-brand-btn-border hover:border-brand-btn-border-hover transition-all duration-300 text-center flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                >
                  <img src={maxLogo} className="h-5 w-5 object-contain rounded-sm logo-brighten" alt="Max" />
                  <span className="tracking-wider uppercase text-[10px]">МЕССЕНДЖЕР МАКС</span>
                </a>
              </div>

              <button
                onClick={handleShare}
                className="w-full py-3 bg-brand-cream/40 text-brand-slate/70 hover:text-brand-slate hover:bg-brand-cream-dark/30 text-xs font-semibold rounded-xl border border-brand-cream-dark/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                <span>{shared ? "Ссылка скопирована!" : "Поделиться контактом"}</span>
              </button>
            </div>

            {/* Removed format card as requested */}

          </div>
        </main>

        {/* Desktop Footer */}
        <footer className="w-full bg-brand-slate text-brand-cream-light py-10 mt-16 border-t border-brand-gold/20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-brand-cream text-brand-slate rounded-lg flex items-center justify-center font-serif text-base font-bold">
                  ПВ
                </div>
                <span className="font-serif font-bold text-lg">Павел Веляев</span>
              </div>
              <p className="text-xs text-brand-cream-dark/70 max-w-sm leading-relaxed">
                Дипломированный врач-психиатр I категории, психиатр-нарколог, психотерапевт. Профессиональная индивидуальная и семейная помощь.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-serif font-bold text-brand-gold uppercase tracking-wider">Контакты и кабинеты</h4>
              <div className="space-y-2 text-brand-cream-dark/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  <span>Алексин: ГУЗ «ТОКПБ№1 им. Н.П. Каменева» (филиал)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  <span>Тула: ГУЗ «ТОКПБ№1 им. Н.П. Каменева» / ГУЗ «ТГКБСМП им. Д.Я. Ваныкина»</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  <span>+7 (999) 111-22-33</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-serif font-bold text-brand-gold uppercase tracking-wider">Отказ от ответственности</h4>
              <p className="text-brand-cream-dark/60 leading-relaxed">
                Информация, представленная на сайте, носит ознакомительный характер. Требуется очная консультация специалиста для постановки диагноза и назначения плана лечения.
              </p>
              <div className="pt-2 text-[10px] text-brand-cream-dark/40">
                © 2026 Врач Веляев П.А. Лицензия № ЛО-71-01-002345
              </div>
            </div>
          </div>
        </footer>

      </div>

      </motion.div>
      <ScrollToTopButton />
    </div>
  );
}
