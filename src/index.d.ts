// Type definitions for Material Search Bar
// Project: https://github.com/TeamWertarbyte/material-ui-search-bar
// Original definitions by: [Tyler Kellogg] <recurrence@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

declare module 'material-ui-search-bar' {
  export interface SearchBarProps {
      /**
       * Whether to clear search on escape.
       */
      cancelOnEscape?: boolean;
      /**
       * Override or extend the styles applied to the component.
       */
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
      /**
       * Custom top-level class.
       */
      className?: string;
      /**
       * Override the close icon.
       */
      closeIcon?: JSX.Element;
      /**
       * Disables text field.
       */
      disabled?: boolean;
      /**
       * Fired when the search is cancelled.
       */
      onCancelSearch?(): void;
      /**
       * Fired when the text value changes.
       */
      onChange?(query: string): void;
      /**
       * Fired when the search icon is clicked.
       */
      onRequestSearch?(): void;
      /**
       * Sets placeholder for the embedded text field.
       */
      placeholder?: string;
      /**
       * Override the search icon.
       */
      searchIcon?: JSX.Element;
      /**
       * Override the inline-styles of the root element.
       */
      style?: object;
      /**
       * The value of the text field.
       */
      value?: string;
  }

  const SearchBar: React.ComponentType<SearchBarProps>;
  export default SearchBar;
}
