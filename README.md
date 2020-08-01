# Material Search Bar

![Example](demo.gif)

See this component in [action](https://teamwertarbyte.github.io/material-ui-search-bar/)

## Installation

```shell
npm i --save material-ui-search-bar
```

Note: If you're still using Material-UI v3, please install v0.x of the search bar using `npm i --save material-ui-search-bar@beta`

## Usage

The `SearchBar` is a _controlled input_, meaning that _you_ need to keep the input state. This allows for much flexibility, e.g. you can change and clear the search input just by changing its props.

```js
import SearchBar from "material-ui-search-bar";
// *snip*

return (
  <SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
  />
);
```

### SearchBar Properties

| Name            | Type     | Default                                       | Description                                             |
| --------------- | -------- | --------------------------------------------- | ------------------------------------------------------- |
| cancelOnEscape  | `bool`   |                                               | Whether to clear search on escape                       |
| classes\*       | `object` |                                               | Override or extend the styles applied to the component. |
| className       | `string` | `''`                                          | Custom top-level class                                  |
| closeIcon       | `node`   | `<ClearIcon style={{ color: grey[500] }} />`  | Override the close icon.                                |
| disabled        | `bool`   | `false`                                       | Disables text field.                                    |
| onCancelSearch  | `func`   |                                               | Fired when the search is cancelled.                     |
| onChange        | `func`   |                                               | Fired when the text value changes.                      |
| onRequestSearch | `func`   |                                               | Fired when the search icon is clicked.                  |
| placeholder     | `string` | `'Search'`                                    | Sets placeholder text for the embedded text field.      |
| searchIcon      | `node`   | `<SearchIcon style={{ color: grey[500] }} />` | Override the search icon.                               |
| style           | `object` | `null`                                        | Override the inline-styles of the root element.         |
| value           | `string` | `''`                                          | The value of the text field.                            |

\* required property

Any other properties supplied will be spread to the underlying [`Input`](https://material-ui.com/api/input/#input) component.

## License

The files included in this repository are licensed under the MIT license.
