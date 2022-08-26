import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/patterns");
  }, []);

  return null;
}
