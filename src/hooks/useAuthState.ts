import { Auth, User } from "firebase/auth";
import { useAuthState as fbhUseAuthState } from "react-firebase-hooks/auth";
import { auth } from "core/firebase";

type Props = {
  auth?: Auth;
  options?: {
    onUserChanged?: (user: User | null) => Promise<void>;
  };
};

const useAuthState = ({ options }: Props = {}) =>
  fbhUseAuthState(auth, options);

export default useAuthState;

// Usecase to get userData: const [user, loading, error] = useAuthState();
