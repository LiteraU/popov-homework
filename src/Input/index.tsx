import {ErrorMessage, InputComponent, Wrapper} from "./index.styles";
import {ChangeEventHandler} from "react";

export interface IInputProps {
    type?: string;
    name?: string;
    value?: string;
    error?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler;
    onBlur?: (event: any) => void;
}

export function Input({type,
  onChange,
  value,
  error,
  placeholder,
  name,
  onBlur,}: IInputProps) {
    return (
        <Wrapper hasError={Boolean(error)}>
            <InputComponent
                onBlur={onBlur}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
    );
}