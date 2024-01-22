import { FaCheck, FaRegClock, FaRegFaceFrown, FaEye } from "react-icons/fa6";

const badgeColor = {
  theme: "bg-purple-100 text-purple-600",
  dark: "bg-purple-700 text-purple-100",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
};

const badgeIcons = {
  check: <FaCheck />,
  clock: <FaRegClock />,
  fail: <FaRegFaceFrown />,
  eye: <FaEye />,
  none: "",
};

function Badge({ color, icon, children }) {
  return (
    <div
      className={`flex h-fit max-w-fit items-center gap-1 px-3  text-xs rounded-xl py-1  ${badgeIcons[icon]} ${badgeColor[color]}`}
    >
      <div className="flex items-center whitespace-nowrap">
        {icon !== "none" && (
          <h1 className="icon text-sm mr-2">{badgeIcons[icon]}</h1>
        )}{" "}
        {children}
      </div>
    </div>
  );
}

export default Badge;
