import { type JSX } from "react";

import { type IProvider } from "../../index";
import { darkTheme } from "../../stitches.config";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  const isDarkMode = Boolean(dark);

  providerReset();

  return (
    <ProviderStyled className={isDarkMode ? darkTheme : ""} css={css}>
      <ToastController />
      {children}
    </ProviderStyled>
  );
}
