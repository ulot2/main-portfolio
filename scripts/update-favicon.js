const sharp = require("sharp");
// Access default export for png-to-ico
const pngToIco = require("png-to-ico").default || require("png-to-ico");
const fs = require("fs");
const path = require("path");

const INPUT_IMAGE = path.join(__dirname, "../public/images/port-img.jpg");
const OUTPUT_ICON = path.join(__dirname, "../src/app/favicon.ico");

async function generateFavicon() {
  try {
    console.log(`Reading image from ${INPUT_IMAGE}...`);

    // Create a circular mask
    const size = 32;
    const radius = size / 2;
    const circleSvg = Buffer.from(
      `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="black"/></svg>`,
    );

    // Resize to 32x32, apply mask, and convert to PNG buffer
    // sharp returns object, we need to call toBuffer
    const pngBuffer = await sharp(INPUT_IMAGE)
      .resize(size, size)
      .composite([
        {
          input: circleSvg,
          blend: "dest-in",
        },
      ])
      .png()
      .toBuffer();

    console.log("Image resized to 32x32 PNG.");

    // Convert PNG buffer to ICO
    // Check if pngToIco is a function just in case
    if (typeof pngToIco !== "function") {
      throw new Error(`pngToIco is not a function, it is: ${typeof pngToIco}`);
    }

    const icoBuffer = await pngToIco([pngBuffer]);
    // note: png-to-ico expects an array of buffers or paths

    // Write to file
    fs.writeFileSync(OUTPUT_ICON, icoBuffer);
    console.log(`Success! Favicon written to ${OUTPUT_ICON}`);
  } catch (error) {
    console.error("Error generating favicon:", error);
    process.exit(1);
  }
}

generateFavicon();
