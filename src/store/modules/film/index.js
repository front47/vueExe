import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  //即将上映的电影
  comingSoonFilms: [],
  // 正在热播的电影
  nowPlayingFilms: [],
  //详情
  detail: {},
  // 广告位
  billboards: []
}

export default{
  state,
  actions,
  getters,
  mutations
}
