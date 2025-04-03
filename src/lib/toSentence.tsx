const sentence = (x: string[]) => {
  let sentence = "";
  if (x.length > 1) {
    sentence = ` ${x.slice(0, -1).join(", ")} and ${x[x.length - 1]}`;
  } else {
    sentence = x[0];
  }
  return sentence;
};
export default sentence;
