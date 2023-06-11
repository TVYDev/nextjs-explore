import useStoreAuth from "@/modules/auth/useStoreAuth";
import { login, logout } from "@/modules/auth/actions";

const HomePage = () => {
  const { username } = useStoreAuth();

  return (
    <main>
      <div>Logged in user: {username || "N/A"}</div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </main>
  );
};

export default HomePage;
