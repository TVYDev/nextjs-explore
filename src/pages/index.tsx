import useStoreAuth from "@/modules/auth/useStoreAuth";
import { login, logout } from "@/modules/auth/actions";

import useStore from "@/utils/useStore";

const HomePage = () => {
  const username = useStore(useStoreAuth, ({ username }) => username);

  return (
    <main>
      <div>Logged in user: {username || "N/A"}</div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </main>
  );
};

export default HomePage;
