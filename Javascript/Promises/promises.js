const promiseSum = (a,b) => {
    new Promise((resolve, reject) => {
        let res = a+b;
        if(res == 4){
            resolve(a+b);
        }else{
            reject('failed');
        }
    })
}
//For multiple promises
Promise.all([
    promiseSum(2,2),
    promiseSum(1,2),
    promiseSum(2,3)
]).then((messages)=>{
    console.log("Yay you asserted the numbers " + messages)
}).catch((reject)=>{
    console.log("catch ouch! " + reject);
});