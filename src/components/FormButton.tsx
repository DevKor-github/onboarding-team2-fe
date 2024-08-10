interface FormButtonProps {
  text: string;
}

function FormButton({ text }: FormButtonProps) {
  return (
    <button className="form-button" type="submit">
      {text}
    </button>
  );
}

export default FormButton;
