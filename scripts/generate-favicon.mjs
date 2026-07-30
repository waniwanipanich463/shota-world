import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "public/favicon.svg");
const icon = path.join(root, "src/app/icon.png");

await sharp(source).resize(512, 512).png().toFile(icon);
await sharp(icon).resize(180, 180).png().toFile(path.join(root, "src/app/apple-icon.png"));

const sizes = [16, 32, 48, 64];
const images = await Promise.all(
  sizes.map((size) => sharp(icon).resize(size, size).png().toBuffer()),
);

const headerSize = 6 + images.length * 16;
const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);

let offset = headerSize;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  const size = sizes[index];
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt8(0, entry + 2);
  header.writeUInt8(0, entry + 3);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});

await fs.writeFile(
  path.join(root, "src/app/favicon.ico"),
  Buffer.concat([header, ...images]),
);
