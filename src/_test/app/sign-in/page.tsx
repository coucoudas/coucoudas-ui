import { useState } from "react";
import { cn } from "../../../util";
import { Button, Input } from "../../../widget";

export default function SignIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const layout = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const container = {
    displays: "flex flex-col gap-y-4",
  };
  return (
    <div className={cn(layout)}>
      <div className={cn(container)}>
        <Input
          title="아이디(이메일)"
          state={[username, setUsername]}
          placeholder="아이디를 입력해주세요."
        />
        <Input
          title="비밀번호"
          state={[password, setPassword]}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button title="로그인 하기" onClick={() => {}} />
      </div>
    </div>
  );
}
