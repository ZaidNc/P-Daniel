import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = (props) => {
  return <textarea {...props} className="mt-1 block w-full rounded-md" />;
};

export default Textarea;
