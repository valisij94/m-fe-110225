function randomPromiseCreator() {
  return new Promise( (resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) resolve('Success!');
    else reject(new Error('Just an error'));
  });
}

const makeRacer = (racer, car) => {
  return new Promise( resolve => {
    const raceTime = Math.random() * 1000;
    setTimeout(resolve, raceTime, `Racer ${racer} on car ${car} finished! Time: ${raceTime}`)
  });
}