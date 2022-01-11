/**
 * Functions for the Champion class.
 * @class Champion
 * @kind class
 */
class Champion {
    /**
     * Constructor for the Champion class.
     * @param {Object} config Represents the configuration previously set in 
     * <br>the DataDragon class constructor.
     */
    constructor(config) {
        this.CONFIG = config;
    }

    /**
     * Gets the information listed for all champions.
     */
    async get_all() {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/champion.json`);
        let champions = data.data;

        return champions;
    }

    /**
     * Gets the square image file of the requested champion.
     * @param {string} champion_name The name of the champion requested. Case sensitive, no spaces.
     */
    async get_champion_img(champion_name) {
        let image = this.CONFIG.fetch(`img/champion/${champion_name}.png`);

        return image;
    }
}

module.exports = Champion;