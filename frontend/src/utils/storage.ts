const storage = {
  getToken: (): string | null => {
    return window.localStorage.getItem('token');
  },
  setToken: (token: string) => {
    window.localStorage.setItem('token', token);
  },
  clearToken: () => {
    window.localStorage.removeItem('token');
  },
};

export default storage;
