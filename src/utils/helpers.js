import decode from "jwt-decode";
//Gets username from JWT
export const getUsernameFromToken = () => {
  const token = localStorage.getItem("id_token");
  if (token) {
    const decodedToken = decode(token);
    return decodedToken.data.username;
  }
  return "";
};



// export const getFormattedDate = () => {
//   const currentDate = new Date();
//   const year = String(currentDate.getFullYear());
//   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//   const day = String(currentDate.getDate()).padStart(2, "0");
//   const formattedDate = year + "-" + month + "-" + day;
//   return formattedDate;
// };

// utils/helpers.js
export function getFormattedDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


