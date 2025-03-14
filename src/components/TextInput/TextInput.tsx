import { forwardRef, InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400 block w-full p-2.5 transition-all duration-300"
        {...props}
      />
    </div>
  );
});

export default TextInput;
