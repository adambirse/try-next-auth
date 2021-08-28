import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";

import { Layout } from "../components/layout";

export default function ProtectedPage() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading)
    return (
      <Layout>
        <span>loading...</span>
      </Layout>
    );

  if (!session) {
    return (
      <Layout>
        <h1>DENIED</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Protected</h1>
        {content}
      </Layout>
    );
  }
}
