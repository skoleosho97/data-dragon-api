## DataDragon API
<div align="left">
	<p>
		<a href="https://www.npmjs.com/package/@skoleosho97/ddragon"><img src="https://img.shields.io/badge/npm-0.1.0-orange?style=flat-square&logo=appveyor" alt="npm" /></a>
	</p>
</div>
An API Wrapper creating with Node.js for Riot's DataDragon API. Not affiliated with Riot Games. This project is currently in an "open beta" phase, with many features still not yet implemented and still in the planning stage.

This module was built as both a learning experience and a resource for anyone learning how to handle requests and create their own library. Most of my own code here is not the best, but I hope people are able to take something new away from looking through it.

This module only applies to the DataDragon API at this time. There may be a future update that implement's Riot's other API as well, but for now, that is unavailable at this time.

### Installation
Install the library by running the following line in the terminal:

    $ npm install @skoleosho97/ddragon

### Usage
Initialize a new class below like so:

    // Initialize the class.
    const API = require('data-dragon-api');
    const DataDragon = new API('en_US');

From here you will be able to use the library's functions and query data. All functions utilize ``async/await``, so data will have to be properly resolved before it can be used. For example:

    // In this example, get all items with the ``Mana`` tag.
    const Example = () => {
        let items = await DataDragon.item.filter_by_tag('Mana');

        console.log(items);
    }

    Example();

## Documentation

### DDragon

#### new DataDragon(*region*)
The API's constructor. Sets up the data the other classes will use.
[Click here](https://developer.riotgames.com/docs/lol#data-dragon_regions) for a list of currently
supported regions.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| region | <code>string</code> | ``'en_US'`` | Selected region the API will use. Defaults to ``'en_US'`` if left null.

#### async fetch(endpoint, *base*, *version*) => <code>Promise.&lt;Object&gt;</code>
The universal fetch function, used by class functions when requesting data.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| endpoint | <code>string</code> | N/A | Endpoint path to request data from. Set by class functions.
| base | <code>string</code> | ``'http://ddragon.leagueoflegends.com/cdn'`` | Base endpoint path.
| version | <code>string</code> | ``'11.24.1'`` | Current version of API.


For the following classes, each share the same ``constructor``:

    constructor(config) {
        this.CONFIG = config;
    }

where ``config`` is the data set in ``new DataDragon()``.

### Champion

#### async get_all() => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing all relevant data for all champions.

#### async get_champion_img(champion_name) => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing square image asset of specified champion.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| champion_name | <code>string</code> | N/A | Champion name. Case sensitive.

### Item

#### async get_all() => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing all relevant data for all items.

#### async get_champion_img(item_id) => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing square image asset of specified item.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| item_id | <code>string</code> | N/A | Item ID.

#### async sort_by_price(switch_case) => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing relevant item data, sorted by their ``total`` price.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| switch_case | <code>number</code> | 0 | Switch case for sorting. ``0``: Ascending; ``1``: Descending

#### async filter_by_tag(tag_name) => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing relevant item data with the same tag as specified.
Valid tag names: []

| Param | Type | Default | Description
| --- | --- | --- | --- |
| tag_name | <code>string</code> | N/A | Tag name. Case sensitive.

### Ability

#### async get_all(champion_name) => <code>Promise.&lt;Object&gt;</code>
Returns ``Promise`` containing all abilities (including passive) for specified champion.

| Param | Type | Default | Description
| --- | --- | --- | --- |
| champion_name | <code>string</code> | N/A | Champion name. Case sensitive.