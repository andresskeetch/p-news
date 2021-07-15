import firebase from "firebase/app";

const firestore = firebase.firestore();

const useFlipCards = (gameId) => {
  const gameRef = firestore.collection("game");
  const storyRef = firestore.collection("story");

  const handleflipCards = async (value) => {
    const gameSelected = gameRef.doc(gameId);
    gameSelected.update({
      flip: value,
    });
  };

  const handleAddScoreStory = async (storyId, score) => {
    const storySelected = storyRef.doc(storyId);
    storySelected.update({
      score,
    });
  };

  return {
    handleflipCards,
    handleAddScoreStory,
  };
};

export default useFlipCards;
