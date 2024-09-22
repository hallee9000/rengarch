"use client"
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { createTokenCookie } from "@/lib/actions";

export default function SignIn () {
  const [githubAccessToken, setGithubAccessToken] = useState('')

  async function handleLogin() {
    if (!githubAccessToken) {
      alert('请输入暗号')
      return
    }
    const createToken = createTokenCookie.bind(null, githubAccessToken)
    await createToken()
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <h1 className="text-2xl font-bold mt-8 text-center">
          Rengarch
        </h1>
        <Input placeholder="暗号" value={githubAccessToken} onValueChange={setGithubAccessToken}></Input>
        <Button color="primary" onClick={handleLogin}>登录</Button>
      </div>
    </div>
  )
}
