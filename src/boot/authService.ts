export interface IUser {
  id: number;
  displayName: string;
}
const StorageKeys = {
  USER: 'user',
  IS_AUTH: 'isAuth',
};

class AuthService {
  login(userName: string, password: string) {
    if (userName == 'deneme' && password == '123') {
      const user: IUser = {
        id: 1,
        displayName: 'Fatih Ulus',
      };
      localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
      localStorage.setItem(StorageKeys.IS_AUTH, JSON.stringify(true));
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  logout(): Promise<boolean> {
    localStorage.removeItem(StorageKeys.USER);
    localStorage.removeItem(StorageKeys.IS_AUTH);
    return Promise.resolve(true);
  }
  getUser(): Promise<IUser | null> {
    const user = localStorage.getItem(StorageKeys.USER);
    if (user) {
      return JSON.parse(user);
    } else {
      return Promise.resolve(null);
    }
  }
  isAuth(): boolean {
    return JSON.parse(localStorage.getItem(StorageKeys.IS_AUTH) || 'false');
  }
}
export default new AuthService();
