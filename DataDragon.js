'use strict';

const axios = require('axios').default;

const Champion = require('./endpoints/Champion');
const Item = require('./endpoints/Item');
const Ability = require('./endpoints/Ability');
const constants = require('./data/constants');

/**
 * An API wrapper created with Node.js for Riot's Data Dragon API.
 * @class DataDragon
 * @author Sammy Koleosho <skoleosho97@gmail.com>
 * @example
 *      const API = require('data-dragon-api');
 *      const DataDragon = new API('en_US');
 * @kind class
 */
class DataDragon {
    /**
     * Constructor for the DataDragon class.
     * @param {string} lang Denotes localized version of the Data Dragon data file. Case sensitive.
     * <br>If null, defaults to en_US.
     * <br>Visit https://developer.riotgames.com/docs/lol#data-dragon_data-assets to view valid regions.
     */
    constructor(lang) {
        if (!constants.LANGS.includes(lang) && lang !== null) {
            return new Error('Invalid region given. Remember that this field is case sensitive!')
        }

        this.BASE = 'http://ddragon.leagueoflegends.com/cdn';
        this.VERSION = '11.24.1';
        this.LANG = (lang !== null) ? lang : 'en_US';

        this.champion = new Champion(this);
        this.item = new Item(this);
        this.ability = new Ability(this);
    }
    /**
     * Fetches response data.
     * @param {string} base Base URL endpoint of the API. Automatically set by constructor.
     * @param {string} version Current version of the API. Automatically set by constructor.
     * @param {string} endpoint The remaining URL endpoint.
     */
    async fetch(endpoint, base = this.BASE, version = this.VERSION) {
        const url = `${base}/${version}/${endpoint}`;

        try {
            let response = await axios.get(url);
            return response.data;

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = DataDragon;