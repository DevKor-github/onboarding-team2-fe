import { FieldError } from 'react-hook-form';
import './formInput.css';

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
    </div>
  );
}

export default FormInput;
