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
     * @returns {Promise} Returns Promise object that contains the requested champion data.
     */
    async get_all() {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/champion.json`);
        let champions = data.data;

        return champions;
    }

    /**
     * Gets the square image file of the requested champion.
     * @param {string} champion_name The name of the champion requested. Case sensitive, no spaces.
     * @returns {Promise} Returns Promise object that contains the requested champion image.
     */
    async get_champion_img(champion_name) {
        return this.CONFIG.fetch(`img/champion/${champion_name}.png`)
            .then(data => {
                return data;
            })
            .catch(e => {
                console.log(e);
            })
    }
}

module.exports = Champion;