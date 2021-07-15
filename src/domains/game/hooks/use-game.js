import firebase from "firebase/app";
import {
  useDocumentData,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const useGame = (gameId) => {
  const gameRef = firestore.collection("game");
  const query = gameRef.doc(gameId);
  const [game, isLoading] = useDocumentData(query, {
    idField: "id",
    refField: "ref",
  });
  return {
    game,
    isLoading,
  };
};

export default useGame;
