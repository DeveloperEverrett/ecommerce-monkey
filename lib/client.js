import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//For some reason I need to reinstall @sanityClient and @sanity/image-url with --legacy-peer-dev

export const client = sanityClient({
  projectId: 'o5jmjrzv',
  dataset: 'production',
  apiVersion: '1',
  useCdn: true,
  token:
    'skIGpVTqEIuj0zZvN8B7DOkPSc3d8Td1y3vP5dPySidW2fBGUtx1KHVgCuldydVD8DeS3vV1k6T4Tsx2qLpzQVpuBK9B2VMaQSSZvAO9PIyymc2R4IyAUKlkjpsxX6mnazKnqWicxzhrNivEDxmSmSoszOZWgui9J08H9MXuzNCG4NDgfsE5',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
