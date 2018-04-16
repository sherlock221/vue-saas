/**
 * github vue-bus
 * @param Vue
 * @returns {*}
 * @constructor
 *   // ...
 *  created() {
 *   this.$bus.on('add-todo', this.addTodo);
 *   this.$bus.once('once', () => console.log('This listener will only fire once'));
 *  },
 *  beforeDestroy() {
 *   this.$bus.off('add-todo', this.addTodo);
 *  },
 *  methods: {
 *   addTodo(newTodo) {
 *     this.todos.push(newTodo);
 *   }
 * }
 *
 */

function VueBus(Vue) {
  var bus = new Vue()

  Object.defineProperties(bus, {
    on: {
      get() {
        return this.$on
      }
    },
    once: {
      get() {
        return this.$once
      }
    },
    off: {
      get() {
        return this.$off
      }
    },
    emit: {
      get() {
        return this.$emit
      }
    }
  })

  Vue.bus = bus

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBus)
}
export default VueBus
