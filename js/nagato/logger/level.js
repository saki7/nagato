import {Style} from './style'

const Level = {
  debug: {
    intensity: -1, label: 'DEBUG',
    out: console.debug,
    style: new Style({
      'font-family': 'sans-serif',
      'font-weight': 'bold',
      'text-decoration': 'underline',
      'color': '#B40486',
    }),
    icon: '⚒️',
  },
  info: {
    intensity: 0, label: 'INFO ',
    out: console.info,
    style: new Style({
      'font-family': 'sans-serif',
      'color': '#BBB',
    }),
    icon: '📝',
  },
  warn: {
    intensity: 1, label: 'WARN ',
    out: console.warn,
    style: new Style({
      'font-family': 'sans-serif',
      'font-weight': 'bold',
      'color': '#ff8c00',
    }),
    icon: '⚠️',
  },
  error: {
    intensity: 2, label: 'ERROR',
    out: console.error,
    style: new Style({
      'font-family': 'sans-serif',
      'font-weight': 'bold',
      // 'color': '#dc143c',
      'color': '#e62670',
    }),
    icon: '🚫',
  },
}

export {Level}

