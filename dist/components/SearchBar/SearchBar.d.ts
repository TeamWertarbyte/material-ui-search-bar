import React, { ReactElement } from "react";
interface ISearchBarProps {
    /** Whether to clear search on escape */
    cancelOnEscape?: boolean;
    /** Override or extend the styles applied to the component. */
    classes?: {
        root?: string;
        iconButton?: string;
        iconButtonHidden?: string;
        iconButtonDisabled?: string;
        searchIconButton?: string;
        icon?: string;
        input?: string;
        searchContainer?: string;
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
declare const _default: React.ComponentType<Pick<ISearchBarProps & React.RefAttributes<HTMLInputElement>, "cancelOnEscape" | "className" | "closeIcon" | "disabled" | "onCancelSearch" | "onRequestSearch" | "searchIcon" | "style" | "placeholder" | "onBlur" | "onFocus" | "onKeyUp" | "onChange" | "value" | "ref" | "key"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "iconButton" | "iconButtonHidden" | "searchIconButton" | "icon" | "input" | "searchContainer">>;
export default _default;
