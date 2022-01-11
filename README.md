## DataDragon API
An API Wrapper creating with Node.js for Riot's DataDragon API. Not affiliated with Riot Games. This project is currently in an "open beta" phase, with many features still not yet implemented and still in the planning stage.

This module was built as both a learning experience and a resource for anyone learning how to handle requests and create their own library. Most of my own code here is not the best, but I hope people are able to take something new away from looking through it.

This module only applies to the DataDragon API at this time. There may be a future update that implement's Riot's other API as well, but for now, that is unavailable at this time.

### Installation
Install the library by running the following line in the terminal:

    $ npm install data-dragon-api

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
Coming soon!