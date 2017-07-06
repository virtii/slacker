import request from 'request'

export default class Slacker {
  constructor(){
    this.url = process.env.SLACK_WEBHOOK
    this.appName = process.env.SLACK_APP_NAME
    this.port = process.env.PORT
    this.appUrl = process.env.APP_URL
    this.isProduction = process.env.NODE_ENV === 'production'
  }

  notify(text) {
    if (!this.isProduction) return
    // console.log("send msg")
    request.post(this.url, {
         form: {
           payload: JSON.stringify({text})
         }
       }, (err, response) => {
         if (err) {
           console.log("err", err, response)
         } else {
          //  console.log("msg was sent")
         }
       });
  }

  started() {
    this.notify(`
      The project *${this.appName}* was started!
      URL: ${this.appUrl}
      PORT: ${this.port}
      `
    )
  }
}
