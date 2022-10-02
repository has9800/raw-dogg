import { app, db } from "../../lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

const auth = getAuth(app);

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();

        return res.status(200).json(data);
      } catch (error) {
        return res.status(400).send({ message: "FETCHING USER FAILED!" });
      }
    case "POST":
      try {
        const name = req.body.username;
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
          displayName: name,
          authProvider: "local",
          email,
        });

        return res.status(200).send({ message: "USER CREATED SUCCESSFULLY! " });
      } catch (error) {
        console.log(error.message);
        return res.status(400).send({ message: "USER NOT CREATED... " });
      }
  }
}
