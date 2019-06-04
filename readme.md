# Tabulate 
> Turn a text area in to table cells, replacing § for <td>.  

Created as my first NPM module, I've needed to create this when building static sites through Wintersmith, as when inserting content for multiple products with different specifications, instead of creating multiple tables for each, use one string to make custom tables, fully customisable.

## Install
```
$ npm install tabulate --save
```

## Usage
```js
const tabulate = require('tabulate');
const rows = 'First§row\nsecond§row';
console.log(tabulate(rows));
//=> '<tr><td>First</td><td>row</td></tr><tr><td>second</td><td>row</td></tr>'
```