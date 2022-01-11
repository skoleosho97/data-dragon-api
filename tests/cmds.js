const DataDragon = require('../DataDragon');
const DD = new DataDragon('en_US');

const main = async () => {
    let items = await DD.item.sort_by_price();

    console.log(items);
}

main();