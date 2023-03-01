import { hashSync } from "bcryptjs";
export const base64Image = (imgSrc, extention) => {
  return <img src={"data:image/" + extention + ";base64," + imgSrc} />;
};

export const hashPassword = (password, hashInt) => {
  return hashSync(password, hashInt);
};

// export default {
//   hashPassword,
//   base64Image,
// };
