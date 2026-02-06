const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public/images');
const targetQuality = 80;
const maxWidth = 1920; // Max width for hero images

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  try {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;

    // Skip if already small
    if (originalSize < 100000) {
      console.log(`⏩ Skipping ${path.basename(filePath)} (already optimized: ${(originalSize / 1024).toFixed(0)}KB)`);
      return;
    }

    const tempPath = filePath + '.tmp';

    await sharp(filePath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: targetQuality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(tempPath);

    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    // Only replace if we saved significant space
    if (newSize < originalSize * 0.9) {
      fs.renameSync(tempPath, filePath);
      console.log(`✅ ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% saved)`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⏩ ${path.basename(filePath)}: No significant improvement`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

console.log('🖼️  Optimizing images...\n');
walkDir(publicDir)
  .then(() => console.log('\n✨ Image optimization complete!'))
  .catch(err => console.error('Error:', err));
