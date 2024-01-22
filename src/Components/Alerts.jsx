import { FaCircleInfo, FaCircleExclamation, FaCheck } from "react-icons/fa6";
import Button from "./Buttons";

const alertColor = {
  warning: "border-red-500 border-1 bg-red-50",
  theme: "border-purple-500 border-1 bg-white",
  success: "border-green-500 border-1 bg-green-50",
};

const icons = {
  infoCircle: <FaCircleInfo className="text-purple-500" />,
  exclamationCircle: <FaCircleExclamation className="text-red-600" />,
  check: <FaCheck className="text-green-500" />,
};

function Alert({ color, icon }) {
  return (
    <div
      className={`rounded-xl w-96 flex-shrink-0 border shadow-md md:shadow space-y-4 p-8 pt-6 ${icons[icon]} ${alertColor[color]}`}
    >
      <div className="flex gap-2">
        <h1 className="icon text-2xl">{icons[icon]} </h1>
        <h1 className="font-bold">You are alerted!</h1>
      </div>
      <p>Here is some information about this alert. </p>
      <div className="flex justify-end">
        <Button color="primary" size="sm">
          OK
        </Button>
      </div>
    </div>
  );
}

export default Alert;
