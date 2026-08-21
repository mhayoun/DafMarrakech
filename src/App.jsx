import React, { useEffect, useState } from 'react';
import {
  Music, Lightbulb, Shirt, Armchair, Coffee, Send,
  Languages, Phone, ChevronDown, Menu, X, Star, Quote,
  Info, MessageSquare, Mail, MapPin, Instagram, Facebook,
  MessageCircle, Navigation, Accessibility, ZoomIn, ZoomOut,
  Contrast, RotateCcw, Camera
} from 'lucide-react';

// Assets
import henneBG from './assets/henne.jpeg';
import chairImg from './assets/chair.jpeg';
import tenuesImg from './assets/tenues.jpeg';
import gateauxImg from './assets/gateaux.jpeg';
import teouraImg from './assets/teoura.jpeg';
import galleryImg from './assets/gallery.png';

// Real business details
const PHONE_DISPLAY = '052-2336877';
const PHONE_TEL = '0522336877';
const PHONE_INTL = '972522336877';
const EMAIL = 'a0522336877@gmail.com';
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
    title: 'Un Henné Inoubliable',
    subtitle: 'Vous célébrez, et nous nous occupons de toute la magie !',
    heroCallBtn: 'Appeler maintenant',
    heroMoreBtn: 'En savoir plus',
    nav: { about: 'À Propos', services: 'Services', reviews: 'Témoignages', gallery: 'Galerie', reserve: 'Réserver' },
    logisticsTitle: 'Réservez votre moment',
    aboutTitle: 'À Propos',
    aboutHeading: 'Marrakech : quand la tradition rencontre la royauté',
    aboutIntro: 'L’instant où le cœur bat au rythme du darbouka, et où l’âme s’enveloppe d’or.',
    aboutBody: 'Il y a des moments dans la vie qui dépassent la simple célébration – ce sont des voyages dans le temps. Chez « Marrakech », nous vous invitons à laisser la modernité derrière vous et à entrer dans un rêve marocain authentique, riche en couleurs, en parfums et en sons transmis de génération en génération.',
    whyUsTitle: 'Pourquoi célébrer avec nous ?',
    whyUsPoints: [
      { title: 'Les petits détails :', text: 'une cérémonie de henné n’est pas seulement un événement, c’est une histoire. Nous prenons soin de chaque détail – du caftan de la mariée jusqu’à la décoration de la soirée.' },
      { title: 'Une atmosphère émouvante :', text: 'équilibre précis entre l’authenticité d’antan et une ambiance festive et musicale. Nous créons pour vous et vos invités une expérience où chacun se sent comme un membre de la royauté.' }
    ],
    aboutQuote: 'Chez Marrakech, nous ne produisons pas seulement un événement. Nous tissons pour vous le souvenir le plus doux avant le mariage – celui qui relie les racines, la famille et un grand amour.',
    aboutClosing1: 'Le tapis rouge est déjà déroulé, les parfums flottent déjà dans l’air – et vous ?',
    aboutClosing2: 'Contactez-nous dès maintenant et offrez-vous une célébration une fois dans la vie.',
    whyUs: ['Décors Faits Main', 'Ambiance Traditionnelle', 'Service Premium'],
    servicesTitle: 'Nos Services',
    servicesIntro: 'Une production de henné royale alliant décor authentique, tenues somptueuses et bande-son marocaine envoûtante. Le service inclut la création d’une ambiance festive et riche en couleurs, en musique et en tradition, pour une expérience émouvante qui fait danser le cœur et renoue avec les racines.',
    reviewsTitle: 'Vos Avis',
    reviews: [
      { name: 'Hadar D.', text: 'Nous avons célébré notre henné avec Marrakech et ce fut une expérience incroyable ! La décoration était soignée et impressionnante, avec une ambiance marocaine authentique qui a plongé tous les invités dans une vraie fête. Asher a veillé au moindre détail et la soirée fut tout simplement parfaite. Nous recommandons de tout cœur !' },
      { name: 'Yossi A.', text: 'Si vous cherchez un vrai henné marocain, Marrakech est l’endroit idéal ! Le service était professionnel, l’ambiance joyeuse et émouvante, et tout était parfaitement planifié. Nous avions l’impression d’être dans un rêve marocain authentique. Nous recommandons vivement !' },
      { name: 'Gal M.', text: 'Nous voulions un henné spécial et différent – et Marrakech a totalement réalisé notre rêve. Le design, les tissus, les couleurs et l’atmosphère ont créé une sensation de fête royale. Les invités n’ont cessé de nous complimenter. Merci beaucoup pour une soirée inoubliable !' },
      { name: 'Yael C.', text: 'C’était tout simplement parfait ! Le décor était incroyable et le service au-delà des attentes. Nous nous sommes sentis comme des rois.' },
      { name: 'Aviv L.', text: 'Un henné du plus haut niveau possible. Je recommande vivement à tous ceux qui veulent un événement digne d’un film sans aucun souci.' }
    ],
    galleryTitle: 'Galerie',
    contactTitle: 'Contact',
    contactHours: 'Sur rendez-vous',
    footerBuilt: 'Créations événementielles Marrakech',
    privacyNote: 'Vos coordonnées sont conservées uniquement dans le but de vous recontacter et de vous fournir des informations.',
    copyright: 'Tous droits réservés.',
    labels: {
      fauteuil: 'Fauteuil Somptueux', eclairage: 'Eclairage Ambiance',
      tenues: 'Tenues Mariés', musique: 'Sonorisation & Musique',
      gateaux: 'Plateaux de Gâteaux', nom: 'Votre Nom Complet',
      lieu: 'Lieu (Ville / Salle)', invites: 'Nombre d’invités',
      message: 'Message (optionnel)', btn: 'RÉSERVER SUR WHATSAPP'
    },
    a11y: { open: 'Menu d’accessibilité', bigger: 'Agrandir le texte', smaller: 'Réduire le texte', contrast: 'Contraste élevé', reset: 'Réinitialiser' }
  },
  he: {
    dir: 'rtl',
    brand: 'MARRAKECH',
    tagline: 'עיצוב אירועים בסגנון מרוקאי',
    title: 'חינה בלתי נשכחת',
    subtitle: 'אתם חוגגים, ואנחנו דואגים לכל הקסם!',
    heroCallBtn: 'חייגו עכשיו',
    heroMoreBtn: 'קראו עוד',
    nav: { about: 'אודות', services: 'שירותים', reviews: 'המלצות', gallery: 'גלריה', reserve: 'הזמנה' },
    logisticsTitle: 'הזמינו את הרגע שלכם',
    aboutTitle: 'אודות',
    aboutHeading: 'מרקש: כשהמסורת פוגשת מלכות',
    aboutIntro: 'הרגע שבו הלב פועם בקצב הדרבוקה, והנשמה מתעטפת בזהב.',
    aboutBody: 'יש רגעים בחיים שהם מעבר לחגיגה – הם מסע בזמן. ב-"מרקש", אנו מזמינים אתכם להשאיר את המודרניות מאחורי ולצעוד לתוך חלום מרוקאי אותנטי, עשיר בצבעים, ניחוחות וצלילים שנשמרים מדור לדור.',
    whyUsTitle: 'למה לחגוג איתנו?',
    whyUsPoints: [
      { title: 'הפרטים הקטנים:', text: 'טקס חינה הוא לא רק אירוע, הוא סיפור. אנחנו דואגים לכל פרט – מהכפתן של הכלה ועד לעיצוב של האירוע.' },
      { title: 'אווירה מרגשת:', text: 'שילוב מדויק בין האותנטיות של פעם לאווירה טובה ומוזיקלית. אנחנו יוצרים עבורכם ועבור האורחים שלכם חוויה שבה כל אחד מרגיש כמו בן מלוכה.' }
    ],
    aboutQuote: 'במרקש, אנחנו לא רק מפיקים אירוע. אנחנו רוקמים עבורכם את הזיכרון המתוק ביותר שלפני החתונה – כזה שמחבר שורשים, משפחה ואהבה גדולה.',
    aboutClosing1: 'השטיח האדום כבר פרוס, הניחוחות כבר באוויר – ומה איתכם?',
    aboutClosing2: 'צרו קשר עכשיו והבטיחו לעצמכם חגיגה של פעם בחיים.',
    whyUs: ['הקפדה על פרטים', 'אווירה אותנטית', 'שירות VIP'],
    servicesTitle: 'השירותים שלנו',
    servicesIntro: 'הפקת חינה מלכותית המשלבת תפאורה אותנטית, לבוש מפואר ופס-קול מרוקאי סוחף. השירות כולל יצירת אווירה חגיגית ועשירה בצבעים, מוזיקה ומסורת, לחוויה מרגשת שמרקידה את הלב ומחברת לשורשים.',
    reviewsTitle: 'הלקוחות שלנו מספרים',
    reviews: [
      { name: 'הדר ד.', text: 'חגגנו חינה עם מרקש וזו הייתה חווייה מדהימה! העיצוב היה מושקע ומרשים, עם אווירה מרוקאית אותנטית שהכניסה את כל האורחים לחגיגה אמיתית. אשר דאג לכל פרט קטן והאירוע היה פשוט מושלם. ממליצים מכל הלב!' },
      { name: 'יוסי א.', text: 'אם אתם מחפשים חינה מרוקאית אמיתית – מרקש זה המקום! השירות היה מקצועי, האווירה היתה שמחה ומרגשת, והכול היה מתוכנן בצורה מושלמת. הרגשנו שאנחנו בתוך חלום מרוקאי אותנטי. בהחלט ממליצים בחום!' },
      { name: 'גל מ.', text: 'רצינו חינה מיוחדת ושונה – ומרקש לגמרי הגשימו לנו את החלום. העיצוב, הבדים, הצבעים והאווירה יצרו תחושה של חגיגה מלכותית. האורחים לא הפסיקו להחמיא על האווירה וההשקעה. תודה רבה על ערב בלתי נשכח!' },
      { name: 'יעל כהן', text: 'היה פשוט מושלם! התפאורה הייתה מדהימה והשירות מעל המצופה. הרגשנו כמו מלכים.' },
      { name: 'אביב לוי', text: 'חינה ברמה הכי גבוהה שיש. ממליץ בחום לכל מי שרוצה אירוע מהסרטים בלי דאגות.' }
    ],
    galleryTitle: 'גלריה',
    contactTitle: 'צור קשר',
    contactHours: 'בתיאום מראש',
    footerBuilt: 'הפקת אירועים מרקש',
    privacyNote: 'פרטיכם יישמרו לצורך יצירת קשר ומתן מידע בלבד.',
    copyright: 'כל הזכויות שמורות.',
    labels: {
      fauteuil: 'כיסא חינה מפואר', eclairage: 'תאורת אווירה',
      tenues: 'תלבושות חתן וכלה', musique: 'הגברה ומוזיקה',
      gateaux: 'מגשי עוגיות', nom: 'שם מלא',
      lieu: 'מיקום (עיר / אולם)', invites: 'מספר מוזמנים',
      message: 'הודעה (לא חובה)', btn: 'הזמנה בוואטסאפ'
    },
    a11y: { open: 'תפריט נגישות', bigger: 'הגדלת טקסט', smaller: 'הקטנת טקסט', contrast: 'ניגודיות גבוה', reset: 'איפוס' }
  }
};

