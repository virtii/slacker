process.env = Object.assign(process.env, {
  "PORT": "5022",
  "APP_URL": "https://blabla.virtii.com",
  "SLACK_APP_NAME": "blabla-dev",
  "SLACK_WEBHOOK": "XXXXXX"
})

import Slacker from './src/app.js'

const sl =  new Slacker()

// custom text
// sl.notify('texttt  \n new line *bold*')

// app was started and server is listening!
sl.started()
