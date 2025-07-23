import React from "react";
import { SearchIcon } from "@/public/icons/Icons"; // si lo tenés así

function Search({
  className,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      className="flex flex-row items-center justify-start border-1 border-[color:var(--color-gray-30)] rounded h-10
               focus-within:border-black focus-within:border-1 focus-within:shadow-md gap-3 px-2"
    >
      <SearchIcon className="text-[color:var(--color-gray-40)] size-4" strokeWidth={2}/>
      <input
        placeholder={placeholder}
        type="text"
        data-slot="input"
        className={`font-['Roboto-Regular'] placeholder:font-['Roboto-Regular'] placeholder:[color:var(--color-gray-40)] focus:outline-0 ${className}`}
        {...props}
      />
    </div>
  );
}

export { Search };
