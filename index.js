import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/supabase/posts', async(req, res)=>{
  const {data} = req.data;
  console.log(data)
})

app.listen(3000, console.log('Server is running on port 3000'))