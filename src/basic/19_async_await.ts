// const main = () => {
//   setTimeout(() => {
//     console.log("1s");
//     setTimeout(() => {
//       console.log("2s");
//       setTimeout(() => {
//         console.log("3s");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// --- Better ---

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const mainAsync = async () => {
  await delay(1000);
  console.log("1s");

  await delay(1000);
  console.log("2s");

  await delay(1000);
  console.log("3s");
};

mainAsync();
