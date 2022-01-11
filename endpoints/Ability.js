/**
 * Functions for the Ability class.
 * @class Ability
 * @kind class
 */
class Ability {
    /**
     * Constructor for the Ability class.
     * @param {Object} config Represents the configuration previously set in 
     * <br>the DataDragon class constructor.
     */
    constructor(config) {
        this.CONFIG = config;
    }

    /**
     * Returns the information listed for all abilities.
     * @param {string} champion_name The champion whose abilities will be searched for.
     */
    async get_all(champion_name) {
        let data = await this.CONFIG.fetch(`data/${this.CONFIG.LANG}/champion/${champion_name}.json`);
        let abilities = data.data[champion_name].spells;
        
        return abilities;
    }
}

module.exports = Ability;