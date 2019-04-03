
import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

// 取得cookie Token
export function getToken() {
  return Cookies.get(TokenKey);
}
// 設定cookie Token
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}
// 刪除cookie Token
export function removeToken() {
  return Cookies.remove(TokenKey);
}
