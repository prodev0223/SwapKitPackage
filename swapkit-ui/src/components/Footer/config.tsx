import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me",
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

export const footerLinks: FooterLinkType[] = [

];