import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const SINGLETON_ID = 'siteContent'
const SINGLETON_TYPE = 'siteContent'

export default defineConfig({
  name: 'default',
  title: 'Marrakech — Contenu du site',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Contenu du site')
              .id(SINGLETON_ID)
              .child(
                S.document()
                  .schemaType(SINGLETON_TYPE)
                  .documentId(SINGLETON_ID)
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => schemaType !== SINGLETON_TYPE),
  },

  document: {
    actions: (input, context) =>
      context.schemaType === SINGLETON_TYPE
        ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((template) => template.templateId !== SINGLETON_TYPE)
      }
      return prev
    },
  },
})
