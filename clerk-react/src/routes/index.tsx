import SignInPage from "./sign-in";
import { Protect } from "@clerk/clerk-react";
import Confetti from "./confetti";

export default function IndexPage() {
  return (
    <div className="flex justify-center">
      <div>
        <ul>
        <Protect>
        <Confetti />
          <h1 className="font-bold text-blue-500 text-[50px]">Hello! Congratulations on your successful login!</h1>
        </Protect>
        <SignInPage />
        </ul>
      </div>
    </div>
  )
}