function ButtonAdd({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={`px-4 py-2 rounded-sm cursor-pointer flex flex-row items-center justify-center gap-5 h-10
                bg-green-600 hover:bg-green-700 font-['Roboto-Regular'] text-white
                  transition duration-150 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { ButtonAdd };
