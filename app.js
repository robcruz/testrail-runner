let username = "rcruz@stamps.com"
let apiKey = "iUPKIU4QehgPPAj9pgPK-nKRihZ/TSXvZahM.QHAS";
const url = "https://stamps.testrail.io/index.php?/api/v2/get_case/4930"

fetch(url, {
  headers: {
    user: username,
    password: apiKey,
    "Content-Type": "application/json"
  },
  mode: 'no-cors'
})
  .then(res => console.log(res))
  .catch(err => console.log(err))

