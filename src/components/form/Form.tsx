import React from "react";

interface FormProps {
  input_name: string[];
}

function Form(props: FormProps) {
  const { input_name } = props;
  return (
    <form>
      {input_name.map((input) => (
        <input name={input} />
      ))}
    </form>
  );
}

export default Form;
