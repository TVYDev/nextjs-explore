import { useRouter } from "next/router";

import { IUser } from "@/types/auth";

const setSession = async (data: IUser) =>
  await fetch("/api/session/store", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    /** At here, we call to api login at your backend,
     * and the api could respond some info about the user upon success
     * so then we could set the data to session
     * */

    const user: IUser = {
      id: 23,
      username: "tvy",
      fullName: "tvydev",
      avatarUrl: "some_url.com",
    };

    await setSession(user);

    router.replace("/");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default LoginPage;
