"use client";
import React, { useRef } from "react";
import { Button, type ButtonProps } from "primereact/button";
import { Menu } from "primereact/menu";
import { type MenuItem } from "primereact/menuitem";

type OmittedButtonProps = Omit<
  ButtonProps,
  "onClick" | "aria-controls" | "aria-haspopup" | "data-testid"
>;

type ButtonMenuProps = OmittedButtonProps & {
  key: string;
  items: MenuItem[];
};

/**
 * Displays as a button that opens a menu when clicked. The menu items are
 * defined by the `items` prop. Created using PrimeReact button & menu (in popup mode).
 *
 * @link https://primereact.org/menu/#popup
 * @param key - A unique key for the button menu
 * @param items - The menu items to display
 * @param buttonProps - The props to pass to the button (icon, label, etc.)
 * @constructor
 */
export function ButtonMenu({ key, items, ...buttonProps }: ButtonMenuProps) {
  const menu = useRef<Menu>(null);

  return (
    <>
      <Menu
        model={items}
        popup
        ref={menu}
        id={`button_menu_${key}`}
        appendTo="self"
      />
      <Button
        {...buttonProps}
        onClick={(event) => menu.current?.toggle(event)}
        aria-controls={`button_menu_${key}`}
        aria-haspopup
        data-testid="button-menu"
      />
    </>
  );
}
