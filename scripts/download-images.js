const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero images (landscape 16:9)
  { url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc', name: 'hero-basketball-1.jpg', folder: 'hero' },
  { url: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0', name: 'hero-basketball-2.jpg', folder: 'hero' },
  { url: 'https://images.unsplash.com/photo-1519861531473-9200262188bf', name: 'hero-basketball-3.jpg', folder: 'hero' },

  // Card images (various ratios)
  { url: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4', name: 'basketball-action-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1627627256672-027a4613d028', name: 'basketball-action-2.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a', name: 'basketball-team-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8', name: 'basketball-court-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc', name: 'basketball-dunk-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1559692048-79a3f837883d', name: 'basketball-training-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d', name: 'basketball-kids-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890', name: 'basketball-hoop-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e', name: 'basketball-match-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1518005068251-37900150dfca', name: 'basketball-crowd-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1559163499-413811fb2344', name: 'basketball-player-1.jpg', folder: 'basketball' },
  { url: 'https://images.unsplash.com/photo-1546526081-d9827f9a1dde', name: 'basketball-practice-1.jpg', folder: 'basketball' },
];

console.log('Starting basketball image downloads...\n');

let completed = 0;
const total = images.length;

images.forEach((img) => {
  const fullUrl = `${img.url}?w=1920&q=85&fm=jpg`;
  const destPath = path.join(__dirname, '../public/images', img.folder, img.name);

  https.get(fullUrl, (response) => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        completed++;
        console.log(`[${completed}/${total}] Downloaded: ${img.name} (${img.folder})`);
        fileStream.close();
        if (completed === total) {
          console.log('\n✅ All basketball images downloaded successfully!');
        }
      });
    } else {
      console.error(`❌ Failed to download ${img.name}: HTTP ${response.statusCode}`);
      completed++;
    }
  }).on('error', (err) => {
    console.error(`❌ Error downloading ${img.name}:`, err.message);
    completed++;
  });
});
