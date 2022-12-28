import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//For some reason I need to reinstall @sanityClient and @sanity/image-url with --legacy-peer-dev

export const client = sanityClient({
  projectId: 'o5jmjrzv',
  dataset: 'production',
  apiVersion: '1',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
