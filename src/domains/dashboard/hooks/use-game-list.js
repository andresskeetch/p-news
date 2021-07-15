import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useUserSession } from "common/hooks";
const firestore = firebase.firestore();

const useCreateGame = () => {
  const { user } = useUserSession();
  const gameRef = firestore.collection("game");
  const query = gameRef.where("user", "==", user.uid);

  const [games] = useCollectionData(query, { idField: "id" });
  return {
    games,
  };
};

export default useCreateGame;
