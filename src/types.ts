import { type CSSProperties, type CSS } from "@stitches/react";
import { type ImageProps } from "next/image";
import {
  ReactNode,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ElementType,
  ComponentType,
  RefObject,
  type JSX,
} from "react";
import { Toaster } from "react-hot-toast";

import { TextSizes } from "./components/Text/styles";
import { theme } from "./stitches.config";

type IThemeSpacing = keyof typeof theme.space;

type InferToastComponentProps<T extends ElementType> =
  T extends ComponentType<infer U>
    ? U
    : T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T]
      : Record<string, never>;

export interface IAccordion {
  defaultOpen?: number | null;
  options: Array<{
    as?: "h3" | "h4" | "h5" | "h6";
    content?: ReactNode;
    cta?: Array<{
      external?: boolean;
      label: string;
      url: string;
    }>;
    description: string;
    title: string;
  }>;
}

export interface IAvatar {
  alt?: string;
  colors?: boolean;
  css?: CSS;
  fallback: string;
  src?: string;
  width?: number;
}

export interface IBadge {
  block?: boolean;
  children?: ReactNode;
  closable?: boolean;
  copy?: string | number | undefined;
  css?: CSS;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: IThemeSpacing | "auto";
  link?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  small?: boolean;
  theme?: "default" | "solid" | "orange" | "purple" | "yellow" | "blue";
}

export interface IBox {
  children: ReactNode;
  closable?: boolean;
  css?: CSS;
  cta?: string;
  expandable?: boolean;
  expandableHeight?: number;
  footer?: ReactNode;
  header?: ReactNode;
  image?: string;
  imageAlt?: ImageProps["alt"];
  imageCTA?: string;
  imageFit?: CSSProperties["objectFit"];
  imageHeight?: string;
  imagePosition?: CSSProperties["objectPosition"];
  imageSizes?: ImageProps["sizes"];
  imageTarget?: "_blank" | "_self";
  loading?: boolean;
  minimal?: boolean;
  small?: boolean;
  theme?: "default" | "fill" | "orange" | "purple" | "yellow" | "blue" | "minimal" | "solid";
}

export interface IButton extends ComponentPropsWithoutRef<"button"> {
  block?: boolean;
  css?: CSS;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: IThemeSpacing | "auto";
  loading?: boolean;
  small?: boolean;
  theme?: "default" | "solid" | "minimal";
}

export interface ICalendar {
  blockedDates?: string[];
  description?: string;
  endDate?: string;
  maxDate?: string;
  maxLength?: number;
  minDate?: string;
  minLength?: number;
  mode?: "range" | "single";
  onSelection: (dates: { endDate: string; startDate: string }) => void;
  onViewChange?: (dates: { endDate: string; startDate: string }) => void;
  startDate?: string;
  viewDate?: string;
}

export interface ICalendarMonths {
  maxDate?: string;
  minDate?: string;
  onSelection: (date: string) => void;
  selectedDate?: string;
  viewDate?: string;
}

export interface ICalendarInline extends ICalendar {
  title: string;
  trigger: ReactNode;
}

export interface ICode {
  children: ReactNode;
  css?: CSS;
}

export interface IDialog {
  children: ReactNode;
  close?: () => void;
  css?: CSS;
  disabled?: boolean;
  forceHeight?: number;
  portal?: boolean;
  small?: boolean;
  title: string;
  trigger?: ReactNode;
  triggerCSS?: CSS;
  wrapperCSS?: CSS;
}

export interface IDivider {
  bottom?: IThemeSpacing;
  css?: CSS;
  top?: IThemeSpacing;
}

