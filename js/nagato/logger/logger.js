import {Style} from './style'
import {Option} from './option'
import {Level} from './level'


class Logger {
  static Style = Style
  static Option = Option
  static Level = Level

  static PartStyle = {
    message: new Style({'font-weight': 'bold', 'text-decoration': 'underline', 'color': '#aaa'}),
    message_body: new Style({'font-family': 'monospace', 'font-weight': 'normal', 'text-decoration': 'none', 'color': '#222'}),
    backtrace: new Style({'font-weight': 'bold', 'text-decoration': 'underline', 'color': '#aaa'}),
    icon: new Style({
      'font-family': 'sans-serif',
    })
  }

  static defaultLevel = Level.debug
  static defaultOptions = new Option({
    disableBacktrace: () => process.env.NODE_ENV === 'production',
    ctx: {
      level: Logger.defaultLevel,
      style: new Style({
        'font-weight': 'bold',
        'color': '#222222',
      }),
    },
  })

  constructor(ctx, opts) {
    if (!ctx || !ctx.length) {
      throw new Error('no context supplied for Logger initialization')
    }

    this.orig_ctx = [].concat(ctx)
    this.ctx = [].concat(ctx)

    this.opts = new Option(Logger.defaultOptions.data)
    if (opts) {
      if (!(opts instanceof Option)) {
        throw new Error(`unrecognized option type; did you mean: ['option1', 'option2', ...]`)
      }
      this.opts.data = Object.assign(this.opts.data, opts.data)
    }
  }

  originalContext() {
    return this.orig_ctx
  }

  makeContext(name, opts) {
    if (!name || !name.length)  {
      throw new Error('name must be supplied')
    }
    let l = new Logger(this.orig_ctx.concat(name), new Option(Object.assign({}, this.opts.data, opts)))
    l.orig_ctx = Object.assign([], this.orig_ctx)
    return l
  }

  debug() {
    return this.log_impl(Level.debug, ...arguments)
  }
  info() {
    return this.log_impl(Level.info, ...arguments)
  }
  warn() {
    return this.log_impl(Level.warn, ...arguments)
  }
  error() {
    return this.log_impl(Level.error, ...arguments)
  }

  log_impl(level, arg1, ...args) {
    if (this.need_log(level)) {
      const master_output = level.intensity >= Level.error.intensity ? console.group : console.groupCollapsed

      const icon_fmt = this.opts.data.icon ? `%c${this.opts.data.icon.text}  ` : '%c'
      const icon_style = this.opts.data.icon ? Logger.PartStyle.icon.clone({color: this.opts.data.icon.color}).join() : ''


      master_output(
        `%c${level.icon} %c${level.label}%c ` +
        `[%c${this.ctx.join('::')}%c] ` +
        `${icon_fmt}%c` +
        `${arg1}`,

        level.style.clone(
          {'text-decoration': 'none'}
        ).join(),
        level.style.join(),
        '',
        this.opts.data.ctx.style.join(),
        '',
        icon_style,
        Logger.PartStyle.message_body.join()
      )

      // console.group(`%ccount`, Logger.PartStyle.message.join())
      // console.count()
      // console.groupEnd()

      if (args.length) {
        console.group(`%cmessage`, Logger.PartStyle.message.join())
        console.log(...args)
        console.groupEnd()
      }

      if (!this.opts.data.disableBacktrace()) {
        console.groupCollapsed('%cbacktrace', Logger.PartStyle.backtrace.join())
        console.trace()
        console.groupEnd()
      }

      console.groupEnd()

    } else {
      // suppressed...
    }
  }

  need_log(level) {
    if (level.intensity === Level.debug.intensity) {
      if (process.env.NODE_ENV !== 'development') return false
    }

    return level.intensity >= this.opts.data.ctx.level.intensity
  }
}

export {Logger}