const App = () => {
  const [lang, setLang] = useState('he');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [textScale, setTextScale] = useState(0); // 0, 1, 2 steps
  const [highContrast, setHighContrast] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    lieu: '',
    invites: 50,
    nom: '',
    message: '',
    services: ['Fauteuil', 'Eclairage', 'Tenues', 'Musique', 'Gateaux']
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('a11y-large-text', textScale > 0);
    root.classList.toggle('a11y-contrast', highContrast);
  }, [textScale, highContrast]);

  const t = content[lang];
  const isRtl = t.dir === 'rtl';

  const servicesList = [
    { id: 'Fauteuil', label: t.labels.fauteuil, icon: <Armchair size={20} />, media: chairImg },
    { id: 'Eclairage', label: t.labels.eclairage, icon: <Lightbulb size={20} />, media: teouraImg },
    { id: 'Tenues', label: t.labels.tenues, icon: <Shirt size={20} />, media: tenuesImg },
    { id: 'Musique', label: t.labels.musique, icon: <Music size={20} />, media: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600' },
    { id: 'Gateaux', label: t.labels.gateaux, icon: <Coffee size={20} />, media: gateauxImg },
  ];

  const galleryImages = [
    { src: henneBG, alt: t.labels.fauteuil },
    { src: chairImg, alt: t.labels.fauteuil },
    { src: teouraImg, alt: t.labels.eclairage },
    { src: tenuesImg, alt: t.labels.tenues },
    { src: gateauxImg, alt: t.labels.gateaux },
    { src: galleryImg, alt: t.brand },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n\n\u{1F464} *${t.labels.nom}:* ${formData.nom}\n\u{1F4C5} *Date:* ${formData.date}\n\u{1F4CD} *Lieu:* ${formData.lieu}\n\u{1F465} *Invités:* ${formData.invites}\n✨ *Services:* ${formData.services.join(', ')}${formData.message ? `\n\u{1F4AC} *${t.labels.message}:* ${formData.message}` : ''}`;
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`min-h-screen font-serif relative a11y-contrast-target ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} dir={t.dir}>
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url(${henneBG})`, backgroundAttachment: 'fixed' }} />
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-emerald-950/70 via-emerald-950/85 to-emerald-950/95 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-emerald-950/90 backdrop-blur-md border-b border-yellow-500/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black text-yellow-500 cursor-pointer tracking-tighter" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {t.brand}
          </span>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-5 text-white font-bold mx-2">
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-500 transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-500 transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollTo('reviews')} className="hover:text-yellow-500 transition-colors">{t.nav.reviews}</button>
              <button onClick={() => scrollTo('gallery')} className="hover:text-yellow-500 transition-colors">{t.nav.gallery}</button>
              <button onClick={() => scrollTo('reserve')} className="text-yellow-500 border border-yellow-500/50 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-emerald-950 transition-all">{t.nav.reserve}</button>
            </div>

            <button
              onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
              className="flex items-center gap-2 bg-yellow-500 text-emerald-950 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg active:scale-95 transition-transform"
            >
              <Languages size={16} /> {lang === 'fr' ? 'עברית' : 'FR'}
            </button>

            <button className="md:hidden text-yellow-500 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-emerald-950/95 border-b border-yellow-500/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-6 text-center text-white font-bold">
            <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
            <button onClick={() => scrollTo('services')}>{t.nav.services}</button>
            <button onClick={() => scrollTo('reviews')}>{t.nav.reviews}</button>
            <button onClick={() => scrollTo('gallery')}>{t.nav.gallery}</button>
            <button onClick={() => scrollTo('reserve')}>{t.nav.reserve}</button>
            <a href={`tel:${PHONE_TEL}`} className="text-yellow-500 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative z-20 pt-32 pb-20 p-4 md:p-10 max-w-6xl mx-auto text-white">

        {/* Hero */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-8xl font-black text-yellow-500 uppercase tracking-tighter mb-4 drop-shadow-2xl">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 italic opacity-90 leading-tight max-w-2xl mx-auto">
            "{t.subtitle}"
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-8" />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 bg-yellow-500 text-emerald-950 font-black px-8 py-4 rounded-2xl shadow-xl active:scale-95 transition-transform"
            >
              <Phone size={20} /> {t.heroCallBtn}
            </a>
            <button
              onClick={() => scrollTo('about')}
              className="flex items-center gap-2 border border-yellow-500/50 text-yellow-500 font-bold px-8 py-4 rounded-2xl hover:bg-yellow-500/10 transition-colors"
            >
              {t.heroMoreBtn} <ChevronDown size={18} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Section: Services */}
          <section id="services" className="space-y-6">
            <h2 className={`text-3xl font-bold text-yellow-500 mb-2 items-center gap-3 ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-yellow-500 hidden md:flex`}>
              {t.servicesTitle}
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-6">{t.servicesIntro}</p>
            <div className="space-y-4">
              {servicesList.map((s) => (
                <div key={s.id} className="rounded-2xl border border-white/10 bg-emerald-900/40 backdrop-blur-md overflow-hidden">
                  <div
                    onClick={() => setOpenAccordion(openAccordion === s.id ? null : s.id)}
                    className={`flex items-center justify-between p-5 cursor-pointer transition-colors ${openAccordion === s.id ? 'bg-yellow-500 text-emerald-950' : 'text-white hover:bg-white/5'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={openAccordion === s.id ? 'text-emerald-900' : 'text-yellow-500'}>{s.icon}</span>
                      <span className="font-bold text-lg">{s.label}</span>
                    </div>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${openAccordion === s.id ? 'rotate-180' : ''}`} />
                  </div>
                  {openAccordion === s.id && (
                    <div className="p-4 bg-black/20 animate-in fade-in slide-in-from-top-2 duration-300">
                      <img src={s.media} alt={s.label} className="w-full h-64 object-cover rounded-xl border border-yellow-500/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Form */}
          <section id="reserve" className="lg:sticky lg:top-28">
            <div className="bg-emerald-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-yellow-500 mb-8">{t.logisticsTitle}</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.labels.nom}
                  className="w-full p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none focus:ring-4 ring-yellow-500/50"
                  onChange={e => setFormData({ ...formData, nom: e.target.value })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" className="p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none" onChange={e => setFormData({ ...formData, date: e.target.value })} />
                  <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none text-center" onChange={e => setFormData({ ...formData, invites: e.target.value })} />
                </div>
                <input
                  type="text"
                  placeholder={t.labels.lieu}
                  className="w-full p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none focus:ring-4 ring-yellow-500/50"
                  onChange={e => setFormData({ ...formData, lieu: e.target.value })}
                />
                <textarea
                  placeholder={t.labels.message}
                  rows={3}
                  className="w-full p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none focus:ring-4 ring-yellow-500/50 resize-none"
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />

                <button onClick={handleWhatsApp} className="w-full mt-4 bg-yellow-500 text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform">
                  <Send size={24} className={isRtl ? 'rotate-180' : ''} /> {t.labels.btn}
                </button>

                <div className="text-center pt-6">
                  <a href={`tel:${PHONE_TEL}`} className="text-3xl font-bold text-yellow-500 flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <Phone size={24} /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section: About */}
        <section id="about" className="mb-32 py-16 border-y border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                <Info className="text-yellow-500" /> {t.aboutTitle}
              </h2>
              <div className="text-xl leading-relaxed opacity-90 mb-8 space-y-4">
                <p className="font-bold text-2xl text-yellow-500">{t.aboutHeading}</p>
                <p className="italic">{t.aboutIntro}</p>
                <p>{t.aboutBody}</p>
                <p className="font-bold text-yellow-500 text-lg pt-2">{t.whyUsTitle}</p>
                <ul className="list-none space-y-2">
                  {t.whyUsPoints.map((point, i) => (
                    <li key={i}><span className="font-bold">{point.title}</span> {point.text}</li>
                  ))}
                </ul>
                <p className={`bg-yellow-500/10 p-4 rounded-lg italic mt-4 ${isRtl ? 'border-r-4' : 'border-l-4'} border-yellow-500`}>
                  "{t.aboutQuote}"
                </p>
                <p className="font-bold pt-4 text-yellow-500">{t.aboutClosing1}</p>
                <p>{t.aboutClosing2}</p>
                <p className="text-2xl font-black">{PHONE_DISPLAY}</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {t.whyUs.map((item, i) => (
                  <span key={i} className="px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 font-bold">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-full min-h-[400px] bg-emerald-900/40 rounded-3xl border border-white/10 overflow-hidden relative group">
              <img
                src={henneBG}
                alt="Marrakech Henne"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-yellow-500 font-black text-2xl tracking-widest opacity-40">{t.brand}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Reviews */}
        <section id="reviews" className="mb-32">
          <h2 className="text-4xl font-bold text-yellow-500 mb-16 text-center flex items-center justify-center gap-3">
            <MessageSquare className="text-yellow-500" /> {t.reviewsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.reviews.map((rev, i) => (
              <div key={i} className={`bg-emerald-900/40 p-10 rounded-3xl relative backdrop-blur-sm ${isRtl ? 'border-r-4' : 'border-l-4'} border-yellow-500`}>
                <Quote className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} opacity-10 text-yellow-500`} size={48} />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-6 leading-relaxed">"{rev.text}"</p>
                <p className="font-bold text-yellow-500 text-xl">— {rev.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Gallery */}
        <section id="gallery" className="mb-32">
          <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center flex items-center justify-center gap-3">
            <Camera className="text-yellow-500" /> {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img)}
                className="group relative rounded-2xl overflow-hidden border border-yellow-500/20 aspect-square"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="mb-20">
          <div className="bg-emerald-900/40 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-yellow-500 mb-10 text-center">{t.contactTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <a href={`tel:${PHONE_TEL}`} className="flex flex-col items-center gap-3 hover:text-yellow-500 transition-colors">
                <Phone size={28} className="text-yellow-500" />
                <span className="font-bold">{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex flex-col items-center gap-3 hover:text-yellow-500 transition-colors break-all">
                <Mail size={28} className="text-yellow-500" />
                <span className="font-bold text-sm">{EMAIL}</span>
              </a>
              <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-yellow-500 transition-colors">
                <MapPin size={28} className="text-yellow-500" />
                <span className="font-bold">{ADDRESS}</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-yellow-500 transition-colors">
                <MessageCircle size={28} className="text-yellow-500" />
                <span className="font-bold">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center py-12 border-t border-white/10 text-sm">
          <p className="text-yellow-500 font-black text-xl tracking-widest mb-2">{t.brand}</p>
          <p className="opacity-70 mb-6">{t.tagline}</p>

          <div className="flex items-center justify-center gap-5 mb-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-yellow-500/80 hover:text-yellow-500 transition-colors">
              <MessageCircle size={22} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-yellow-500/80 hover:text-yellow-500 transition-colors">
              <Instagram size={22} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-yellow-500/80 hover:text-yellow-500 transition-colors">
              <Facebook size={22} />
            </a>
            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" aria-label="Waze" className="text-yellow-500/80 hover:text-yellow-500 transition-colors">
              <Navigation size={22} />
            </a>
          </div>

          <p className="opacity-50 max-w-md mx-auto mb-4 text-xs leading-relaxed">{t.privacyNote}</p>
          <p className="opacity-60 tracking-widest">© {new Date().getFullYear()} {t.brand} — {t.copyright}</p>
        </footer>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="close"
          >
            <X size={32} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-full rounded-2xl border-2 border-yellow-500/40" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Accessibility Widget */}
      <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-[150]`}>
        {a11yOpen && (
          <div className="mb-3 bg-emerald-950 border border-yellow-500/30 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 w-56">
            <button onClick={() => setTextScale((s) => Math.min(s + 1, 2))} className="flex items-center gap-2 text-white hover:text-yellow-500 text-sm font-bold p-2 rounded-lg hover:bg-white/5">
              <ZoomIn size={18} /> {t.a11y.bigger}
            </button>
            <button onClick={() => setTextScale((s) => Math.max(s - 1, 0))} className="flex items-center gap-2 text-white hover:text-yellow-500 text-sm font-bold p-2 rounded-lg hover:bg-white/5">
              <ZoomOut size={18} /> {t.a11y.smaller}
            </button>
            <button onClick={() => setHighContrast((c) => !c)} className="flex items-center gap-2 text-white hover:text-yellow-500 text-sm font-bold p-2 rounded-lg hover:bg-white/5">
              <Contrast size={18} /> {t.a11y.contrast}
            </button>
            <button onClick={() => { setTextScale(0); setHighContrast(false); }} className="flex items-center gap-2 text-white/70 hover:text-yellow-500 text-sm font-bold p-2 rounded-lg hover:bg-white/5">
              <RotateCcw size={18} /> {t.a11y.reset}
            </button>
          </div>
        )}
        <button
          onClick={() => setA11yOpen((o) => !o)}
          aria-label={t.a11y.open}
          className="w-12 h-12 rounded-full bg-yellow-500 text-emerald-950 shadow-2xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <Accessibility size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;
