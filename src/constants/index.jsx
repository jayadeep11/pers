import { SiNeovim } from "react-icons/si";
import { VscTerminal, VscTerminalTmux } from "react-icons/vsc";
import { SiArchlinux } from "react-icons/si";
export const data = [
  { "id": "0", "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "id": "1", "heading": "Some-thing", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "id": "2", "heading": "Nothing_over_here", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "id": "3", "heading": "idk", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
]

export const quick_links = [
  {
    "title": "Notes",
    "href": "/",
  },
  {
    "title": "Work",
    "href": "/work",
  },
  {
    "title": "Projects",
    "href": "/project",
  },
  {
    "title": "About",
    "href": "/about",
  },

]
export const socials = [
  {
    "title": "Github",
    "href": "https://github.com/jayadeep11",
  },
  {
    "title": "LinkedIn",
    "href": "https://github.com/jayadeep11",
  },
  {
    "title": "Medium",
    "href": "https://github.com/jayadeep11",
  },
  {
    "title": "Youtube",
    "href": "https://github.com/jayadeep11",
  },

];

export const Programs = [
  {
    name: "Hyprland",
    icon: <SiArchlinux />,
    description:
      "Hyprland is my window manager, or basically “how I make my desktop look cool”. For my workflow, a tiling window manager is essential once you get over the learning curve. Hyprland uses Wayland and also has some nice animations",
  },
  {
    name: "Neovim",
    icon: <SiNeovim />,
    description:
      "I use neovim for all of my writing. vim notoriously has a steep learning curve, but as with most things, I think the payoff is worth it.",
  },
  {
    name: "Kitty",
    icon: <VscTerminal />,
    description:
      "I currently use kitty for my terminal due to its support for images in Wayland. It’s very customizable but still very fast. For my shell, I use zsh with a few plugins for niceties like syntax highlighting and auto-complete.",
  },
  {
    name: "Tmux",
    icon: <VscTerminalTmux />,
    description:
      "Tmux is a terminal multiplexer; it allows you to create several pseudo terminals from a single terminal. This is very useful for running multiple programs with a single connection, such as when you're remotely connecting to a machine using Secure Shell (SSH).",
  },
];
