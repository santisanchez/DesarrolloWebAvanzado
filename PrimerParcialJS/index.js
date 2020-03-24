import createElement from './utils/createElement'

const $app = document.getElementById('app')

const navbar = createElement('nav',{class:'navbar'},['SOAT LIST']);

const headers = ['State','Brand','License Plate','Valid From','Valid Until'];
const elTableHeaders = headers.map((header)=>{
    return createElement('th',{class:'table__header--name'},[header])
})
const tableHeader = createElement('tr',{class:'table__header'},elTableHeaders);

const fetchVehicles = fetch('https://dwaapi.juvasquez88.now.sh/soatdwa').then((response)=>{
    return response.json()
})

const formatDate = (date)=>{
    return  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
}
const isValidSoat = (from,until)=>{
    if(from.getFullYear()+1 == until.getFullYear()){
        if(from.getMonth() == until.getMonth()){
            return true;
        }
    }
    return false
}
const generateVehicleRows = async ()=>{
    try {
        let {vehicles} = await fetchVehicles;

        return vehicles.map(({brand,licensePlate,soatValidFrom,soatValidUntil})=> {
            let fromDate = new Date(parseInt(soatValidFrom))
            let untilDate = new Date(parseInt(soatValidUntil))
            let state = createElement('td',{class: isValidSoat(fromDate,untilDate) ? 'valid':'invalid'},['']);
            let brandEl = createElement('td',{class:''},[brand])
            let license = createElement('td',{class:''},[licensePlate])
            let from = createElement('td',{class:''},[formatDate(fromDate)])
            let until = createElement('td',{class:''},[formatDate(untilDate)])

            return createElement('tr',{class:'table__row'},[state,brandEl,license,from,until]);
        });
    } catch (error) {
        throw new Error(error);
    }
}
const table = createElement('table',{class:'table'},[tableHeader]);
generateVehicleRows().then((vehicles)=>{
    vehicles.forEach(vehicle => {
        table.appendChild(vehicle);
    });
});

$app.appendChild(navbar);
$app.appendChild(table);