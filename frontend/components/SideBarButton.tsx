import { IconType } from "react-icons/lib";
import { Button } from "./ui/button";

interface ISideBar{
    label : string,
    Icon : IconType,
    color : string,
    isSpecial : boolean
}

export default function SideBarButton({label,Icon,color,isSpecial} :  ISideBar) {
  return (
    <Button
      variant={"ghost"}
      className="w-full py-2   hover:bg-[#151515] hover:text-white cursor-pointer flex items-start justify-start "
    >
      <Icon
        className={`mr-2`}
        style={{
          color: color,
        }}
      />
      {label}
    </Button>
  );
}
