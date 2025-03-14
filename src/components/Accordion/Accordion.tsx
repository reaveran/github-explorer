import { PropsWithChildren } from "react";

import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";

import Typography from "../Typography/Typography";

type AccordionProps = PropsWithChildren & {
  id: string;
  title: string;
};

const Accordion: React.FC<AccordionProps> = ({ children, id, title }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-2 overflow-hidden group">
      <input type="checkbox" id={id} className="hidden" />
      <label
        htmlFor={id}
        className="flex cursor-pointer p-3 font-medium bg-gray-200 justify-between items-center"
      >
        <Typography>{title}</Typography>
        <div className="flex transform transition-all duration-200 group-[:has(:checked)]:rotate-180">
          <ChevronDownIcon fontSize={22} />
        </div>
      </label>
      <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-[:has(:checked)]:visible group-[:has(:checked)]:max-h-screen group-[:has(:checked)]:opacity-100 group-[:has(:checked)]:duration-500">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
