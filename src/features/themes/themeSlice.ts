import { themes } from "../../data/themes";

const initialThemeState: ThemeState = {
  name: "",
  colors: [""],
};

interface ThemeState {
  name: string;
  colors: string[];
}

type ThemeAction = {
  type: "themes/updateTheme";
  payload: {
    name: string;
  };
};

export default function themesReducer(
  state: ThemeState = initialThemeState,
  action: ThemeAction
): ThemeState {
  switch (action.type) {
    case "themes/updateTheme":
      //   console.log(themes.filter((theme) => theme.name === action.payload.name));
      return {
        ...state,
        name: action.payload.name,
        colors: themes.filter((theme) => theme.name === action.payload.name)[0]
          .colors,
      };
    default:
      return state;
  }
}

function updateTheme(name: string) {
  const action: ThemeAction = {
    type: "themes/updateTheme",
    payload: { name },
  };
  return action;
}

export { updateTheme };
