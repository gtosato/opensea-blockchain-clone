import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'up1azg7q',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skeN4YKT6haX2NGlWfv9IlKYS6PXm6oRq39fPYUaGbuhFrSpsltHn2dkGBQfc5BI1dZeJOzRnB5t74Lr65rVX3cLXcp3NxOuTybmQEOibznnQND10OmHkpNVhuUyZldXp7bLcJxAHK9gZlKWDue6YLupkeLMBGIgyWicAywLTYOLVbm7rcYI',
  useCdn: false,
})
