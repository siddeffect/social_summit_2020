export const munRegister = newUser => {
  console.log("i am called", newUser);
  console.log("called again", newUser);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("munData")
      .add({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        college: newUser.college,
        university: newUser.university,
        city: newUser.city,
        state: newUser.state,
        course: newUser.course,
        portfolioLink: newUser.portfolioLink,
        pastExp: newUser.pastExp,
        themeQues: newUser.themeQues,
        aboutSummit: newUser.aboutSummit,
        selectedDate: newUser.selectedDate,
        countryPreference: {
          first: newUser.countryPreference.first,
          second: newUser.countryPreference.second,
          third: newUser.countryPreference.third
        }
      })
      .then(() => {
        dispatch({
          type: "MUN_REGISTER_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({ type: "MUN_REGISTER_ERROR", err });
      });
  };
};
