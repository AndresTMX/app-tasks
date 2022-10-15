import React from 'react';

function useLocalStorage(itemName, initialValue) {
  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(initialValue);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue)); //recibimos el nombre y valor convertido en una cadane de texto
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 2000);
    });
  
    const saveItem = (newItem) => {
      try {
        const stringifieldItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifieldItem);
        setItem(newItem);
        
      } catch (error) {
        setError(error);
      }
    };
  
    return { item, saveItem, loading };
}

export {useLocalStorage};