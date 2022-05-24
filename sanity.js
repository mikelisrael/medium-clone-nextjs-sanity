import { createCurrentUserHook, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

// need this to make queries
export const sanityClient = createClient(config);

// would provide an image url
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

// helper function for using current logged account
export const useCurrentUser = createCurrentUserHook(config);
