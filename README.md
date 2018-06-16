# Material Search Bar
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-search-bar.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-search-bar)

![Example](demo.gif)

See this component in [action](https://teamwertarbyte.github.io/material-ui-search-bar/)

## Installation
```shell
npm i --save material-ui-search-bar@beta
```

## Usage

The `SearchBar` is a _controlled input_, meaning that _you_ need to keep the input state. This allows for much flexibility, e.g. you can change and clear the search input just by changing its props.

```js
import SearchBar from 'material-ui-search-bar'
// *snip*

return (
  <SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
  />
)
```


### SearchBar Properties
|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|classes         | `object` | | Override or extend the styles applied to the component.
|closeIcon       | `node` | `<CloseIcon color={grey500} />`           | Override the close icon.
|dataSource     | `array` | `[]` | Array of strings or nodes used to populate the list.
|dataSourceConfig     | `object` | | Config for objects list dataSource.
|hintText       | `string`  | `Search`| Sets hintText for the embedded [TextField](http://www.material-ui.com/#/components/text-field).
|onChange       | `function` |            | Fired when the text value changes.
|onRequestSearch       | `function` |            | Fired when the search icon is clicked.
|searchIcon       | `node` | `<SearchIcon color={grey500} />`           | Override the search icon.
|style       | `object` |            | Override the inline-styles of the root element.
|value       | `any` |            | The value of the text field.
|disabled    | `boolean`| false   | Disables underlying autocomplete.

\* required property

## License

The files included in this repository are licensed under the MIT license.
