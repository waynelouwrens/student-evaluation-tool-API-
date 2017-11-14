const express = require('express')


const PORT = process.env.PORT || 3030

let app = express()



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
