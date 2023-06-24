import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ISession } from "./api/session";

const getSession = async () => await fetch("/api/session");

const destroySession = async () =>
  await fetch("/api/session/destroy", { method: "POST" });

const HomePage = () => {
  const router = useRouter();
  const [session, setSession] = useState<ISession>();

  const handleLogout = async () => {
    await destroySession();
    router.replace("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      const sessionRes = await getSession();
      const session = await sessionRes.json();
      setSession(session);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(session)}</pre>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default HomePage;
