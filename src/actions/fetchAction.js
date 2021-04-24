export const fetchAction = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: "FETCH_DATA",
        payload: posts
      })
    );
};
