require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
  "login": "HAPPY321SUV",
  "id": 140996120,
  "node_id": "U_kgDOCGduGA",
  "avatar_url": "https://avatars.githubusercontent.com/u/140996120?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/HAPPY321SUV",
  "html_url": "https://github.com/HAPPY321SUV",
  "followers_url": "https://api.github.com/users/HAPPY321SUV/followers",
  "following_url": "https://api.github.com/users/HAPPY321SUV/following{/other_user}",
  "gists_url": "https://api.github.com/users/HAPPY321SUV/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/HAPPY321SUV/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/HAPPY321SUV/subscriptions",
  "organizations_url": "https://api.github.com/users/HAPPY321SUV/orgs",
  "repos_url": "https://api.github.com/users/HAPPY321SUV/repos",
  "events_url": "https://api.github.com/users/HAPPY321SUV/events{/privacy}",
  "received_events_url": "https://api.github.com/users/HAPPY321SUV/received_events",
  "type": "User",
  "site_admin": false,
  "name": "subhransu das",
  "company": null,
  "blog": "",
  "location": "banglore",
  "email": null,
  "hireable": null,
  "bio": "student of full stack developer",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-31T03:20:20Z",
  "updated_at": "2023-12-28T13:22:00Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please log in chai aur code</h1>')
})
app.get('/myname',(req,res)=>{
    res.send('<h2>subhransu das</h2>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})