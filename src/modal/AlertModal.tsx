import { ButtonWidgetProps } from "../interface";
import { ModalProps } from "../interface/Modal";
import { Button } from "../widget";
import ModalDesign from "./design/Modal.design";

interface AlertModalProps extends Omit<ModalProps, "children"> {
  button: ButtonWidgetProps;
}

export default function AlertModal(props: AlertModalProps) {
  return (
    <ModalDesign
      {...props}
      option={{
        width: "w-[448px]",
        height: "h-[196px]",
      }}
    >
      <div className="absolute bottom-0 left-0 px-6 pb-4 w-full">
        <Button
          {...props.button}
          option={{
            width: "w-full",
          }}
        />
      </div>
    </ModalDesign>
  );
}
