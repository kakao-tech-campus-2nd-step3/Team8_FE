type StorageKey = {
  accessToken?: string;
};

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  const get = (): StorageKey[T] => {
    const value = storage.getItem(storageKey);
    return value as StorageKey[T];
  };

  const set = (value: StorageKey[T]) => {
    if (value == undefined || value == null) {
      return storage.removeItem(storageKey);
    }
    const stringifiedValue = JSON.stringify(value);
    storage.setItem(storageKey, stringifiedValue);
  };

  return { get, set };
};

export const authLocalStorage = initStorage('accessToken', localStorage);
