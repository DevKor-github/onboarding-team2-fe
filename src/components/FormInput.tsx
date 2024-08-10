interface FormInputProps {
  id: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required: boolean;
}

function FormInput({ id, label, onChange, type, required }: FormInputProps) {
  return (
    <div className="form-input">
      <input id={id} onChange={onChange} type={type} required={required} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default FormInput;
