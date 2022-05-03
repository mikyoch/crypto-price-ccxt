const fs = require('fs')

const content = 'Some content!'

fs.writeFile('abc/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})