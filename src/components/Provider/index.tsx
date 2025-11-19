import { type JSX } from "react";

import { type IProvider, StoopProvider } from "../../index";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

// Call global CSS BEFORE the component definition (before React renders)
providerReset();

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  const themeName = dark ? "dark" : "light";

  if (!StoopProvider) {
    throw new Error(
      "Provider is not available. Make sure themes config is provided to createStoop.",
    );
  }

  return (
    <StoopProvider attribute="data-theme" defaultTheme={themeName} storageKey="airindex-ui-theme">
      <ProviderStyled css={css}>
        <ToastController />
        {children}
      </ProviderStyled>
    </StoopProvider>
  );
}
