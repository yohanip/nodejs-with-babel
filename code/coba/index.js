"use strict"

export default class Something {
  state = {
    what: 1000,
    whit: false
  }

  ok = async () => {
    let p = await new Promise(r => {
      setTimeout(() => r(this.state), 3000)
    })

    p.what = p.what + 1000

    return p
  }

  hore() {
    this.ok().then(p => console.log(p))
  }
}