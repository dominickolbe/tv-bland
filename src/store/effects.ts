export const effects = {
  storage: {
    save(key: string, value: boolean) {
      localStorage.setItem(key, JSON.stringify(value));
    },
  },
};
