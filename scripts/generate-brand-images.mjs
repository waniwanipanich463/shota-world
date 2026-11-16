import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicPath = (...parts) => path.join(root, "public", ...parts);
const appIcon = path.join(root, "src/app/icon.png");

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="wash">
      <stop offset="0" stop-color="#07070b" stop-opacity=".96"/>
      <stop offset=".55" stop-color="#07070b" stop-opacity=".82"/>
      <stop offset="1" stop-color="#07070b" stop-opacity=".32"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#wash)"/>
  <path d="M112 215h72" stroke="#ffd37a" stroke-width="5"/>
  <text x="106" y="344" fill="#f8f7f2" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="124"><tspan fill="#aef6ff">S</tspan> create</text>
  <text x="112" y="410" fill="#f8f7f2" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="25">WEB &amp; GRAPHIC DESIGN / SHOTA NIWANO</text>
</svg>`);

await sharp(publicPath("images/hero/synthwave-oasis-hero.jpg"))
  .resize(1200, 630)
  .composite([{ input: overlay }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(publicPath("images/ogp/s-create-ogp.jpg"));

// Keep legacy asset URLs valid without serving the old artwork.
await sharp(publicPath("images/logo/s-create-wordmark.svg"))
  .resize(2172, 724)
  .png()
  .toFile(publicPath("images/logo/shota-world-logo.png"));
await sharp(appIcon).png().toFile(publicPath("fabicon.png"));
