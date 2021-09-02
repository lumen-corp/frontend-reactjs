// TODO: Correct api url
export default {
   ApiUrl: process.env.REACT_PUBLIC_BASE_API_URL || 'https://api.dev.mtchildsupport.org/',
   AccessTokenKey: process.env.REACT_PUBLIC_ACCESS_TOKEN_KEY || 'todo_access_token',
   RefreshTokenKey: process.env.REACT_PUBLIC_REFRESH_TOKEN_KEY || 'todo_refresh_token',
};
  