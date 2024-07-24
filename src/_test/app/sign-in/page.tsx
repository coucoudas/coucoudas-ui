import { useState } from "react";
import { cn } from "../../../util";
import { Button, CheckBox, Input } from "../../../widget";
import { Action } from "../../../layout";
import { AlertModal } from "../../../modal";
import { useActionStore } from "../../../store";

export default function SignIn() {
  const { setModal } = useActionStore();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const layout = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const container = {
    displays: "flex flex-col gap-y-4",
  };
  return (
    <Action.Show
      actions={[
        [
          "alert",
          <AlertModal
            titles={{ title: "로그인 오류", subtitle: ["어쩌고", "저쩌고"] }}
            button={{
              title: "ㅇㅇ",
              onClick: () => {
                setModal("none");
              },
            }}
          />,
        ],
      ]}
    >
      <div className={cn(layout)}>
        <div className={cn(container)}>
          <Input
            title="아이디(이s메일)"
            state={[username, setUsername]}
            placeholder="아이디를 입력해주세요."
          />
          <Input
            title="비밀번호"
            state={[password, setPassword]}
            isValid={(value) => value.length >= 8}
            notifications={[[(value) => value.length < 8, { title: "ㄴㄴ" }]]}
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <CheckBox title="자동 로그인" state={[autoLogin, setAutoLogin]} />
          <Button
            title="로그인 하기"
            onClick={() => {
              setModal("alert");
            }}
          />
        </div>
      </div>
    </Action.Show>
  );
}
