export const base64Image = (imgSrc, extention) => (
  <img src={"data:image/" + extention + ";base64," + imgSrc} />
);
