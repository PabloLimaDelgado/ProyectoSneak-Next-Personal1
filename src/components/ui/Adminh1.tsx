import React from "react";

function Adminh1({
  className,
  children,
  liActivo,
  path,
  ...props
}: React.ComponentProps<"h1"> & { liActivo: string; path: string }) {
  const isActive = liActivo === path;

  return (
    <h1
      data-slot="h1"
      className={`${
        isActive ? "text-blue-900" : "text-[color:var(--color-gray-50)]"
      } flex flex-row gap-1 items-center justify-start
                  m-1 p-1 ml-5 text-xl font-['Roboto-Regular']
                  hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export { Adminh1 };
