import React, { useEffect, useState } from 'react';
import {
  Music, Shirt, Coffee, Armchair, Send,
  Languages, Phone, X,
  Instagram, Facebook, MessageCircle, Navigation,
  Accessibility, ZoomIn, ZoomOut, Contrast, RotateCcw
} from 'lucide-react';

// Assets
import gateauxImg from './assets/gateaux.jpeg';
import logoImg from './assets/logo.png';
import flyerImg from './assets/flyer.png';
import chairSceneImg from './assets/chair-scene.png';
import dressesRackImg from './assets/dresses-rack-hd.jpeg';
import musicImg from './assets/music.png';
import hinaHeroImg from './assets/hina-hero.jpeg';

// Real business details
const PHONE_DISPLAY = '052-2336877';
const PHONE_TEL = '0522336877';
const PHONE_INTL = '972522336877';
const ADDRESS = 'קדרון 6, גבעת זאב';
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE_INTL}`;
const INSTAGRAM_URL = 'https://www.instagram.com/asher_chayoun/';
const FACEBOOK_URL = 'https://m.facebook.com/profile.php?id=61586764259150';
const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(ADDRESS)}&z=10&navigate=yes`;

const content = {
  fr: {
    dir: 'ltr',
    brand: 'MARRAKECH',
    tagline: 'Design d’événements de style marocain',
    greeting: 'Mazal Tov !',
    hook: 'Henné royal !',
    title: 'Vous célébrez un henné, une Bar ou Bat Mitsva ?',
    subtitle: 'Chez « Marrakech », on s’occupe de tout pour un événement de rêve : décor complet et musique parfaite !',
    sidebarHelper: 'Ou laissez vos coordonnées ci-dessous et nous vous rappelons !',
    logisticsTitle: 'Réservez votre moment',
    specialOffer: { title: 'Offre spéciale !', text: 'Tarifs préférentiels pour toute réservation ce mois-ci !' },
    usps: ['Décor somptueux', 'Tenues authentiques', 'Son & lumière pro'],
    viewFlyer: 'Voir le flyer complet',
    servicesTitle: 'Nos services',
    privacyNote: 'Vos coordonnées sont conservées uniquement dans le but de vous recontacter et de vous fournir des informations.',
    copyright: 'Tous droits réservés.',
    labels: {
      fauteuil: 'Décor', tenues: 'Tenues', musique: 'Musique', gateaux: 'Plateaux',
      nom: 'Nom complet*', telephone: 'Téléphone*', date: 'Date de l’événement', btn: 'Envoyer'
    },
    a11y: { open: 'Menu d’accessibilité', bigger: 'Agrandir le texte', smaller: 'Réduire le texte', contrast: 'Contraste élevé', reset: 'Réinitialiser' }
  },
  he: {
    dir: 'rtl',
    brand: 'MARRAKECH',
    tagline: 'עיצוב אירועים בסגנון מרוקאי',
    greeting: 'מזל טוב!',
    hook: 'חינה מלכותית!',
    title: 'חוגגים חינה, בר מצווה או בת מצווה?',
    subtitle: 'אנחנו ב"מרקש" נדאג לכם לאירוע חלומי עם ציוד מלא ומוזיקה מושלמת!',
    sidebarHelper: 'או תשאירו פרטים ואנחנו נחזור אליכם!',
    logisticsTitle: 'הזמינו את הרגע שלכם',
    specialOffer: { title: 'הטבה מיוחדת!', text: 'מחירים מיוחדים לסוגרים אירוע החודש!' },
    usps: ['תפאורה מפוארת', 'תלבושות אותנטיות', 'תאורה והגברה מקצועית'],
    viewFlyer: 'צפו בפלייר המלא',
    servicesTitle: 'השירותים שלנו',
    privacyNote: 'פרטיכם יישמרו לצורך יצירת קשר ומתן מידע בלבד.',
    copyright: 'כל הזכויות שמורות.',
    labels: {
      fauteuil: 'תפאורה', tenues: 'תלבושות', musique: 'מוזיקה', gateaux: 'מגשים',
      nom: 'שם מלא*', telephone: 'טלפון*', date: 'תאריך האירוע', btn: 'שליחה'
    },
    a11y: { open: 'תפריט נגישות', bigger: 'הגדלת טקסט', smaller: 'הקטנת טקסט', contrast: 'ניגודיות גבוה', reset: 'איפוס' }
  }
};

