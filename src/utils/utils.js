var md5 = require("md5");
export const base64Image = (imgSrc, extention) => {
  return <img src={"data:image/" + extention + ";base64," + imgSrc} />;
};

export const hashMd5Password = (password) => {
  return md5(password);
};

// export default {
//   hashPassword,
//   base64Image,
// };
