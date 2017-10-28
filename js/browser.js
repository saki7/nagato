import * as Nagato from './nagato'

document.addEventListener('DOMContentLoaded', function() {
  const A = {
    nagato: 'yome',
    answer: 42,
  }

  const nLog = new Nagato.Logger('Nagato')
  nLog.info('test page for browsers')

  {
    const log = nLog.makeContext('Sample')
    log.debug('indicating \'debug\'; with additional arguments; this message will be suppressed in prod envs', A)
    log.info('indicating \'info\'; with additional arguments', A)
    log.warn('indicating \'warn\'; with additional arguments', A)
    log.error('indicating \'error\'; with additional arguments', A)
  }
})

