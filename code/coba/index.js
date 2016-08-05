"use strict"

import kali from './dua'

export default class Something {
  state = {
    what: 1000,
    whit: false
  }

  ok = async () => {
    try {
      let p = await new Promise(r => {
        setTimeout(() => r(this.state), 3000)
      })

      p.what = p.what + kali(10, 200)

      return p
    }
    catch (e) {
      console.error(e)
    }
  }

  hore() {
    this.ok().then(p => console.log(p))
  }
}