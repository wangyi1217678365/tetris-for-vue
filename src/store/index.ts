const store = {
  debug: true,
  state: reactive({
    // theme: '#4EA92D',
    // language: 'ch'
  }),
  setMessageAction(newValue: string) {
    // if (this.debug) {
    //   console.log('setMessageAction triggered with', newValue)
    // }

    // this.state.message = newValue
  },

  clearMessageAction() {
    // if (this.debug) {
    //   console.log('clearMessageAction triggered')
    // }

    // this.state.message = ''
  }
}
export default store