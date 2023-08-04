/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Error Page"
      />
    </div>
  );
};

export default ErrorPage;
