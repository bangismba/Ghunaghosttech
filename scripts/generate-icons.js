import { createCanvas } from 'canvas';
import fs from 'fs';

// Create a simple text-based icon
function generateIcon(size, text) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#080808';
  ctx.fillRect(0, 0, size, size);
  
  // Border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 4;
  ctx.strokeRect(4, 4, size - 8, size - 8);
  
  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.35}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text || 'GH', size / 2, size / 2);
  
  // Subtitle
  if (size > 192) {
    ctx.fillStyle = '#71717a';
    ctx.font = `${size * 0.05}px Arial`;
    ctx.fillText('GHUNAGHOST', size / 2, size * 0.75);
  }
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/pwa-${size}x${size}.png`, buffer);
  console.log(`✅ Generated pwa-${size}x${size}.png`);
}

// Generate icons
generateIcon(192, 'GH');
generateIcon(512, 'GH');

console.log('✅ Icons generated successfully!');