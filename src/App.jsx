import React, { useState } from 'react';
import {
  Music, Shirt, Coffee, Armchair, Send,
  Languages, Phone, X, Sparkles,
  Instagram, Facebook, MessageCircle, Navigation, Globe
} from 'lucide-react';


// Assets
import gateauxImg from './assets/gateaux.jpeg';
import logoImg from './assets/logo.png';
import flyerImg from './assets/flyer.png';
import chairSceneImg from './assets/chair-scene.png';
import dressesRackImg from './assets/dresses-rack-hd.jpeg';
import musicImg from './assets/music.png';
import hinaHeroImg from './assets/hina-hero.jpeg';
import hinaHeroFrImg from './assets/hero-fr.jpeg';

// Real business details
const PHONE_DISPLAY = '052-2336877';
const PHONE_TEL = '0522336877';
const PHONE_INTL = '972522336877';
const ADDRESS = 'קדרון 6, גבעת זאב';
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE_INTL}`;
const INSTAGRAM_URL = 'https://www.instagram.com/asher_chayoun/';
const FACEBOOK_URL = 'https://m.facebook.com/profile.php?id=61586764259150';
const WEBSITE_URL = 'https://marrakech-555.com/';
const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(ADDRESS)}&z=10&navigate=yes`;

const content = {
  fr: {
    dir: 'ltr',
    brand: 'MARRAKECH',
    tagline: 'Design d’événements de style marocain',
    greeting: 'Mazal Tov !',
    hook: 'Henné royal !',
    rentPromo: 'Location de matériel',
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
    rentPromo: 'משכירים ציוד לחינה',
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
  const [formData, setFormData] = useState({ nom: '', telephone: '', date: '' });

  const t = content[lang];
  const isRtl = t.dir === 'rtl';

  const heroImage = { src: lang === 'fr' ? hinaHeroFrImg : hinaHeroImg, alt: t.title };
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

  const logoHeader = (
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
  );

  const leadForm = (
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
  );

  return (
    <div className={`min-h-screen font-serif relative ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} dir={t.dir}>
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

      {/* Logo + language switch always stay pinned at the very top on mobile, even though the rest of the sidebar moves to the end */}
      <div dir={t.dir} className="lg:hidden relative z-30 p-5 sm:p-6 bg-marrakech-cream border-b border-marrakech-gold/30 shadow-xl">
        {logoHeader}
      </div>

      {/* Sidebar always sits on the physical left and content on the physical right; on mobile the sidebar moves to the end */}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-stretch" dir="ltr">
        {/* Sidebar — logo, phone, lead form */}
        <aside dir={t.dir} className="order-2 lg:order-1 lg:w-80 lg:flex-none lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto flex flex-col bg-marrakech-cream border-t lg:border-t-0 lg:border-b-0 lg:border-r border-marrakech-gold/30 shadow-xl z-30">
          <div className="p-5 sm:p-6 flex flex-col gap-4">
            <div className="hidden lg:block">{logoHeader}</div>

            <div className="text-center pt-1">
              <a href={`tel:${PHONE_TEL}`} className="block text-2xl sm:text-3xl font-black text-marrakech-navy hover:text-marrakech-gold transition-colors tracking-tight">
                {PHONE_DISPLAY}
              </a>
              <p className="text-marrakech-ink/60 text-sm mt-1">{t.sidebarHelper}</p>
            </div>

            {leadForm}

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

          <div className="flex mt-auto p-5 sm:p-6 border-t border-marrakech-gold/20 items-center justify-center gap-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><MessageCircle size={20} /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Instagram size={20} /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Facebook size={20} /></a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Globe size={20} /></a>
            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" aria-label="Waze" className="text-marrakech-navy/70 hover:text-marrakech-gold transition-colors"><Navigation size={20} /></a>
          </div>
        </aside>

        {/* Content: headline, slider, social band, 4 services — that's it */}
        <main dir={t.dir} className="order-1 lg:order-2 lg:flex-1 lg:h-screen lg:overflow-y-auto">
          <section className="relative px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-10">
            {/* warm lantern-glow accents */}
            <div className="lantern-glow absolute -top-6 start-4 w-40 h-40 rounded-full bg-marrakech-gold/40 blur-3xl pointer-events-none" />
            <div className="lantern-glow-delayed absolute top-40 end-0 w-56 h-56 rounded-full bg-marrakech-gold-light/30 blur-3xl pointer-events-none" />

            {/* Hero — same 909:373 card ratio, type scale (32/60/32/21px) and Rubik weights as the reference model */}
            <div className="relative">
              {/* crisp accent circles breaking out of the card corners, reference-style */}
              <span className="hidden sm:block absolute -top-5 -left-5 w-14 h-14 rounded-full border-[6px] border-marrakech-gold z-10 pointer-events-none" />
              <span className="hidden sm:block absolute top-24 -left-8 w-6 h-6 rounded-full bg-marrakech-maroon z-10 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-marrakech-navy border-4 border-white sm:aspect-[909/373]">
                <div className="flex flex-col sm:flex-row items-stretch h-full">
                  <div className="relative sm:w-1/2 p-4 sm:p-8 text-center sm:text-start flex flex-col justify-center gap-1 sm:gap-3 font-heavy">
                    {/* Circular promo medallion — top-right corner for French, mirrors to top-left for Hebrew */}
                    <div className="hidden lg:flex promo-badge absolute top-4 end-4 z-20 items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-marrakech-maroon to-marrakech-maroon-dark border-2 border-marrakech-gold shadow-2xl text-center">
                      <span className="promo-spin absolute -inset-2 rounded-full border-2 border-dashed border-marrakech-gold-light/70 pointer-events-none" />
                      <div className="flex flex-col items-center gap-1 px-3">
                        <Sparkles size={20} className="text-marrakech-gold-light" />
                        <span className="text-marrakech-gold-light font-black text-base leading-tight">{t.rentPromo}</span>
                      </div>
                    </div>
                    <p className="text-marrakech-gold text-base sm:text-[32px] font-bold leading-none">{t.greeting}</p>
                    <h1 className={`text-2xl sm:text-6xl text-marrakech-gold-light tracking-tight leading-[0.95] ${isRtl ? 'font-suez' : 'font-black'}`}>
                      {t.hook}
                    </h1>
                    <p className="text-white text-sm sm:text-[32px] font-bold leading-tight">
                      {t.title}
                    </p>
                    <span className="inline-block self-center sm:self-start bg-marrakech-gold/20 backdrop-blur-md border border-marrakech-gold/70 text-marrakech-gold-light font-medium text-xs sm:text-[21px] px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-[0_0_20px_rgba(184,144,62,0.35)] mt-1">
                      {t.specialOffer.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setLightbox(heroImage)}
                    className="relative sm:w-1/2 aspect-square sm:aspect-auto sm:h-full block w-full bg-marrakech-navy overflow-hidden"
                  >
                    <img src={heroImage.src} alt={heroImage.alt} className={`w-full h-full object-contain sm:object-cover ${lang === 'fr' ? 'object-top' : ''}`} />
                    {/* bright flare pulsing exactly on the flyer's own three lantern flames — physical positions, not mirrored by language direction */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* top-right hanging lantern */}
                      <div
                        className="lantern-flare absolute top-[4%] right-[-2%] sm:top-[6%] sm:right-[1%] w-16 h-16 sm:w-24 sm:h-24 rounded-full mix-blend-screen"
                        style={{ background: 'radial-gradient(circle, rgba(255,244,214,0.95) 0%, rgba(255,196,84,0.6) 40%, transparent 72%)' }}
                      />
                      {/* bottom-left standing lantern */}
                      <div
                        className="lantern-flare-delayed absolute top-[86%] left-[4%] sm:top-[80%] sm:left-[4%] w-12 h-12 sm:w-16 sm:h-16 rounded-full mix-blend-screen"
                        style={{ background: 'radial-gradient(circle, rgba(255,244,214,0.9) 0%, rgba(255,196,84,0.55) 40%, transparent 72%)' }}
                      />
                      {/* bottom-right standing lantern */}
                      <div
                        className="lantern-flare absolute top-[85%] right-[4%] sm:top-[80%] sm:right-[8%] w-12 h-12 sm:w-16 sm:h-16 rounded-full mix-blend-screen"
                        style={{ background: 'radial-gradient(circle, rgba(255,244,214,0.9) 0%, rgba(255,196,84,0.55) 40%, transparent 72%)' }}
                      />
                    </div>
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

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-[250] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center active:scale-95 transition-transform"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.655 4.53 1.792 6.393L3.5 29l7.83-2.246A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.986c-.297.833-1.463 1.53-2.404 1.732-.64.135-1.474.243-4.284-.92-3.593-1.487-5.905-5.135-6.086-5.372-.176-.238-1.462-1.947-1.462-3.715 0-1.768.923-2.636 1.252-2.998.328-.363.716-.454.955-.454.238 0 .478.002.687.012.22.01.516-.083.807.617.297.716 1.01 2.484 1.098 2.665.09.18.15.394.03.633-.12.24-.18.39-.358.6-.18.21-.377.47-.538.63-.18.18-.367.375-.158.735.21.36.933 1.54 2.003 2.494 1.375 1.226 2.534 1.606 2.894 1.786.36.18.57.15.78-.09.21-.24.899-1.05 1.14-1.41.238-.36.478-.3.807-.18.328.12 2.086.984 2.444 1.163.358.18.598.27.687.42.09.15.09.868-.207 1.703Z"/>
        </svg>
      </a>

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
