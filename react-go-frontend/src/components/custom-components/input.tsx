import { forwardRef } from "react";

interface InputFieldProps {
  name: string;
  title: string;
  type: string;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  errorDiv?: string;
  errorMsg?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <div className="mb-3">
        <label htmlFor={props.name} className="form-label">
          {props.title}
        </label>
        <input
          ref={ref}
          type={props.type}
          name={props.name}
          id={props.name}
          className={props.className}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          value={props.value}
        />
        <div className={props.errorDiv}>{props.errorMsg}</div>
      </div>
    );
  }
);

export default InputField;
