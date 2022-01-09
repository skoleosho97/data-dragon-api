const DataDragon = require('../DataDragon');
const DD = new DataDragon('en_US');

let items;

getItems = async () => {
    let data = await DD.item.get_all();
    items = data;
    return items;
}

getChampions = async () => {
    let data = await DD.champion.get_all();
    console.log(data);
}

getAbilities = async () => {
    let data = await DD.ability.get_all('Aatrox');
    Object.keys(data).map(key => {
        console.log(data[key]);
    })
}

getAbilities();