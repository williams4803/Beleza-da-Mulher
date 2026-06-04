import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import webp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const srcDir = path.join(__dirname, '..', 'src', 'assets');
  console.log('Optimizing images in', srcDir);

  // Compress JPEGs (overwrite)
  await imagemin([`${srcDir}/*.{jpg,jpeg}`], {
    destination: srcDir,
    plugins: [mozjpeg({ quality: 75 })]
  });

  console.log('JPEG compression done. Generating WebP versions...');

  await imagemin([`${srcDir}/*.{jpg,jpeg,png}`], {
    destination: srcDir,
    plugins: [webp({ quality: 75 })]
  });

  console.log('WebP generation done.');
} catch (err) {
  console.error('Image optimization failed:', err);
  process.exit(1);
}