const App = () => {
  const [lang, setLang] = useState('he');
  const [lightbox, setLightbox] = useState(null);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [textScale, setTextScale] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [formData, setFormData] = useState({ nom: '', telephone: '', date: '' });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('a11y-large-text', textScale > 0);
    root.classList.toggle('a11y-contrast', highContrast);
  }, [textScale, highContrast]);

  const t = content[lang];
  const isRtl = t.dir === 'rtl';

  const heroImage = { src: hinaHeroImg, alt: t.title };
  const flyerImage = { src: flyerImg, alt: t.title };

  const servicesList = [
    { id: 'Fauteuil', label: t.labels.fauteuil, icon: <Armchair size={16} />, media: chairSceneImg },
    { id: 'Tenues', label: t.labels.tenues, icon: <Shirt size={16} />, media: dressesRackImg },
    { id: 'Musique', label: t.labels.musique, icon: <Music size={16} />, media: musicImg },
    { id: 'Gateaux', label: t.labels.gateaux, icon: <Coffee size={16} />, media: gateauxImg },
  ];

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n\n\u{1F464} *${t.labels.nom}:* ${formData.nom}\n\u{1F4DE} *${t.labels.telephone}:* ${formData.telephone}${formData.date ? `\n\u{1F4C5} *${t.labels.date}:* ${formData.date}` : ''}`;
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`min-h-screen font-serif relative a11y-contrast-target ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} dir={t.dir}>
      {/* Background — warm cream marble, layered with gold mashrabiya lattice, sparkle and lantern-light glow */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-marrakech-cream via-marrakech-cream to-marrakech-cream-dark" />
      <div className="fixed inset-0 z-0 moroccan-lattice" />
      <div className="fixed inset-0 z-0 moroccan-sparkle opacity-70" />
      <div
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 15% 10%, rgba(184,144,62,0.30), transparent 50%), radial-gradient(circle at 85% 20%, rgba(184,144,62,0.24), transparent 45%), radial-gradient(circle at 30% 90%, rgba(217,184,118,0.28), transparent 50%), radial-gradient(circle at 100% 100%, rgba(184,144,62,0.20), transparent 55%)'
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 140px rgba(43,32,19,0.22)' }} />

      {/* Sidebar always sits on the physical left and content on the physical right */}
      <div className="relative z-20 lg:flex lg:items-stretch" dir="ltr">
        {/* Sidebar — logo, phone, lead form */}
        <aside dir={t.dir} className="lg:w-80 lg:flex-none lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto flex flex-col bg-marrakech-cream border-b lg:border-b-0 lg:border-r border-marrakech-gold/30 shadow-xl z-30">
          <div className="p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logoImg} alt={t.brand} className="w-11 h-11 rounded-full shadow-md" />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-black text-marrakech-gold tracking-tighter">{t.brand}</span>
                  <span className="text-[10px] text-marrakech-ink/60 font-bold">{t.tagline}</span>
                </div>
              </div>
              <button
                onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
                className="flex items-center gap-1.5 bg-marrakech-gold text-marrakech-navy px-3 py-1.5 rounded-full text-xs font-bold shadow active:scale-95 transition-transform"
              >
                <Languages size={14} /> {lang === 'fr' ? 'עברית' : 'FR'}
              </button>
            </div>

            <div className="text-center pt-1">
              <a href={`tel:${PHONE_TEL}`} className="block text-2xl sm:text-3xl font-black text-marrakech-navy hover:text-marrakech-gold transition-colors tracking-tight">
                {PHONE_DISPLAY}
              </a>
              <p className="text-marrakech-ink/60 text-sm mt-1">{t.sidebarHelper}</p>
            </div>

            <div className="space-y-2.5 pt-1">
              <input
                type="text"
                placeholder={t.labels.nom}
                value={formData.nom}
                className="w-full p-3 rounded-lg bg-white text-marrakech-ink font-bold outline-none border border-marrakech-gold/30 focus:border-marrakech-gold focus:ring-2 ring-marrakech-gold/30 text-sm"
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              />
              <input
                type="tel"
                placeholder={t.labels.telephone}
                value={formData.telephone}
                className="w-full p-3 rounded-lg bg-white text-marrakech-ink font-bold outline-none border border-marrakech-gold/30 focus:border-marrakech-gold focus:ring-2 ring-marrakech-gold/30 text-sm"
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              />
              <input
                type="date"
                aria-label={t.labels.date}
                value={formData.date}
                className="w-full p-3 rounded-lg bg-white text-marrakech-ink font-bold outline-none border border-marrakech-gold/30 focus:border-marrakech-gold text-sm"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <button
                onClick={handleWhatsApp}
                disabled={!formData.nom || !formData.telephone}
                className="w-fit mx-auto mt-2 bg-marrakech-gold text-marrakech-navy font-black text-base py-3 px-10 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform disabled:opacity-40"
              >
                <Send size={16} className={isRtl ? 'rotate-180' : ''} /> {t.labels.btn}
              </button>
            </div>

            <div className="rounded-xl bg-marrakech-navy px-4 py-3 text-center shadow-md">
              <p className="text-marrakech-gold font-black text-sm">{t.specialOffer.title}</p>
              <p className="text-white/80 text-xs mt-0.5">{t.specialOffer.text}</p>
            </div>

            <button
              onClick={() => setLightbox(flyerImage)}
              className="text-marrakech-navy/70 hover:text-marrakech-gold underline text-xs font-bold text-center transition-colors"
            >
              {t.viewFlyer}
            </button>

            <p className="text-[11px] text-marrakech-ink/50 leading-relaxed text-center">{t.privacyNote}</p>
          </div>

          <div className="hidden lg:flex mt-auto p-5 sm:p-6 border-t border-marrakech-gold/20 items-center justify-center gap-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><MessageCircle size={20} /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Instagram size={20} /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Facebook size={20} /></a>
            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" aria-label="Waze" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Navigation size={20} /></a>
          </div>
        </aside>

        {/* Content: headline, slider, social band, 4 services — that's it */}
        <main dir={t.dir} className="lg:flex-1 lg:h-screen lg:overflow-y-auto">
          <section className="relative px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-10">
            {/* warm lantern-glow accents */}
            <div className="lantern-glow absolute -top-6 start-4 w-40 h-40 rounded-full bg-marrakech-gold/40 blur-3xl pointer-events-none" />
            <div className="lantern-glow-delayed absolute top-40 end-0 w-56 h-56 rounded-full bg-marrakech-gold-light/30 blur-3xl pointer-events-none" />

            {/* Hero — same 909:373 card ratio, type scale (32/60/32/21px) and Rubik weights as the reference model */}
            <div className="relative">
              {/* crisp accent circles breaking out of the card corners, reference-style */}
              <span className="hidden sm:block absolute -top-5 -left-5 w-14 h-14 rounded-full border-[6px] border-marrakech-gold z-10 pointer-events-none" />
              <span className="hidden sm:block absolute top-24 -left-8 w-6 h-6 rounded-full bg-marrakech-maroon z-10 pointer-events-none" />
              <span className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-marrakech-gold-light/25 backdrop-blur-sm border-2 border-marrakech-gold-light z-10 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-marrakech-navy border-4 border-white sm:aspect-[909/373]">
                <div className="flex flex-col sm:flex-row items-stretch h-full">
                  <div className="sm:w-1/2 p-6 sm:p-8 text-center sm:text-start flex flex-col justify-center gap-2 sm:gap-3 font-heavy">
                    <p className="text-marrakech-gold text-[21px] sm:text-[32px] font-bold leading-none">{t.greeting}</p>
                    <h1 className={`text-4xl sm:text-6xl text-marrakech-gold-light tracking-tight leading-[0.95] ${isRtl ? 'font-suez' : 'font-black'}`}>
                      {t.hook}
                    </h1>
                    <p className="text-white text-lg sm:text-[32px] font-bold leading-tight">
                      {t.title}
                    </p>
                    <span className="inline-block self-center sm:self-start bg-marrakech-gold/20 backdrop-blur-md border border-marrakech-gold/70 text-marrakech-gold-light font-medium text-[15px] sm:text-[21px] px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(184,144,62,0.35)] mt-1">
                      {t.specialOffer.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setLightbox(heroImage)}
                    className="relative sm:w-1/2 h-56 sm:h-full min-h-[16rem] block w-full"
                  >
                    <img src={heroImage.src} alt={heroImage.alt} className="w-full h-full object-cover" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust bar — same slim 74px bar and 40px bold type as the reference model */}
            <div className="relative mt-5 rounded-2xl bg-marrakech-navy px-5 py-3 sm:h-[74px] flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-heavy">
              {t.usps.map((usp, i) => (
                <React.Fragment key={usp}>
                  {i > 0 && <span className="text-marrakech-gold">•</span>}
                  <span className="text-white text-base sm:text-[28px] font-bold">{usp}</span>
                </React.Fragment>
              ))}
            </div>

            {/* 4 services in one row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-6">
              {servicesList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setLightbox({ src: s.media, alt: s.label })}
                  className="relative rounded-2xl overflow-hidden shadow-lg border border-marrakech-gold/30 bg-marrakech-navy aspect-square"
                >
                  <img
                    src={s.media}
                    alt={s.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-marrakech-navy via-marrakech-navy/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-0.5 py-2 sm:py-2.5 font-heavy">
                    <span className="text-marrakech-gold">{s.icon}</span>
                    <span className="font-black text-white text-xs sm:text-base leading-tight text-center">{s.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-marrakech-ink/40 text-xs mt-8">© {new Date().getFullYear()} {t.brand} — {t.copyright}</p>
          </section>
        </main>
      </div>

      {/* Floating accessibility button */}
      <div className="fixed top-4 right-4 z-[250]">
        <button
          onClick={() => setA11yOpen((o) => !o)}
          aria-label={t.a11y.open}
          className="w-11 h-11 rounded-full bg-marrakech-gold text-marrakech-navy shadow-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <Accessibility size={20} />
        </button>
        {a11yOpen && (
          <div dir={t.dir} className="absolute top-full right-0 mt-2 bg-white border border-black/10 rounded-2xl shadow-2xl p-3 flex flex-col gap-1 w-48">
            <button onClick={() => setTextScale((s) => Math.min(s + 1, 2))} className="flex items-center gap-2 text-marrakech-ink hover:text-marrakech-gold text-sm font-bold p-2 rounded-lg hover:bg-marrakech-navy/5">
              <ZoomIn size={16} /> {t.a11y.bigger}
            </button>
            <button onClick={() => setTextScale((s) => Math.max(s - 1, 0))} className="flex items-center gap-2 text-marrakech-ink hover:text-marrakech-gold text-sm font-bold p-2 rounded-lg hover:bg-marrakech-navy/5">
              <ZoomOut size={16} /> {t.a11y.smaller}
            </button>
            <button onClick={() => setHighContrast((c) => !c)} className="flex items-center gap-2 text-marrakech-ink hover:text-marrakech-gold text-sm font-bold p-2 rounded-lg hover:bg-marrakech-navy/5">
              <Contrast size={16} /> {t.a11y.contrast}
            </button>
            <button onClick={() => { setTextScale(0); setHighContrast(false); }} className="flex items-center gap-2 text-marrakech-ink/70 hover:text-marrakech-gold text-sm font-bold p-2 rounded-lg hover:bg-marrakech-navy/5">
              <RotateCcw size={16} /> {t.a11y.reset}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[400] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="close"
          >
            <X size={32} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-full rounded-2xl border-2 border-marrakech-gold/60" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default App;
