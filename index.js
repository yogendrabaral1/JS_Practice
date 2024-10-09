// Promise and async/await | call , apply, bind | Object and Array Flattening
// Promise and async/await
function API() {
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = new Error("Data Not Fetched");
            reject(err);
        }, 5000)
        
    });
    return pr;
}

function API2() {
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 5000)
        
    });
    return pr;
}

API().then((data) => {
    console.log('Data Received', data);
    return API2();
}).then((data) => {
    console.log('Second Data Received', data);
}).catch(error => {
    console.log(error.message);
})



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success');
    }, 5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 Success');
        // reject('P2 Failed');
    }, 6000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 Success');
    }, 1000)
});

Promise.all([p1, p2, p3])
.then((data) => {console.log('All',data)})
.catch((error) => { console.error(error)});

Promise.allSettled([p1, p2, p3])
.then((data) => {console.log('All Settled',data)})
.catch((error) => { console.error(error)});

Promise.race([p1, p2, p3])
.then((data) => {console.log('Race',data)})
.catch((error) => { console.error(error)});

Promise.any([p1, p2, p3])
.then((data) => {console.log('Any',data)})
.catch((error) => { console.error(error)});


async function handlePromise() {
    try {
        const data1 = await p1;
        console.log(data1);
        const data = await p2;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
handlePromise();


// call, apply and bind method in JS
const obj = {
    name: "Yogendra",
    printName: function(){
        console.log(this.name);
    }
}

const obj2 = {
    name: 'Ria'
}

obj.printName.call(obj2);



// Interview Question Recursion
let sum = function(a) {
    return function(b) {
        if(b) {
            return sum(a + b);
        }else {
            return a;
        }
    }
}

console.log(sum(2)(2)(2)(5)(10)());



// Own Object flattening function
const usr = {
	user: {
        userName: "Yogendra",
        address: {
            city: {
                cityName: "Gurgaon",
                sector: "Sector 47"
            },
            state: "Haryana"
        }
    }
};
function myFlat(object){
	let resObj = {};
    let recrr = function(object, newKey) {
        Object.entries(object).map(([key,value]) => {
            if(typeof value !== 'object'){
                resObj[newKey + '.' + key]= value
            }else {
                recrr(value, newKey ? newKey + '.' + key : key)
            }
        })
    }
    recrr(object);
    return resObj;
}
console.log(usr);
console.log(myFlat(usr));



// Own Array Flattening function

let arr = [1,2,[3,4,[5,6],[7,8],[9,[10,11,12]]]];
function myArrFlat (array) {
    let resArr = [];
    let recurs = function(arry){
        arry.forEach(function(a) {
            if(typeof a !== 'object'){
                resArr.push(a);
            }else {
                recurs(a)
            }
        })
    }
    recurs(array);
    return resArr;
}

console.log(myArrFlat(arr));