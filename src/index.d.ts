// Type definitions for Material Search Bar
// Project: https://github.com/TeamWertarbyte/material-ui-search-bar
// Definitions by: [Tyler Kellogg] <recurrence@gmail.com>
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
      classes?: any;
      /**
       * Custom top-level class.
       */
      className?: string
      /**
       * Override the close icon.
       */
      closeIcon?: any;
      /**
       * Disables text field.
       */
      disabled?: any;
      /**
       * Fired when the search is cancelled.
       */
      onCancelSearch?(): void;
      /**
       * Sets placeholder for the embedded text field.
       */
      placeholder?: any;
      /**
       * Fired when the text value changes.
       */
      onChange?(query: string): void;
      /**
       * Fired when the search icon is clicked.
       */
      onRequestSearch?(): void;
      /**
       * Override the search icon.
       */
      searchIcon?: any;
      /**
       * Override the inline-styles of the root element.
       */
      style?: any;
      /**
       * The value of the text field.
       */
      value?: string;
  }

  const SearchBar: React.ComponentType<SearchBarProps>;
  export default SearchBar;
}
