import "../index.css";

function pickTwoRandomObjects(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  let randomIndex2 = randomIndex1;

  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * arr.length);
  }
  const actorId1 = arr[randomIndex1].id;
  const actorId2 = arr[randomIndex2].id;
  return { actorId1, actorId2 };
}
function pickonerandom(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  return randomIndex1;
}
export { pickTwoRandomObjects, pickonerandom };
