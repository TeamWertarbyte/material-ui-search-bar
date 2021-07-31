import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

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
const SearchBar = React.forwardRef(({ cancelOnEscape, className = "", classes, closeIcon = React.createElement(ClearIcon, null), disabled = false, onCancelSearch, onRequestSearch, searchIcon = React.createElement(SearchIcon, null), style, placeholder = "Search", onBlur, onFocus, onKeyUp, onChange, ...inputProps }, ref) => {
    const inputRef = React.useRef({ current: null });
    const [value, setValue] = React.useState(inputProps.value ?? "");
    React.useEffect(() => {
        setValue(inputProps.value ?? "");
    }, [inputProps.value]);
    const handleFocus = React.useCallback((e) => {
        if (onFocus) {
            onFocus(e);
        }
    }, [onFocus]);
    const handleBlur = React.useCallback((e) => {
        setValue((v) => v.trim());
        if (onBlur) {
            onBlur(e);
        }
    }, [onBlur]);
    const handleInput = React.useCallback((e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);
    const handleCancel = React.useCallback(() => {
        setValue("");
        if (onCancelSearch) {
            onCancelSearch();
        }
    }, [onCancelSearch]);
    const handleRequestSearch = React.useCallback(() => {
        if (onRequestSearch) {
            onRequestSearch(value);
        }
    }, [onRequestSearch, value]);
    const handleKeyUp = React.useCallback((e) => {
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
    React.createElement(Paper, { className: classNames(classes.root, className), style: style },
        React.createElement(IconButton, { onClick: handleRequestSearch, 
            // @ts-ignore
            className: classNames(classes.iconButton, classes.searchIconButton, {
                // @ts-ignore
                [classes.iconButtonHidden]: value !== "",
            }), disabled: disabled }, React.cloneElement(searchIcon, {
            // @ts-ignore
            classes: { root: classes.icon },
        })),
        React.createElement(IconButton, { onClick: handleCancel, 
            // @ts-ignore
            className: classNames(classes.iconButton, {
                iconButtonHidden: value === "",
            }), disabled: disabled }, React.cloneElement(closeIcon, {
            // @ts-ignore
            classes: { root: classes.icon },
        })),
        React.createElement("div", { className: "searchContainer" },
            React.createElement(Input, Object.assign({ ref: ref }, inputProps, { placeholder: placeholder, inputRef: inputRef, onBlur: handleBlur, value: value, onChange: handleInput, onKeyUp: handleKeyUp, onFocus: handleFocus, fullWidth: true, 
                // @ts-ignore
                className: classes.input, disableUnderline: true, disabled: disabled })))));
});
var SearchBar$1 = withStyles(styles)(SearchBar);

export { SearchBar$1 as default };
//# sourceMappingURL=index.es.js.map
