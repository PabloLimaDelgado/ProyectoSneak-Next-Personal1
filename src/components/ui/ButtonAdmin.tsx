function ButtonAdmin({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={`px-4 py-2 rounded-sm cursor-pointer flex flex-row items-center justify-center gap-5 h-10
                border-1 border-[color:var(--color-gray-30)] hover:bg-[color:var(--color-gray-20)] font-['Roboto-Regular'] text-black
                  transition duration-150 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { ButtonAdmin };
