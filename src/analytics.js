import $ from 'jquery';

const createAnalytics = () => {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {

    destroy() {
      $(document).off('click', listener);
      isDestroyed = true; s
    },

    getClicks() {
      return isDestroyed ? 'Analytics HAHAHAA is destroyed' : counter;
    }

  }
}

window.analytics = createAnalytics();