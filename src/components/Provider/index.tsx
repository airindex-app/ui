import { useEffect, type JSX } from "react";

import { type IProvider } from "../../index";
import { darkTheme } from "../../stitches.config";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  const isDarkMode = Boolean(dark);

  providerReset();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }

    return (): void => {
      document.body.classList.remove(darkTheme);
    };
  }, [isDarkMode]);

  return (
    <ProviderStyled css={css}>
      <ToastController />
      {children}
    </ProviderStyled>
  );
}
