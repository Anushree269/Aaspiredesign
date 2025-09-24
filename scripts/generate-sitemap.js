// scripts/generate-sitemap.js
const fs = require("fs");

const BASE_URL = "https://www.aaspiredesign.com";

const routes = [
  "",
  "about",
  "projects",
  "services",
  "contact",
  "whychooseus",
  "faq"
];

// Optional: Add location-specific pages
const locations = ["baner", "wakad", "balewadi", "aundh"];

let urls = [];

routes.forEach((route) => {
  urls.push(`${BASE_URL}/${route}`);
  locations.forEach((loc) => {
    urls.push(`${BASE_URL}/${route}/${loc}`);
  });
});

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach((url) => {
  sitemap += `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("Sitemap generated at public/sitemap.xml ✅");
