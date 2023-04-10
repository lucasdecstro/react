import { DefaultTheme } from "./../../../02-ignite-timer/src/@types/styled.d";
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
