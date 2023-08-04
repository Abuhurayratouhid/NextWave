import { useRouter } from "next/router";
import React from "react";

const InfoId = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Info for:{router.query.infoId}</h1>
    </div>
  );
};

export default InfoId;
