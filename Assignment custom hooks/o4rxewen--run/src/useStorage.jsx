

import { useEffect, useState } from 'react';

function saveValue(key, initialValue) {

  const localValue = localStorage.getItem(key);
  const sessionValue = sessionStorage.getItem(key);


    if (localValue !== null) {
      return JSON.parse(localValue);
    }
    else {
      if(sessionValue !== null) {
        return JSON.parse(sessionValue);
      }
      else {
        return initialValue;
      }      
    }

  }

export default function useLocalStorage(key, initialValue) {
  const [content, setContent] = useState(() => saveValue(key, initialValue));

  useEffect(() => {
    try {
      const value = JSON.stringify(content);
      localStorage.setItem(key, value);
      sessionStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage errors
    }
  }, [content, key]);

  return [content, setContent];
}