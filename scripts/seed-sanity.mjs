// One-off migration: pushes the site's current hardcoded text/images into Sanity
// as the initial `siteContent` singleton document, so the CMS starts populated
// instead of blank. Run with: node scripts/seed-sanity.mjs
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from './lib/loadEnv.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ASSETS = path.join(ROOT, 'src', 'assets')

dotenv()

const projectId = process.env.SANITY_API_PROJECT_ID
const dataset = process.env.SANITY_API_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error('Missing SANITY_API_PROJECT_ID / SANITY_API_DATASET / SANITY_API_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

async function uploadImage(filename) {
  const filePath = path.join(ASSETS, filename)
  const buffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, { filename })
  console.log(`  uploaded ${filename} -> ${asset._id}`)
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function main() {
  console.log('Uploading images…')
  const [logo, heroImageHe, heroImageFr, flyerImage, chairSceneImage, dressesRackImage, musicImage, gateauxImage] =
    await Promise.all([
      uploadImage('logo.png'),
      uploadImage('hina-hero.jpeg'),
      uploadImage('hero-fr.jpeg'),
      uploadImage('flyer.png'),
      uploadImage('chair-scene.png'),
      uploadImage('dresses-rack-hd.jpeg'),
      uploadImage('music.png'),
      uploadImage('gateaux.jpeg'),
    ])

  const doc = {
    _id: 'siteContent',
    _type: 'siteContent',
    logo,
    heroImageHe,
    heroImageFr,
    flyerImage,
    chairSceneImage,
    dressesRackImage,
    musicImage,
    gateauxImage,
    phone: '052-2336877',
    address: 'קדרון 6, גבעת זאב',
    instagramUrl: 'https://www.instagram.com/asher_chayoun/',
    facebookUrl: 'https://m.facebook.com/profile.php?id=61586764259150',
    websiteUrl: 'https://marrakech-555.com/',
    french: {
      tagline: 'Design d’événements de style marocain',
      greeting: 'Mazal Tov !',
      hook: 'Henné royal !',
      rentPromo: 'Location de matériel',
      title: 'Vous célébrez un henné, une Bar ou Bat Mitsva ?',
      subtitle: 'Chez « Marrakech », on s’occupe de tout pour un événement de rêve : décor complet et musique parfaite !',
      sidebarHelper: 'Ou laissez vos coordonnées ci-dessous et nous vous rappelons !',
      logisticsTitle: 'Réservez votre moment',
      specialOfferTitle: 'Offre spéciale !',
      specialOfferText: 'Tarifs préférentiels pour toute réservation ce mois-ci !',
      usps: ['Décor somptueux', 'Tenues authentiques', 'Son & lumière pro'],
      viewFlyer: 'Voir le flyer complet',
      servicesTitle: 'Nos services',
      privacyNote: 'Vos coordonnées sont conservées uniquement dans le but de vous recontacter et de vous fournir des informations.',
      copyright: 'Tous droits réservés.',
      labels: {
        fauteuil: 'Décor', tenues: 'Tenues', musique: 'Musique', gateaux: 'Plateaux',
        nom: 'Nom complet*', telephone: 'Téléphone*', date: 'Date de l’événement', btn: 'Envoyer',
      },
    },
    hebrew: {
      tagline: 'עיצוב אירועים בסגנון מרוקאי',
      greeting: 'מזל טוב!',
      hook: 'חינה מלכותית!',
      rentPromo: 'משכירים ציוד לחינה',
      title: 'חוגגים חינה, בר מצווה או בת מצווה?',
      subtitle: 'אנחנו ב"מרקש" נדאג לכם לאירוע חלומי עם ציוד מלא ומוזיקה מושלמת!',
      sidebarHelper: 'או תשאירו פרטים ואנחנו נחזור אליכם!',
      logisticsTitle: 'הזמינו את הרגע שלכם',
      specialOfferTitle: 'הטבה מיוחדת!',
      specialOfferText: 'מחירים מיוחדים לסוגרים אירוע החודש!',
      usps: ['תפאורה מפוארת', 'תלבושות אותנטיות', 'תאורה והגברה מקצועית'],
      viewFlyer: 'צפו בפלייר המלא',
      servicesTitle: 'השירותים שלנו',
      privacyNote: 'פרטיכם יישמרו לצורך יצירת קשר ומתן מידע בלבד.',
      copyright: 'כל הזכויות שמורות.',
      labels: {
        fauteuil: 'תפאורה', tenues: 'תלבושות', musique: 'מוזיקה', gateaux: 'מגשים',
        nom: 'שם מלא*', telephone: 'טלפון*', date: 'תאריך האירוע', btn: 'שליחה',
      },
    },
  }

  console.log('Writing siteContent document…')
  await client.createOrReplace(doc)
  console.log('Done. Open the Studio to review/edit: npm run dev (in ./studio)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
