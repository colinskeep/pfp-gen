const sharp = require('sharp');

function gen (backgroundFile, firstLetter) {
  const image = sharp(backgroundFile);
  image
    .metadata()
    .then (function (metadata) {
      const leftMargin = Math.floor(Math.random() * (metadata.width - 200));
      const topMargin = Math.floor(Math.random() * (metadata.height - 200));
      return image
      .extract({ left: leftMargin, top: topMargin, width: 200, height: 200})
      .overlayWith(`letters/${firstLetter}.png`)
      .toFile('pfp_200x200.jpg')
    });
};

module.exports = {
  gen,
}
