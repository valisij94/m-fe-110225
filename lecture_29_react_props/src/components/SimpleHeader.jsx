function getRandomValue() {
  return Math.random();
}

function SimpleHeader() {
  return <h1>Hello from Simple Header! {getRandomValue()}</h1>;
}

export default SimpleHeader;