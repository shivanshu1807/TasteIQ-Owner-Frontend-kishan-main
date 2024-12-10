"use client";

import { LoginForm } from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/dashboard");
  // };
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {isSignup ? <Signup /> : <LoginForm />}
      <Button onClick={() => setIsSignup(!isSignup)} variant="link">
        {isSignup
          ? "Already have a Account , Login ?"
          : "Don't have an account ? Sign Up !"}
      </Button>
    </div>
  );
}
