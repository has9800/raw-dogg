import { app, db } from "../../lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth(app);

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return;
      break;
    case "POST":
      try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const usr = await response.user;

        await addDoc(collection(db, "users"), {
          uid: usr.uid,
          name,
          authProvider: "local",
          email: usr.email,
        });

        return res.status(200).send({ message: "USER CREATED SUCCESSFULLY! " });
      } catch (error) {
        console.log(error.message);
        return res.status(400).send({ message: "USER NOT CREATED... " });
      }

      break;
  }
}
