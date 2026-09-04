import { defineField, defineType } from 'sanity'

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Contenu du site',
  type: 'document',
  groups: [
    { name: 'french', title: 'Français' },
    { name: 'hebrew', title: 'עברית' },
    { name: 'images', title: 'Images' },
    { name: 'contact', title: 'Contact' },
  ],
  fields: [
    defineField({ name: 'french', title: 'Français', type: 'localeContent', group: 'french' }),
    defineField({ name: 'hebrew', title: 'עברית', type: 'localeContent', group: 'hebrew' }),

    defineField({ name: 'logo', title: 'Logo', type: 'image', group: 'images' }),
    defineField({
      name: 'heroImageHe',
      title: 'Image héro — hébreu (le flyer "ציוד לחינה")',
      type: 'image',
      group: 'images',
    }),
    defineField({
      name: 'heroImageFr',
      title: 'Image héro — français (le flyer "Location de matériel")',
      type: 'image',
      group: 'images',
    }),
    defineField({ name: 'flyerImage', title: 'Flyer complet (bouton "voir le flyer")', type: 'image', group: 'images' }),
    defineField({ name: 'chairSceneImage', title: 'Photo service : Décor', type: 'image', group: 'images' }),
    defineField({ name: 'dressesRackImage', title: 'Photo service : Tenues', type: 'image', group: 'images' }),
    defineField({ name: 'musicImage', title: 'Photo service : Musique', type: 'image', group: 'images' }),
    defineField({ name: 'gateauxImage', title: 'Photo service : Plateaux', type: 'image', group: 'images' }),

    defineField({ name: 'phone', title: 'Téléphone (ex: 052-2336877)', type: 'string', group: 'contact' }),
    defineField({ name: 'address', title: 'Adresse', type: 'string', group: 'contact' }),
    defineField({ name: 'instagramUrl', title: 'Lien Instagram', type: 'url', group: 'contact' }),
    defineField({ name: 'facebookUrl', title: 'Lien Facebook', type: 'url', group: 'contact' }),
    defineField({ name: 'websiteUrl', title: 'Lien site web', type: 'url', group: 'contact' }),
  ],
  preview: {
    prepare() {
      return { title: 'Contenu du site (Marrakech)' }
    },
  },
})
