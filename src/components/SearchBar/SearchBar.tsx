import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import { ReactElement } from 'react';

const styles = (theme) => ({
  root: {
    height: theme.spacing(6),
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconButton: {
    color: theme.palette.action.active,
    transform: 'scale(1, 1)',
    transition: theme.transitions.create(['transform', 'color'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0,
    },
  },
  searchIconButton: {
    marginRight: theme.spacing(-6),
  },
  icon: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  input: {
    width: '100%',
  },
  searchContainer: {
    margin: 'auto 16px',
    width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
  },
});

interface ISearchBarProps {
  /** Whether to clear search on escape */
  cancelOnEscape?: boolean;
  /** Override or extend the styles applied to the component. */
  classes?: {
    root?: string,
    iconButton?: string,
    iconButtonHidden?: string,
    iconButtonDisabled?: string,
    searchIconButton?: string,
    icon?: string,
    input?: string,
    searchContainer?: string
  };
  /** Custom top-level class */
  className?: string;
  /** Override the close icon. */
  closeIcon?: ReactElement;
  /** Disables text field. */
  disabled?: boolean;
  /** Fired when the search is cancelled. */
  onCancelSearch?: () => void;
  /** Fired when the text value changes. */
  onChange?: (input: string) => void;
  /** Fired when the search icon is clicked. */
  onRequestSearch?: (input: string) => void;
  /** Sets placeholder text for the embedded text field. */
  placeholder?: string;
  /** Override the search icon. */
  searchIcon?: ReactElement;
  /** Override the inline-styles of the root element. */
  style?: React.CSSProperties;
  /** The value of the text field. */
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/archive/guidelines/patterns/search.html)
 */
const SearchBar = React.forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    {
      cancelOnEscape,
      className = '',
      classes = {},
      closeIcon = <ClearIcon />,
      disabled = false,
      onCancelSearch,
      onRequestSearch,
      searchIcon = <SearchIcon />,
      style,
      placeholder = 'Search',
      onBlur,
      onFocus,
      onKeyUp,
      onChange,
      ...inputProps
    },
    ref
  ) => {
    const inputRef: React.MutableRefObject<{
      current: HTMLInputElement;
    }> = React.useRef({ current: null });
    const [value, setValue] = React.useState(inputProps.value ?? '');

    React.useEffect(() => {
      setValue(inputProps.value);
    }, [inputProps.value]);

    const handleFocus = React.useCallback(
      (e) => {
        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e) => {
        setValue((v) => v.trim());
        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur]
    );

    const handleInput = React.useCallback(
      (e) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e.target.value);
        }
      },
      [onChange]
    );

    const handleCancel = React.useCallback(() => {
      setValue('');
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
        if (e.charCode === 13 || e.key === 'Enter') {
          handleRequestSearch();
        } else if (cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
          handleCancel();
        }
        if (onKeyUp) {
          onKeyUp(e);
        }
      },
      [handleRequestSearch, cancelOnEscape, handleCancel, onKeyUp]
    );

    return (
      <Paper className={classNames(classes.root, className)} style={style}>
        <IconButton
          onClick={handleRequestSearch}
          className={classNames(classes.iconButton, classes.searchIconButton, {
            [classes.iconButtonHidden]: value !== '',
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
            [classes.iconButtonHidden]: value === '',
          })}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon, {
            classes: { root: classes.icon },
          })}
        </IconButton>
        <div className={classes.searchContainer}>
          <Input
            ref={ref}
            {...inputProps}
            placeholder={placeholder}
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
      </Paper>
    );
  }
);

export default withStyles(styles)(SearchBar);
