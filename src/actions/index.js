/*action creator for selecte library
action creator is a function a return actions,
action contain of object with type property
action tell reducer to update spesific data
to export many function just use export dont use export default*/

export const selectLibrary = (libraryId) => {
  return {
    type: "select_library",
    payload: libraryId
  };
};
