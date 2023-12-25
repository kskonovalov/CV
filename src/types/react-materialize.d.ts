import 'react-materialize';

declare module 'react-materialize' {
  // extend tabs types
  export interface TabsProps {
    children?: React.ReactNode;
  }
  export interface TabProps {
    children?: React.ReactNode;
    value?: string;
  }

  // extend inputs types
  import {
    TextInputProps as OriginalTextInputProps,
    TextareaProps as OriginalTextareaProps,
    ButtonProps as OriginalButtonProps,
  } from 'react-materialize';

  export interface TextInputProps extends OriginalTextInputProps {
    required?: boolean;
  }

  export interface TextareaProps extends OriginalTextareaProps {
    name?: string;
    required?: boolean;
  }

  export interface ButtonProps extends OriginalButtonProps {
    type?: string;
  }
}
