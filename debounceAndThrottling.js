// Random function for fetching data
let count = 0;
const getData = () => {
    console.log("Fetching Data...", count++);
}

// Debouncing function
const debounceFunction = (apiCall,delay) => {
    let timer;
    return function () {
        clearInterval(timer);
        timer = setTimeout(() => {
            apiCall.apply(this,arguments);
        }, delay);
    }
}

let callDebounceFunction = debounceFunction(getData, 300);