function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks` , {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => {
      console.log(res.json())
      showForkedRepo(res.url)
    })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'e04b3f1bd07fd29d12e78e38e2e055e2e8a08ef1'
}

function showForkedRepo(repo){
  $('#results').append(
    `<a href="${repo}"> Fork Link </a>`)
}

e04b3f1bd07fd29d12e78e38e2e055e2e8a08ef1
