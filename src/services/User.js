import { app } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";

// database instance
const db = getDatabase(app);
// Authentication instance
const auth = getAuth(app);

// create user and post their data to db
export const signupUser = async (values) => {
  try {
    const { email, password } = values;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const userId = res.user.uid;
    addUserDetails(userId, values);
    return { message: "User Created" };
  } catch (error) {
    throw new Error(error.message);
  }
};

// add details of user to db
export const addUserDetails = (userId, values) => {
  const { firstName, middleName, lastName, employeeId, email, role } = values;
  set(ref(db, `/users/${userId}`), {
    firstName,
    middleName,
    lastName,
    employeeId,
    email,
    role,
  });
};

// login the user with given credentials
export const signinUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const role = await getUserRole(res.user.uid);
    localStorage.setItem("uid", `${res.user.uid}`);
    return { success: true, message: "Authentication successful", role };
  } catch (error) {
    throw new Error(error.message);
  }
};

// to check the role of user
export const getUserRole = async (userId) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    const value = await get(userRef);
    return value.val().role;
  } catch (error) {
    throw new Error("Failed to get user role");
  }
};

// to get user details through uid
export const getUserProfile = async (userId) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    const value = await get(userRef);
    return value.val();
  } catch (error) {
    throw new Error("Failed to get user profile");
  }
};
