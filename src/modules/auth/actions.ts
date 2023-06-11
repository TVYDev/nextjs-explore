import useStoreAuth from "./useStoreAuth";

export const login = () => useStoreAuth.setState(() => ({ username: "TVY" }));

export const logout = () =>
  useStoreAuth.setState(() => ({ username: undefined }));
