import { ChangeEvent, useState, type JSX } from "react";
import toast from "react-hot-toast";

import {
  Badge,
  Button,
  Loading,
  useEventListener,
  useBreakpoints,
  Icon,
  type IInput,
} from "../../index";
import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
} from "./styles";

export default function Input({
  copy,
  css,
  disabled,
  error,
  errorMessage,
  id,
  listen,
  loading,
  mustRef,
  name,
  onChange,
  placeholder,
  reset,
  resetFunction,
  reveal,
  submit,
  submitFunction,
  submitValid,
  success,
  successMessage,
  type,
  value,
  warning,
  warningMessage,
  width,
}: IInput): JSX.Element {
  const { isPhone } = useBreakpoints();
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitDisabled = !submitValid || !submitValid(inputValue) || isSubmitted || disabled;
  const isSubmitValid = submitValid && submitValid(inputValue);
  const hasFunctions = loading || submit || copy || reveal || reset;
  const hasCallback = error || success || warning;

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    setIsSubmitted(false);
    if (onChange) {
      onChange(event);
    }
  }

  function handleCopy(): void {
    if (copy && inputValue) {
      navigator?.clipboard?.writeText(inputValue.toString());
      setIsCopied(true);
      toast("Copied to clipboard");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } else {
      toast("Nothing to copy");
    }
  }

  function handleReveal(): void {
    setIsRevealed(!isRevealed);
  }

  function handleReset(): void {
    setInputValue("");
    if (resetFunction) {
      resetFunction();
    }
  }

  function handleSubmit(): void {
    if (submitFunction && isSubmitValid) {
      submitFunction(inputValue || "");
      setIsSubmitted(true);
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submitFunction && isSubmitValid) {
      handleSubmit();
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
        ...css,
      }}
      disabled={disabled}>
      <InputCoreStyled>
        <InputAreaStyled
          ref={mustRef || undefined}
          disabled={disabled}
          id={id || name}
          name={name}
          placeholder={placeholder}
          type={isRevealed ? "text" : type || "text"}
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />

        {hasFunctions && (
          <InputFunctionStyled>
            {loading && <Loading />}

            {copy && (
              <Button
                disabled={isCopied || disabled}
                icon={<Icon system="ClipboardTextIcon" />}
                small
                onClick={() => handleCopy()}>
                {!isPhone ? "Copy" : undefined}
              </Button>
            )}

            {reveal && (
              <Button
                disabled={disabled}
                icon={!isRevealed ? <Icon system="EyeIcon" /> : <Icon system="EyeClosedIcon" />}
                small
                onClick={() => handleReveal()}>
                {!isPhone ? (!isRevealed ? "Reveal" : "Hide") : undefined}
              </Button>
            )}

            {reset && inputValue && (
              <Button
                disabled={disabled}
                icon={<Icon system="XCircleIcon" />}
                small
                onClick={() => handleReset()}
              />
            )}

            {submit && (
              <Button
                disabled={isSubmitDisabled}
                icon={<Icon system="ArrowRightIcon" />}
                iconPosition="right"
                small
                theme={isSubmitValid ? "solid" : "default"}
                type="submit"
                onClick={() => handleSubmit()}>
                {!isPhone ? submit : undefined}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>

      {hasCallback && (
        <InputCallbackStyled>
          {error && (
            <Badge icon={<Icon system="WarningCircleIcon" />} theme="yellow">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Icon system="CheckCircleIcon" />} theme="yellow">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Icon system="WarningCircleIcon" />} theme="yellow">
              {warningMessage || "Warning"}
            </Badge>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
