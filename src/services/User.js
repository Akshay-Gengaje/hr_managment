import { app , create} from "../firebase";
import { getAuth } from "../firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);
const auth = getAuth(app);

export const signupUser = () => {
  create
};

export const addUser = () => {
  set(ref(db, "/users"), {
    id: 1,
    name: "admin",
    role: "admin",
  });
};
