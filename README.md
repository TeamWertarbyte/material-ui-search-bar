# Material Search Bar
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-search-bar.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-search-bar)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-search-bar.svg)](https://greenkeeper.io/)

![Example](demo.gif)

See this component in [action](https://teamwertarbyte.github.io/material-ui-search-bar/)

## Installation
```shell
npm i --save material-ui-search-bar
```

## Usage
```js
import SearchBar from 'material-ui-search-bar'

// ...
render() {
  return(
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
  )
}
```
### SearchBar Properties
|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|closeIcon       | `node` | `<CloseIcon color={grey500} />`           | Override the close icon.
|dataSource     | `array` | `[]` | Array of strings or nodes used to populate the list.
|dataSourceConfig     | `object` | | Config for objects list dataSource.
|hintText       | `string`  | `Search`| Sets hintText for the embedded [TextField](http://www.material-ui.com/#/components/text-field).
|iconButtonStyle| `object ` | | Override the inline-styles of the button element.
|onChange       | `function` |            | Fired when the text value changes.
|onRequestSearch       | `function` |            | Fired when the search icon is clicked.
|searchIcon       | `node` | `<SearchIcon color={grey500} />`           | Override the search icon.
|spellCheck       | `bool` | `false`           | Specifies whether the element to have its spelling and grammar checked or not.
|style       | `object` |            | Override the inline-styles of the root element.
|value       | `any` |            | The value of the text field.
|disabled    | `boolean`| false   | Disables underlying autocomplete.

\* required property

## License

The files included in this repository are licensed under the MIT license.
