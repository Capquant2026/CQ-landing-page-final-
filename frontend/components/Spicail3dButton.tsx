import { IconType } from "react-icons/lib";
import { Button } from "./ui/button";
import SideBarButton from "./SideBarButton";
import { MotionDiv } from "./motion-wrapper";

interface ISideBar {
  label: string;
  Icon: IconType;
  color: string;
}

export default function Spicail3dButton({ label, Icon, color }: ISideBar) {
  return (
    <MotionDiv
      className="w-full rounded-lg cursor-pointer"
        whileHover={{
                  z: 2,
                  y: -6,
                  scale: 1.02,
                }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: "translateZ(0)",
      }}
    >
      <MotionDiv
        whileHover={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(94, 106, 210, 0.5), 0 0 40px rgba(94, 106, 210, 0.3)",
        }}
        className="rounded-lg "
      >
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
      </MotionDiv>
    </MotionDiv>
  );
}
