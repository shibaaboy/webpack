import * as $ from 'jquery'

function createAnalytics(): object {
  let counter = 0
  let isDestroyed: boolean = false

  const listener = (): number => counter++

  $(document).on('click', listener)

  return {
    destroy() {
      $(document).of('click', listener)
      isDestroyed = true
    },
    getClicks() {
      if(isDestroyed) {
        return 'Analytics is destroyed!'
      }
      return counter
    }
  }
}

window['analytics'] = createAnalytics()