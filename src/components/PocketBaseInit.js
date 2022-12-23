import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_PB_HTTP_URL);

export const PocketBaseInit = () => {
  pb.authStore.onChange((auth) => {
    console.log(`Token: ${auth}`);
  });

  return null;
};
