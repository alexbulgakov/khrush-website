import type { Image } from 'sanity'

import createImageUrlBuilder from '@sanity/image-url'

import { projectId, dataset } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
