import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreConfig {
  key: string;
  reducerVersion: string;
  storage: typeof AsyncStorage;
  timeout: number;
  blacklist: string[];
}

interface ReduxPersist {
  active: boolean;
  storeConfig: StoreConfig;
}

const REDUX_PERSIST: ReduxPersist = {
  active: true,
  storeConfig: {
    key: 'root',
    reducerVersion: '1.0',
    storage: AsyncStorage,
    timeout: 10000,
    blacklist: [],
  },
}

export default REDUX_PERSIST;
