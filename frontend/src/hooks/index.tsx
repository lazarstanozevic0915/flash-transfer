import { useCallback, useState ,useEffect} from 'react';
export const useLocalStorageState = (key: string, defaultState?: string) => {
    const [state, setState] = useState(() => {
        const storedState = localStorage.getItem(key);
        if (storedState) {
          return JSON.parse(storedState);
        }
        return defaultState;
      });
      useEffect(()=>{
        const storedState = localStorage.getItem(key);
       
        if (storedState) {
          setState(JSON.parse(storedState));
        }else{
          setState(defaultState);
        }
        
      },[key])
      const setLocalStorageState = useCallback(
        (newState: any) => {
          const changed = state !== newState;
          if (!changed) {
            return;
          }
          setState(newState);
          if (newState === null) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, JSON.stringify(newState));
          }
        },
        [state, key]
      );
    
      return [state, setLocalStorageState]; 
}