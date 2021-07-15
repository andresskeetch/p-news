import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const useGame = (gameId) => {
  const gameRef = firestore.collection("game");
  const query = gameRef.doc(gameId);
  const [game] = useDocumentData(query, { idField: "id" });

  return {
    game,
  };
};

export default useGame;
