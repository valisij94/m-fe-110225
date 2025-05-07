function encryptData(data) {
  return new Promise( (resolve) => {
    resolve(btoa(data));
  })
}

function decryptData(encrypted) {
  return new Promise( (resolve) => {
    resolve(atob(encrypted));
  })
}

function makeRequest(requestBody) {
  return new Promise( resolve => {
    console.log('Sending protected', requestBody)
    setTimeout( resolve, 1500, {status: 200, ok: true} );
  });
}