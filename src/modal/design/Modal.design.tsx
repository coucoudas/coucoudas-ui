import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ModalProps } from "../../interface/Modal";
import { cn } from "../../util";
import { useActionStore } from "../../store";
import { useTransition, animated } from "react-spring";
import { LineBreaks } from "../../text";
import SVG from "../../asset/SVG";

export default function ModalDesign({
  titles,
  showAction,
  children,
  option,
}: ModalProps) {
  const { isVisible, event } = showAction ?? {};
  const { position, width, height, noClose, noBackground, isShadow } =
    option ?? {};
  const [detection, setDetection] = useState<Element | null>(null);
  const { setIsOwn, removeModal } = useActionStore();
  useEffect(() => {
    setDetection(document.getElementById("portal"));
  }, []);
  const background = {
    positions: "z-50 fixed top-0 left-0",
    displays: !position && "flex items-center justify-center ",
    sizes: "min-h-screen w-full ",
    styles: !noBackground && "bg-black/10 backdrop-blur-sm ",
  };
  const container = {
    positions: position,
    sizes: `${height} ${width}`,
    styles: "rounded-xl bg-white relative overflow-hidden",
    shadows: isShadow && "box-shadow",
  };
  const titleBox = {
    positions: "relative",
    sizes: "w-full h-[60px]",
    displays: "flex flex-col justify-center",
    boundaries: "pl-6",
    fonts: "font-bold",
  };

  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  return (
    detection &&
    createPortal(
      transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className={cn(background)}
              onClick={() => setIsOwn(true)}
            >
              <div className={cn(container)}>
                <div className={cn(titleBox)}>
                  {titles.title}
                  {event && (
                    <SVG.Close
                      onClick={() => removeModal(event)}
                      className="absolute top-2 right-3"
                    />
                  )}
                </div>
                <LineBreaks
                  texts={titles.subtitle}
                  className="px-6 pt-2 text-base text-gray-500 leading-none"
                />
                {children}
              </div>
            </animated.div>
          )
      ),
      document.body
    )
  );
}
