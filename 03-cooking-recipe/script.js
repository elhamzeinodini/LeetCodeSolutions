function prepare(ingredients, fn) {
  return new Promise((resolve) => {
    console.log(`preparing stuffs: ${[...ingredients].join(", ")}`);

    setTimeout(() => {
      resolve(fn());
    }, 500);
  });
}

function cooking(fn) {
  console.log("making an omelette ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 2000);
  });
}

function serve(fn) {
  console.log("serving food ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 500);
  });
}

function eat(fn) {
  console.log("eating ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 1000);
  });
}

function doneMessage(prevStep) {
  return () => console.log(`${prevStep} done, next step ...`);
}

function startCooking(stuffs) {
  prepare(stuffs, doneMessage("preparing"))
    .then(() => {
      return cooking(doneMessage("making"));
    })
    .then(() => {
      return serve(doneMessage("serving"));
    })
    .then(() => {
      return eat(doneMessage("eating"));
    })
    .then(() => {
      console.log("process is done");
    });
}

startCooking(["eggs", "tomatoes"]);

module.exports = { prepare, cooking, serve, eat, doneMessage };
