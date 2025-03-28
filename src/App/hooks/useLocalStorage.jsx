import { useState, useEffect } from "react";

//key - ключ (email, password)
//defaultValue - дефолтное значение
//обертка для переиспользованного кода
const storage = window.localStorage;

export default function useLocalStorage(
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue; 
    }
    const storedValue = storage.getItem(key);
    return storedValue !== null ? deserialize(storedValue) : defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      storage.setItem(key, serialize(state));
    }
  }, [key, state, serialize]);

  return [state, setState];
}

// export default function useLocalStorage(
//   key,
//   defaultValue,
//   serialize = JSON.stringify,
// ) {
//   const storage = window.localStorage;
//   const [state, setState] = useState(() => {
//     return JSON.parse(storage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, serialize(state));
//   }, [key, state, serialize]);

//   return [state, setState];
// }

/*  useEffect(()=>{
    window.localStorage.setItem('password', JSON.stringify(password))
  },[password])
  useEffect(()=>{
    window.localStorage.setItem('email', JSON.stringify(email))
  },[email])*/
