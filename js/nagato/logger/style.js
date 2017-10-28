class Style {
  constructor(kv) {
    this.kv = kv
  }

  join() {
    return Object.keys(this.kv).map(k => {
      return `${k}:${this.kv[k]}`
    }).join(';')
  }

  toString() {
    return this.join()
  }

  clone(assigner) {
    return new Style(Object.assign({}, this.kv, assigner))
  }
}

export {Style}

