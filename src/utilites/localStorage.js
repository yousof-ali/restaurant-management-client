const getLocalStorage = () => {
    let localData = localStorage.getItem('favorite');
    if (localData) {
        return JSON.parse(localData);
    }
    return [];
};

const setLocalStorage = (id) => {
    const oldData = getLocalStorage();
    const isExist = oldData.find(eachId => eachId === id);
    if (!isExist) {
        oldData.push(id);
        localStorage.setItem('favorite', JSON.stringify(oldData));
        return true;
    }
    else {
        return false;
    }
};



const removeLocalStorage = (id) => {
    const oldData = getLocalStorage();
    const result =  oldData.filter(single => single !== id);
    localStorage.setItem('favorite',JSON.stringify(result));
};

export {setLocalStorage,getLocalStorage,removeLocalStorage};