import firebase from "firebase/app";

const firestore = firebase.firestore();

const useParticipantScore = () => {
  const participantRef = firestore.collection("participant");
  const handleParticipantScore = async (participantId, score, flip) => {
    if (flip) {
      return;
    }
    const participant = participantRef.doc(participantId);
    participant.update({
      score,
    });
  };

  const handleResetAllParticipantScore = async (game) => {
    const participants = await participantRef.where("game", "==", game).get();

    participants.forEach((p) => {
      p.ref.update({
        score: "-",
      });
    });
  };

  return {
    handleParticipantScore,
    handleResetAllParticipantScore,
  };
};

export default useParticipantScore;
