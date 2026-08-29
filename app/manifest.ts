import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al-Kawsar",
    short_name: "Al-Kawsar",
    description: "Read deeply. Write freely. Share what matters.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8f5",
    theme_color: "#176b4d",
    icons: [],
  };
}
