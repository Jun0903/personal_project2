import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";

export const lightTheme = {
  textColor: "#2B2B2D",
  subTextColor: "#7F7F84",
  bgColor: "rgba(225,255,255,0.7)",
  toggle: {
    bgColor: "rgba(225,225,255,1)",
    border: "none",
  },
  searchInput: {
    bgColor: "rgba(225,255,255,0.7)",
    arrow: IoIosArrowDropdownCircle,
  },
  noteInput: {
    bgColor: "rgba(225,225,255,1)",
  },
};

export const darkTheme = {
  textColor: "#ffffff",
  subTextColor: "#ADADAD",
  bgColor: "rgba(0,0,0,0.75)",
  toggle: {
    bgColor: "rgba(98,91,92,1)",
  },
  searchInput: {
    bgColor: "rgba(255,255,255,0.3)",
    arrow: IoIosArrowDropdown,
  },
  noteInput: {
    bgColor: "rgba(37,37,37,1)",
  },
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
