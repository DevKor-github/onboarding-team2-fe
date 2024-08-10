interface FormInputProps {
  id: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required: boolean;
}

function FormInput({
  id,
  placeholder,
  onChange,
  type,
  required,
}: FormInputProps) {
  return (
    <input
      className="form-input"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      required={required}
    />
  );
}

export default FormInput;
