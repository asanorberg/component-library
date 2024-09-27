const buttonColor = {
  primary:
    "whitespace-nowrap bg-purple-500 text-white enabled:hover:bg-purple-600 enabled:active:bg-purple-700 disabled:opacity-50",
  secondary:
    "whitespace-nowrap bg-white border border-purple-500 text-purple-500 enabled:hover:bg-purple-50 enabled:active:bg-purple-100 disabled:opacity-50",
  textbutton:
    "whitespace-nowrap text-purple-500 enabled:hover:text-purple-700 enabled:active:text-purple-400 disabled:opacity-50",
};

const sizes = {
  xs: "text-xs px-2 py-1 h-6 min-w-18",
  sm: "text-sm px-3 py-2 h-7",
  md: "text-base px-4 py-4 h-8",
  lg: "text-lg px-6 py-5 h-9",
  xl: "text-xl px-6 py-6 h-10",
};

const Button = ({ size, color, children, disabled }) => {
  return (
    <button
      className={`rounded-lg flex flex-col justify-center items-center max-w-fit ${sizes[size]} ${buttonColor[color]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
