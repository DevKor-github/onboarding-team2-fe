import { FieldError } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required?: boolean;
  register?: any;
  errors?: FieldError;
}

function FormInput({
  id,
  label,
  onChange,
  type,
  required,
  register,
  errors,
}: FormInputProps) {
  return (
    <div className="form-input">
      <input
        id={id}
        onChange={onChange}
        type={type}
        required={required}
        {...register}
      />
      <label htmlFor={id}>{label}</label>
      {errors && <p>{errors.message}</p>}
    </div>
  );
}

export default FormInput;
