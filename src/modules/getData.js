const getData = () => {
  return fetch("https://db-ozon-default-rtdb.firebaseio.com/goods.json").then(
    (response) => {
      return response.json();
    }
  );
};

export default getData;
