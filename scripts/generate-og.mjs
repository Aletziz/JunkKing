// Script para generar og-image.jpg desde team.jpg
// Ejecutar con: node scripts/generate-og.mjs

import sharp from 'sharp';
import { createCanvas, loadImage } from '@napi-rs/canvas';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function generateOG() {
  // Redimensionar team.jpg a 1200x630 con crop centrado en la parte superior
  await sharp(path.join(publicDir, 'team.jpg'))
    .resize(1200, 630, {
      fit: 'cover',
      position: 'top',
    })
    .jpeg({ quality: 88, progressive: true })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('✅ og-image.jpg generado (1200×630)');
}

generateOG().catch(console.error);
