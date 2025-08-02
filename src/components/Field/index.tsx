import { ChangeEvent, KeyboardEvent, useCallback, useState, type JSX } from "react";
import toast from "react-hot-toast";

import {
  ClipboardIcon,
  CrossCircledIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "../../icons";
import { Badge, Button, Loading, useBreakpoints, Icon, type IField } from "../../index";
import {
  FieldStyled,
  FieldAreaStyled,
  FieldFunctionStyled,
  FieldCallbackStyled,
  FieldCoreStyled,
} from "./styles";

export default function Field({
  cols,
  copy,
  css,
  disabled,
  error,
  errorMessage,
  id,
  listen,
  loading,
  name,
  onChange,
  placeholder,
  reset,
  resetFunction,
  rows,
  submit,
  submitFunction,
  submitValid,
  success,
  successMessage,
  value,
  warning,
  warningMessage,
  width,
}: IField): JSX.Element {
  const { isPhone } = useBreakpoints();
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitDisabled = !submitValid || !submitValid(inputValue) || isSubmitted || disabled;
  const isSubmitValid = submitValid && submitValid(inputValue);
  const hasFunctions = loading || submit || copy || reset;
  const hasCallback = error || success || warning;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setInputValue(event.target.value);
      setIsSubmitted(false);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange],
  );

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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>): void => {
      if (listen && event.key === "Enter" && submitFunction && isSubmitValid) {
        event.preventDefault();
        handleSubmit();
      }
    },
    [listen, submitFunction, isSubmitValid, handleSubmit],
  );

  return (
    <FieldStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
        ...css,
      }}
      disabled={disabled}>
      <FieldCoreStyled>
        <FieldAreaStyled
          cols={cols}
          disabled={disabled}
          id={id || name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {hasFunctions && (
          <FieldFunctionStyled>
            {loading && <Loading />}

            {copy && (
              <Button
                disabled={isCopied || disabled}
                icon={<Icon radix={<ClipboardIcon />} />}
                small
                onClick={() => handleCopy()}>
                {!isPhone ? "Copy" : undefined}
              </Button>
            )}

            {reset && inputValue && (
              <Button
                disabled={disabled}
                icon={<Icon radix={<CrossCircledIcon />} />}
                small
                onClick={() => handleReset()}
              />
            )}

            {submit && (
              <Button
                disabled={isSubmitDisabled}
                icon={<Icon radix={<ArrowRightIcon />} />}
                iconPosition="right"
                small
                theme={isSubmitValid ? "solid" : "default"}
                type="submit"
                onClick={() => handleSubmit()}>
                {!isPhone ? submit : undefined}
              </Button>
            )}
          </FieldFunctionStyled>
        )}
      </FieldCoreStyled>

      {hasCallback && (
        <FieldCallbackStyled>
          {error && (
            <Badge icon={<Icon radix={<ExclamationTriangleIcon />} />} theme="yellow">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Icon radix={<CheckCircledIcon />} />} theme="yellow">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Icon radix={<ExclamationTriangleIcon />} />} theme="yellow">
              {warningMessage || "Warning"}
            </Badge>
          )}
        </FieldCallbackStyled>
      )}
    </FieldStyled>
  );
}
