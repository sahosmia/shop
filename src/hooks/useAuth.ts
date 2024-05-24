import { useSelector } from "react-redux";
import { AuthReduxType } from "../types";

const useAuth = () => {
  const auth = useSelector((state: { auth: AuthReduxType }) => state.auth);
  return auth;
};

export default useAuth;
