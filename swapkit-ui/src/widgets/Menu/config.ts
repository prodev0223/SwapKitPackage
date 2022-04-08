import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    icon: "Swap",
    items: [
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    icon: "Earn",
    items: [
      {
        label: "Earn",
        href: "/earn",
      },
      {
        label: "Yield Farms",
        href: "/farms",
      },
      {
        label: "Syrup pools",
        href: "/pools",
      },
    ],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 80;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
