'use strict';

var React = require('react');
var IconButton = require('@material-ui/core/IconButton');
var Input = require('@material-ui/core/Input');
var Paper = require('@material-ui/core/Paper');
var ClearIcon = require('@material-ui/icons/Clear');
var SearchIcon = require('@material-ui/icons/Search');
var withStyles = require('@material-ui/core/styles/withStyles');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);
var Paper__default = /*#__PURE__*/_interopDefaultLegacy(Paper);
var ClearIcon__default = /*#__PURE__*/_interopDefaultLegacy(ClearIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);
var withStyles__default = /*#__PURE__*/_interopDefaultLegacy(withStyles);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

const styles = (theme) => {
    return {
        root: {
            height: theme.spacing(6),
            display: "flex",
            justifyContent: "space-between",
        },
        iconButton: {
            color: theme.palette.action.active,
            transform: "scale(1, 1)",
            transition: theme.transitions.create(["transform", "color"], {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
        iconButtonHidden: {
            transform: "scale(0, 0)",
            "& > $icon": {
                opacity: 0,
            },
        },
        searchIconButton: {
            marginRight: theme.spacing(-6),
        },
        icon: {
            transition: theme.transitions.create(["opacity"], {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
        input: {
            width: "100%",
        },
        searchContainer: {
            margin: "auto 16px",
            width: `calc(100% - ${theme.spacing(6 + 4)}px)`,
        },
    };
};
/**
 * Material design search bar
 * @see [Search patterns](https://material.io/archive/guidelines/patterns/search.html)
 */
const SearchBar = React__default['default'].forwardRef(({ cancelOnEscape, className = "", classes, closeIcon = React__default['default'].createElement(ClearIcon__default['default'], null), disabled = false, onCancelSearch, onRequestSearch, searchIcon = React__default['default'].createElement(SearchIcon__default['default'], null), style, placeholder = "Search", onBlur, onFocus, onKeyUp, onChange, ...inputProps }, ref) => {
    const inputRef = React__default['default'].useRef({ current: null });
    const [value, setValue] = React__default['default'].useState(inputProps.value ?? "");
    React__default['default'].useEffect(() => {
        setValue(inputProps.value ?? "");
    }, [inputProps.value]);
    const handleFocus = React__default['default'].useCallback((e) => {
        if (onFocus) {
            onFocus(e);
        }
    }, [onFocus]);
    const handleBlur = React__default['default'].useCallback((e) => {
        setValue((v) => v.trim());
        if (onBlur) {
            onBlur(e);
        }
    }, [onBlur]);
    const handleInput = React__default['default'].useCallback((e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);
    const handleCancel = React__default['default'].useCallback(() => {
        setValue("");
        if (onCancelSearch) {
            onCancelSearch();
        }
    }, [onCancelSearch]);
    const handleRequestSearch = React__default['default'].useCallback(() => {
        if (onRequestSearch) {
            onRequestSearch(value);
        }
    }, [onRequestSearch, value]);
    const handleKeyUp = React__default['default'].useCallback((e) => {
        if (e.charCode === 13 || e.key === "Enter") {
            handleRequestSearch();
        }
        else if (cancelOnEscape &&
            (e.charCode === 27 || e.key === "Escape")) {
            handleCancel();
        }
        if (onKeyUp) {
            onKeyUp(e);
        }
    }, [handleRequestSearch, cancelOnEscape, handleCancel, onKeyUp]);
    console.warn(classes);
    return (
    // @ts-ignore
    React__default['default'].createElement(Paper__default['default'], { className: classNames__default['default'](classes.root, className), style: style },
        React__default['default'].createElement(IconButton__default['default'], { onClick: handleRequestSearch, 
            // @ts-ignore
            className: classNames__default['default'](classes.iconButton, classes.searchIconButton, {
                // @ts-ignore
                [classes.iconButtonHidden]: value !== "",
            }), disabled: disabled }, React__default['default'].cloneElement(searchIcon, {
            // @ts-ignore
            classes: { root: classes.icon },
        })),
        React__default['default'].createElement(IconButton__default['default'], { onClick: handleCancel, 
            // @ts-ignore
            className: classNames__default['default'](classes.iconButton, {
                iconButtonHidden: value === "",
            }), disabled: disabled }, React__default['default'].cloneElement(closeIcon, {
            // @ts-ignore
            classes: { root: classes.icon },
        })),
        React__default['default'].createElement("div", { className: "searchContainer" },
            React__default['default'].createElement(Input__default['default'], Object.assign({ ref: ref }, inputProps, { placeholder: placeholder, inputRef: inputRef, onBlur: handleBlur, value: value, onChange: handleInput, onKeyUp: handleKeyUp, onFocus: handleFocus, fullWidth: true, 
                // @ts-ignore
                className: classes.input, disableUnderline: true, disabled: disabled })))));
});
var SearchBar$1 = withStyles__default['default'](styles)(SearchBar);

module.exports = SearchBar$1;
//# sourceMappingURL=index.js.map
