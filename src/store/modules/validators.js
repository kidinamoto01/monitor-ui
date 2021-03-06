import request from 'superagent'
let url = 'http://47.104.155.125:46757'

const state = {
  validators: {}
}

const mutations = {
  getValidators (state) {
    // retrieve peer validators (of validator01)
    request.get(url + '/net_info').end((err, res) => {
      if (err) console.error(err)

      state.validators = res.body.result.peers

      // filter out validators that aren't currently running
      // validators = validators.filter(v => v.connection_status.SendMonitor.CurRate !== 0)
    })
  }
}

export default {
  state,
  mutations
}
