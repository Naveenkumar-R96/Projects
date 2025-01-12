export const setItemInStorage = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};

export const getItemFromStorage = (name) => {
  return localStorage.getItem(name);
};


export const getParsedItemFromStorage=(name)=>{
    return JSON.parse(localStorage.getItem(name))
}

export const removeItemFromStorage=(name)=>{
    return localStorage.removeItem(name)
}