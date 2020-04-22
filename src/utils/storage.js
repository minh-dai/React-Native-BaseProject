import { AsyncStorage } from 'react-native';
const USER_TOKEN = 'USER_TOKEN'
const AUTO_LOGIN = 'CHECK_AUTO_LOGIN'
const USER_DEVICE_TOKEN = "USER_DEVICE_TOKEN"
const MATCHING_PARNET = 'MATCHING_PARNET'
const KEY_ACCESS_TOKEN = 'KEY ACCESS TOKEN'
const IMAGE_STORAGE = 'IMAGE_STORAGE'

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`@${key}:key`, `${value}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}:key`);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    return '';
  }
};

export const saveToken = async (value) => {
  try {
    await AsyncStorage.setItem(`@${USER_TOKEN}:key`, `${value}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const clearToken = async () => saveToken('');

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(`@${USER_TOKEN}:key`);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    return '';
  }
};


export const setDataJson = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

export const getDataJson = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    return false;
  }
};

export const getAutoLogin = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTO_LOGIN);
    //console.log("Value", value)
    if (value !== null) {
      return JSON.parse(value);
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const setAutoLogin = async (value) => {
  try {
    await AsyncStorage.setItem(AUTO_LOGIN, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteAccount = async () => {
  await AsyncStorage.removeItem(AUTO_LOGIN);
  await AsyncStorage.removeItem(`@${USER_TOKEN}:key`);
  await AsyncStorage.removeItem(`@${USER_DEVICE_TOKEN}:key`);
  await AsyncStorage.removeItem(KEY_ACCESS_TOKEN);
}

export const saveDeviceToken = async (value) => {
  try {
    await AsyncStorage.setItem(`@${USER_DEVICE_TOKEN}:key`, `${value}`);
    return true;
  } catch (error) {
    return false;
  }
}

export const getDeviceToken = async () => {
  try {
    const value = await AsyncStorage.getItem(`@${USER_DEVICE_TOKEN}:key`);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    return '';
  }
}


export const deleteMatchingParnet = async () => {
  try {
    await AsyncStorage.removeItem(`@${MATCHING_PARNET}:key`);
    return true;
  } catch (error) {
    return false;
  }
}

export const saveMatchingParnet = async () => {
  try {
    await AsyncStorage.setItem(`@${MATCHING_PARNET}:key`, `true`);
    return true;
  } catch (error) {
    return false;
  }
}

export const getMatchingParnet = async () => {
  try {
    const value = await AsyncStorage.getItem(`@${MATCHING_PARNET}:key`);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    return '';
  }
}

export const getImageStore = async () => {
  try {
    const value = await AsyncStorage.getItem(`@${IMAGE_STORAGE}:key`);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return '';
  }
}

export const saveImageStore = async (data) => {
  try {
    await AsyncStorage.setItem(`@${IMAGE_STORAGE}:key`, JSON.stringify(data));
    return true;
  } catch (error) {
    return false;
  }
}