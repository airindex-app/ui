import type { JSX } from "react";

import { MoonIcon, SunIcon, MonitorIcon } from "../../../icons";
import { useMountSSR, Select, Button, useTheme, Icon, type ISelect } from "../../../index";

export default function ProviderToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();
  const isMounted = useMountSSR();

  const options = [
    { icon: <Icon phosphor={<MoonIcon />} />, iconPosition: "right", label: "Dark", value: "dark" },
    {
      icon: <Icon phosphor={<SunIcon />} />,
      iconPosition: "right",
      label: "Light",
      value: "light",
    },
    {
      icon: <Icon phosphor={<MonitorIcon />} />,
      iconPosition: "right",
      label: "System",
      value: "system",
    },
  ] as ISelect["options"];

  const currentTheme = isMounted ? theme : "system";
  const currentThemeOption = options.find((option) => option.value === currentTheme);
  const currentThemeIcon = currentThemeOption?.icon;
  const isCurrentTheme = (value: string): boolean => value === currentTheme;

  const handleSelection = (value: string): void => {
    if (isCurrentTheme(value)) {
      return;
    }
    setTheme(value as "dark" | "light" | "system");
  };

  const renderTrigger = (): JSX.Element => (
    <Button
      css={{
        textTransform: "capitalize",
      }}
      small>
      {currentThemeIcon}
    </Button>
  );

  return (
    <Select
      initial={currentTheme}
      options={options}
      trigger={renderTrigger()}
      onSelection={handleSelection}
    />
  );
}
