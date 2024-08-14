import './formButton.css';

interface FormButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isDark: boolean;
  onClick?(): void;
}

function FormButton({ text, type, isDark, onClick }: FormButtonProps) {
  const style = isDark ? 'form-button-dark' : 'form-button-light';

  return (
    <button
      className={`form-button shadow-bottom ${style}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default FormButton;
