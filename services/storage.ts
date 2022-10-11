import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  async getData(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {}
  },
  async setData(key: string, item: string) {
    try {
      AsyncStorage.setItem(key, item);
    } catch (error) {
      console.log(error, 'error setData');
    }
  },
  async getAllKeys() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {}
  },
};
