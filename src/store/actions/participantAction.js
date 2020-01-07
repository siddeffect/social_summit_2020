export const participantSignIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "PARTICIPANT_LOGIN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "PARTICIPANT_LOGIN_ERROR",
          err
        });
      });
  };
};

export const participantSignOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "PARTICIPANT_SIGNOUT_SUCCESS" });
      });
  };
};

export const participantSignUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("participantData")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
            college: newUser.college,
            state: newUser.state,
            year_branch: newUser.year_branch,
            role: "PARTICIPANT",
            participant_count: null,
            payment_done: false,
            gender: newUser.gender,
            referralCode: newUser.referralCode
          })
          .then(
            firestore
              .collection("participantCount")
              .doc("participant_count_value")
              .get()
              .then(function(doc) {
                if (doc.exists) {
                  firestore
                    .collection("participantData")
                    .doc(resp.user.uid)
                    .update({
                      participant_count: doc.data().participant_count
                    });
                } else {
                  console.log("No such document!");
                }
              })
          )
          .then(() => {
            firestore
              .collection("participantCount")
              .doc("participant_count_value")
              .update({
                participant_count: firebase.firestore.FieldValue.increment(1)
              });
          })
          .then(() => {
            dispatch({
              type: "PARTICIPANT_SIGNUP_SUCCESS"
            });
          })
          .catch(err => {
            dispatch({ type: "PARTICIPANT_SIGNUP_ERROR", err });
          });
      });
  };
};
