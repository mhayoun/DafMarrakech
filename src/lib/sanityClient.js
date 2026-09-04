import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Public, non-secret identifiers — the "production" dataset is public, so
// reads need no token. Content is edited via the Studio in ./studio.
const PROJECT_ID = 'tw2qcpyi';
const DATASET = 'production';

export const sanityClient = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return source ? builder.image(source) : null;
}

const SITE_CONTENT_QUERY = `*[_type == "siteContent"][0]{
  logo, heroImageHe, heroImageFr, flyerImage,
  chairSceneImage, dressesRackImage, musicImage, gateauxImage,
  phone, address, instagramUrl, facebookUrl, websiteUrl,
  french, hebrew
}`;

export async function fetchSiteContent() {
  return sanityClient.fetch(SITE_CONTENT_QUERY);
}
