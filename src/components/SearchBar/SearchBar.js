import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const styles = (theme) => ({
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
    width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
  },
});

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/archive/guidelines/patterns/search.html)
 */
const SearchBar = React.forwardRef(
  (
    {
      cancelOnEscape,
      className,
      classes,
      closeIcon,
      disabled,
      onCancelSearch,
      onRequestSearch,
      searchIcon,
      style,
      ...inputProps
    },
    ref
  ) => {
    const inputRef = React.useRef();
    const [value, setValue] = React.useState(inputProps.value);

    React.useEffect(() => {
      setValue(inputProps.value);
    }, [inputProps.value]);

    const handleFocus = React.useCallback(
      (e) => {
        if (inputProps.onFocus) {
          inputProps.onFocus(e);
        }
      },
      [inputProps.onFocus]
    );

    const handleBlur = React.useCallback(
      (e) => {
        setValue((v) => v.trim());
        if (inputProps.onBlur) {
          inputProps.onBlur(e);
        }
      },
      [inputProps.onBlur]
    );

    const handleInput = React.useCallback(
      (e) => {
        setValue(e.target.value);
        if (inputProps.onChange) {
          inputProps.onChange(e.target.value);
        }
      },
      [inputProps.onChange]
    );

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

    const handleKeyUp = React.useCallback(
      (e) => {
        if (e.charCode === 13 || e.key === "Enter") {
          handleRequestSearch();
        } else if (
          cancelOnEscape &&
          (e.charCode === 27 || e.key === "Escape")
        ) {
          handleCancel();
        }
        if (inputProps.onKeyUp) {
          inputProps.onKeyUp(e);
        }
      },
      [handleRequestSearch, cancelOnEscape, handleCancel, inputProps.onKeyUp]
    );

    React.useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
    }));

    return (
      <Paper className={classNames(classes.root, className)} style={style}>
        <div className={classes.searchContainer}>
          <Input
            {...inputProps}
            inputRef={inputRef}
            onBlur={handleBlur}
            value={value}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            fullWidth
            className={classes.input}
            disableUnderline
            disabled={disabled}
          />
        </div>
        <IconButton
          onClick={handleRequestSearch}
          className={classNames(classes.iconButton, classes.searchIconButton, {
            [classes.iconButtonHidden]: value !== "",
          })}
          disabled={disabled}
        >
          {React.cloneElement(searchIcon, {
            classes: { root: classes.icon },
          })}
        </IconButton>
        <IconButton
          onClick={handleCancel}
          className={classNames(classes.iconButton, {
            [classes.iconButtonHidden]: value === "",
          })}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon, {
            classes: { root: classes.icon },
          })}
        </IconButton>
      </Paper>
    );
  }
);

SearchBar.defaultProps = {
  className: "",
  closeIcon: <ClearIcon />,
  disabled: false,
  placeholder: "Search",
  searchIcon: <SearchIcon />,
  style: null,
  value: "",
};

SearchBar.propTypes = {
  /** Whether to clear search on escape */
  cancelOnEscape: PropTypes.bool,
  /** Override or extend the styles applied to the component. */
  classes: PropTypes.object.isRequired,
  /** Custom top-level class */
  className: PropTypes.string,
  /** Override the close icon. */
  closeIcon: PropTypes.node,
  /** Disables text field. */
  disabled: PropTypes.bool,
  /** Fired when the search is cancelled. */
  onCancelSearch: PropTypes.func,
  /** Fired when the text value changes. */
  onChange: PropTypes.func,
  /** Fired when the search icon is clicked. */
  onRequestSearch: PropTypes.func,
  /** Sets placeholder text for the embedded text field. */
  placeholder: PropTypes.string,
  /** Override the search icon. */
  searchIcon: PropTypes.node,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
  /** The value of the text field. */
  value: PropTypes.string,
};

export default withStyles(styles)(SearchBar);
