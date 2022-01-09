class Item {
    /**
     * Constructor for the Item class.
     * @param {Object} config Represents the configuration previously set in 
     * <br>the DataDragon class constructor.
     */
     constructor(config) {
        this.CONFIG = config;
    }
  
    /**
     * Returns the information listed for all items.
     * @returns {Promise} Returns Promise object that contains the requested item data.
     */
    async get_all() {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/item.json`);
        let items = data.data;
        return items;
    }

    /**
     * Returns the id for the given item.
     * @param {string} item_name The name of the requested item. Case sensitive.
     * @param {Object} items Item object data to be iterated.
     * @returns {*} Returns item id.
     */
    get_item_id(item_name, items) {
        Object.keys(items).map(key => {
            if (items[key].name == item_name) {
                
            }
        })
    }

    /**
     * Returns the image file of the requested item.
     * @param {*} item_id The id of the requested item.
     * @returns {Promise} Promise object containing the requested image.
     */
    async get_item_img(item_id) {
        let data = await this.CONFIG.fetch(`img/item/${item_id}.png`);

        return data;
    }

    /**
     * Returns a list of items with the given tag.
     * @param {string} tag_name The tag the function will check every item for.
     * @param {Object} items Item object data to be iterated.
     */
    filter_by_tag(tag_name, items) {
        
    }
}

module.exports = Item;