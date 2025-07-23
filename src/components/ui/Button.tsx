function Button({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={`bg-black text-white font-['Bebas_Neue'] text-xl py-0.5 px-1 rounded-full border-2 border-transparent
                   hover:cursor-pointer
                   hover:focus:bg-[var(--color-gray-50)] hover:focus:border-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
