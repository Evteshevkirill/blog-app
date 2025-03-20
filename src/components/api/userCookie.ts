const userCookie = document.cookie.match(/User=([^;]*)/)
const user = userCookie ? JSON.parse(decodeURIComponent(userCookie[1])) : null

export { user }
