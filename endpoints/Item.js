/**
 * Functions for the Item class.
 * @class Item
 * @kind class
 */
class Item {
    /**
     * Constructor for the Item class.
     * @param {Object} config Configuration that is automatically set from the DataDragon class.
     */
     constructor(config) {
        this.CONFIG = config;
    }
  
    /**
     * Returns the information listed for all items.
     */
    async get_all() {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/item.json`);
        let items = data.data;

        return items;
    }

        /**
     * Sorts items by total gold price.
     * @param {number} switch_case Switch case to determine order. 0 - Ascending | 1 - Descending
     */
    async sort_by_price(switch_case = 0) {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/item.json`);
        let items = Object.values(data.data);

        switch (switch_case)  {
            case 0:
                items.sort((a, b) => {
                    return a.gold['total'] - b.gold['total'];
                })
            
            case 1:
                items.sort((a, b) => {
                    return b.gold['total'] - a.gold['total'];
                })             
        }

        return items;
    }

    /**
     * Returns the image file of the requested item.
     * @param {string} item_id Item ID of the requested item.
     */
    async get_item_img(item_id) {
        let image = await this.CONFIG.fetch(`img/item/${item_id}.png`);

        return image;
    }

    /**
     * Returns a list of items with the given tag.
     * @param {string} tag_name String that every item will be checked for. Case sensitive.
     */
    async filter_by_tag(tag_name) {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/item.json`);

        let items = data.data;

        Object.keys(items).map(key => {
            if (!items[key].tags.includes(tag_name)) {
                delete items[key];
            }
        })

        return items;
    }
}

module.exports = Item;