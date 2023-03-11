import React from "react";

interface Inputdetails {
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
}

interface FormProps {
  inputs: Inputdetails[];
}

function Form(props: FormProps) {
  const { inputs } = props;
  return (
    <form>
      {inputs.map((input) => (
        <input name={input.name} />
      ))}
    </form>
  );
}

export default Form;
