/** @param {string} source */
async function imageDataFromSource (source) {
    const image = Object.assign(new Image(), { src: source });
    await new Promise<void>(resolve => image.addEventListener('load', () => resolve()));
    const context = Object.assign(document.createElement('canvas'), {
       width: image.width,
       height: image.height
    }).getContext('2d');
    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
 }


export async function getTextureData (source) {
   return await imageDataFromSource(source)
}
