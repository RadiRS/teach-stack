//action creator for selecte library
export const selectLibrary = (libraryId) => {
  return {
    type: "select_library",
    payload: libraryId
  };
};
