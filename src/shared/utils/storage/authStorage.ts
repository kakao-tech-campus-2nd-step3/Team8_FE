type StorageKey = {
  accessToken?: string;
  refreshToken?: string;
  isSinitto?: boolean;
};

const initStorage = <T extends keyof StorageKey>(
  key: T,
  storage = window.localStorage
) => {
  const storageKey = `${key}`;

  const get = (): StorageKey[T] => {
    const value = storage.getItem(storageKey);
    return value as StorageKey[T];
  };

  const set = (value: StorageKey[T]) => {
    if (value === undefined || value === null) {
      return storage.removeItem(storageKey);
    }
    storage.setItem(storageKey, String(value));
  };

  return { get, set };
};

export const authStorage = {
  accessToken: initStorage('accessToken', localStorage),
  refreshToken: initStorage('refreshToken', localStorage),
  isSinitto: initStorage('isSinitto', localStorage),
};