export interface IField extends ComponentPropsWithRef<"textarea"> {
  copy?: boolean;
  css?: CSS;
  error?: boolean;
  errorMessage?: string;
  id?: string;
  loading?: boolean;
  name: string;
  reset?: boolean;
  resetFunction?: () => void;
  submit?: string;
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  submitValid?: (value: string) => boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface IForm extends ComponentPropsWithRef<"form"> {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  id?: string;
  listen?: boolean;
  loading?: boolean;
  name: string;
  submit?: string;
  submitFunction: () => void | Promise<void> | unknown;
  submitValid?: boolean;
}

export interface IImage extends ImageProps {
  borderRadius?: keyof typeof theme.radii;
  css?: CSS;
  fill?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillHeight?: string | number;
  fillPosition?: CSSProperties["objectPosition"];
}

export interface IInput extends ComponentPropsWithRef<"input"> {
  copy?: boolean;
  css?: CSS;
  error?: boolean;
  errorMessage?: string;
  id?: string;
  listen?: boolean;
  loading?: boolean;
  mustRef?: RefObject<HTMLInputElement | null>;
  name: string;
  reset?: boolean;
  resetFunction?: () => void;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  submitValid?: (value: string) => boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface ILoading {
  css?: CSS;
  stroke?: string;
  theme?: "default" | "colored";
}

export interface ILoadingOverlay extends ILoading {
  title: string;
}

export interface ILogo {
  color?: keyof typeof theme.colors;
  css?: CSS;
  hover?: boolean;
  outline?: boolean;
  type?: "icon" | "full" | "text";
  width?: number;
}

export interface IMenu {
  children?: ReactNode;
  css?: CSS;
  initial?: string;
  onSelection?: (value: string, label: string) => void;
  options: Array<{
    icon?: ReactNode;
    label: string;
    sub?: Array<{
      icon?: ReactNode;
      label: string;
      value: string;
    }>;
    value: string;
  }>;
  trigger: ReactNode;
}

export interface INodes {
  nodes: Array<{
    name: string;
    theme?: "purple" | "orange" | "yellow" | "blue";
    icon: ReactNode;
  }>;
  parent:
    | {
        name: string;
        icon: ReactNode;
      }
    | ReactNode;
  height?: number;
  type?: "card" | "badge";
}

export interface IPopover {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  minimal?: boolean;
  small?: boolean;
  trigger: ReactNode;
  triggerCSS?: CSS;
  wrapperCSS?: CSS;
}

export interface IProvider {
  children: ReactNode;
  css?: CSS;
  dark?: boolean;
}

export interface ISelect {
  css?: CSS;
  disabled?: boolean;
  filter?: boolean;
  height?: number | string;
  horizontal?: "left" | "right" | "center";
  initial?: string;
  label?: string;
  last?: boolean;
  loading?: boolean;
  onSelection?: (value: string, label: string) => void;
  options: Array<{
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    label: string;
    value: string;
  }>;
  trigger: ReactNode;
  triggerCSS?: CSS;
  vertical?: "top" | "bottom";
  width?: number | string;
  wrapperCSS?: CSS;
}

export interface ISelectMulti extends Omit<ISelect, "onSelection" | "initial" | "last"> {
  initial?: Array<{ label: string; value: string }>;
  limit?: number;
  onSelection?: (value: Array<{ label: string; value: string }>) => void;
  reset?: boolean;
}

export interface IStack {
  align?: CSSProperties["textAlign"];
  as?: keyof JSX.IntrinsicElements;
  bottom?: IThemeSpacing;
  children: ReactNode;
  className?: string;
  collapseduo?: boolean;
  css?: CSS;
  direction?: "row" | "column";
  flex?: CSSProperties["alignItems"];
  flexduo?: boolean;
  id?: string;
  inverted?: boolean;
  minimal?: boolean;
  noPrint?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  top?: IThemeSpacing;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
}

export interface ITable {
  columns: Array<{
    key: string;
    label: string;
    align?: "left" | "center" | "right";
    width?: string;
    sortable?: boolean;
  }>;
  rows: Array<{
    id: string;
    cells: Record<string, ReactNode>;
    subRows?: Array<{
      id: string;
      cells: Record<string, ReactNode>;
    }>;
  }>;
  css?: CSS;
  error?: string;
  loading?: boolean;
  pagination?: boolean;
  kbd?: boolean;
}

export interface IText extends ComponentPropsWithRef<"p"> {
  accent?: boolean;
  as?: keyof typeof TextSizes;
  balanced?: boolean;
  bottom?: IThemeSpacing;
  children: ReactNode;
  css?: CSS;
  highlight?: "red" | "orange" | "purple" | "blue" | "blue" | "default" | "alternate";
  href?: string;
  inline?: IThemeSpacing | "auto";
  link?: "minimal" | "default" | "alternate" | "blog";
  override?: keyof typeof TextSizes;
  rel?: string;
  target?: "_blank" | "_self";
  top?: IThemeSpacing;
}

export interface IUpload<T extends boolean> {
  accept?: string;
  css?: CSS;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  maxFiles?: number;
  maxSize?: number;
  multiple?: T;
  onUpload: T extends true ? (files: FileList) => void : (file: File) => void;
  success?: boolean;
  successMessage?: string;
  width?: number | string;
}

export type IToast = InferToastComponentProps<typeof Toaster>;

export interface IView {
  app?: boolean;
  as?: keyof JSX.IntrinsicElements;
  bottom?: IThemeSpacing;
  children: ReactNode;
  container?: boolean;
  css?: CSS;
  hero?: boolean;
  id?: string;
  inverted?: boolean;
  noPrint?: boolean;
  top?: IThemeSpacing;
}

export interface IPortal {
  children?: ReactNode;
  disabled?: boolean;
}

export interface IIcon {
  children: ReactNode;
  css?: CSS;
  forceColor?: keyof typeof theme.colors;
  forceSize?: number;
  inline?: IThemeSpacing | "auto";
}

export interface ITabs {
  initial?: string;
  onSelection?: (value: string) => void;
  options: Array<{
    icon?: ReactNode;
    label: string;
    value: string;
  }>;
}
