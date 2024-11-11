"use client";
import * as React from "react";
import { Comment_Box } from "../chat-bubble/comment.chat";
import { Chat_Bubble } from "../chat-bubble/chat-bubble";
import { SignIn_Button } from "../buttons/signin.button";

export function Comment_Content() {
  const [isSignIn, setIsSignIn] = React.useState<boolean>(false);
  return (
    <div className=" dark:bg-gray-700 pt-4 rounded-lg">
      <p className="mb-2 font-bold text-xl dark:text-white">Comments</p>
      <button onClick={() => setIsSignIn(!isSignIn)}></button>
      {isSignIn ? <Comment_Box /> : <SignIn_Button />}

      <Chat_Bubble />
      <Chat_Bubble />
    </div>
  );
}
