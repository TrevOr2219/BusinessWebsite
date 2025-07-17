import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ng5dgi7t', // exactly your project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-07-16',
})
