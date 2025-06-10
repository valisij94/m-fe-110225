function RandomText() {

  const rand = Math.random();
  return (
    rand > 0.5 ? <h1>Large value</h1> : <p>Small value</p>
  )
}

export { RandomText };