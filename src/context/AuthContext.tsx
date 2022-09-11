import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  User,
  UserCredential,
  Auth,
} from "firebase/auth";
import { auth } from "core/firebase";

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  googleAuth: () => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<UserCredential>;
  onSignOut: () => Promise<void>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const AuthContextProvider: FunctionComponent<
  PropsWithChildren<Props>
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const providers = {
    GoogleProvider: new GoogleAuthProvider(),
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        const { user } = newUser;
        updateProfile(user, {
          displayName,
        });
        return newUser;
      })
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });

    return newUser;
  };

  const signIn = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleAuth = (): Promise<UserCredential> => {
    return signInWithPopup(auth, providers.GoogleProvider);
  };

  const onSignOut = (): Promise<void> => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ auth, user, signIn, signUp, onSignOut, googleAuth }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
