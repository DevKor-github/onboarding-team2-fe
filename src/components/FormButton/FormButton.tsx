import './formButton.css';

interface FormButtonProps {
  text: string;
  isDark: boolean;
}

function FormButton({ text, isDark = true }: FormButtonProps) {
  const style = isDark ? 'form-button-dark' : 'form-button-light';

  return (
    <button className={`form-button shadow-bottom ${style}`} type="submit">
      {text}
    </button>
  );
}

export default FormButton;
