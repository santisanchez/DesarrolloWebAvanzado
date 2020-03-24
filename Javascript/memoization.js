
function squareMemo () {
    const cache = {};
    return function square(num) {
        if(cache[num]){
            return cache[num];
        }
        let total = 0;
        for (let index = 0; index < num; index++) {
            for (let j = 0; j < num.length; j++) {
                total++;
            }
        }
        cache[num] = total;
        return cache[num];
    }
}
debugger;


console.time("square1");
squareMemo(50000);
console.timeEnd("square1");

console.time("square2");
squareMemo(30000);
console.timeEnd("square2");

console.time("square3");
squareMemo(50000);
console.timeEnd("square3");