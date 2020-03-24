let rooms = [
    {devices:{filter1:0}},
    {devices:{filter1:0,filter2:0}},
    {devices:{filter1:0,filter2:0,filter3:0}},
]

let activeFilters = {filter2:0};
console.time("test")
let firstFilter = rooms.map((room)=>{
    return Object.keys(room.devices).filter((key)=>{
        return activeFilters[key] != undefined;
    })
})
let secondFilter = firstFilter.map((filteredRoom,index)=>{
    if(filteredRoom.length == Object.keys(activeFilters).length){
        return rooms[index];
    }
})
console.timeEnd("test")

console.log(secondFilter);

//Brute Force
console.time("Brute Force")
let bruteForce = [];
let bruteForceConcurrences = 0;
rooms.forEach(element => {
    if(element.devices.length < activeFilters.length){
        return;
    }
    Object.keys(activeFilters).forEach((filter) => {
        if(element.devices.includes(filter)){
            bruteForceConcurrences++;
        }
        if(bruteForceConcurrences == activeFilters.length){
            bruteForce.push(element);
            bruteForceConcurrences = 0;
        }
    });
});
console.timeEnd("Brute Force")
