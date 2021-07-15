import { useEffect } from "react";
import firebase from "firebase/app";
import { useUserSession } from "common/hooks";
import { useCollectionData } from "react-firebase-hooks/firestore";
import POKEMON_NAMES from "common/utils/constants/pokemon.json";

const firestore = firebase.firestore();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const getName = (name) => {
  if (name) return name;

  const number = getRandomIntInclusive(0, POKEMON_NAMES.length);

  return POKEMON_NAMES[number];
};
const handleCreateParticipant = async (gameId, user) => {
  await firestore.collection("participant").add({
    game: gameId,
    user: user.uid,
    score: "-",
    userName: getName(user.displayName),
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

const useAddParticipant = () => {
  const { user } = useUserSession();

  return {
    handleCreateParticipant: (gameId) => handleCreateParticipant(gameId, user),
  };
};

export const useAddParticipantValidate = (gameId) => {
  const { user } = useUserSession();

  const query = firestore
    .collection("participant")
    .where("user", "==", user.uid);

  const [participant] = useCollectionData(query);

  useEffect(() => {
    if (participant && participant.length === 0) {
      handleCreateParticipant(gameId, user);
    }
  }, [participant]);

  return {
    participant,
    handleCreateParticipant,
  };
};

export default useAddParticipant;
