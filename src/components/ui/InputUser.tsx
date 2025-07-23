import React from "react";

function InputUser({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`w-full lg:w-[18rem] font-['Roboto-Regular'] border-2 border-gray-500 px-3 py-2 rounded
                  focus:outline-none focus:border-black focus:border-2 focus:shadow-md
                  placeholder:font-['Roboto-Regular'] placeholder:text-gray-500 placeholder:italic ${className}`}
      {...props}
    />
  );
}

export { InputUser };
