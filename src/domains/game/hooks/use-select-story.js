import firebase from "firebase/app";
import useParticipantScore from "./use-participant-score";

const firestore = firebase.firestore();

const useSelectStory = (gameId) => {
  const gameRef = firestore.collection("game");
  const { handleResetAllParticipantScore } = useParticipantScore();
  const handleUpdateGame = async (storyId) => {
    handleResetAllParticipantScore(gameId);
    const gameSelected = gameRef.doc(gameId);
    gameSelected.update({
      story: storyId,
      flip: false,
    });
  };

  return {
    handleUpdateGameStory: handleUpdateGame,
  };
};

export default useSelectStory;
