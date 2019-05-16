<template>
    <div class="singer" ref="singer">
      <list-view @select="selectSinger" :data="singerLists" ref="list"></list-view>
      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
import {getSingerList} from '../../api/singer'
import ListView from '../../base/listview/listview'
import {singerList} from '../../api/singers'
import {mapMutations} from 'vuex'
import {playlistMixin} from '../../common/js/mixin'

export default {
  mixins: [playlistMixin],
  name: 'singer',
  data() {
    return {
      singerList: []
    }
  },
  components: {
    ListView
  },
  created() {
    this._getSingerList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.list.refresh()
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.singer_id}`
      })
      this.setSinger(singer)
    },
    _getSingerList() {
      getSingerList().then((res) => {
        this.singerList = this._normalizeSinger(singerList)
        if (res.singerList) {
          this.singerList.unshift({
            title: '热门',
            items: res.singerList.data.singerlist
          })
        }
      })
    },
    _normalizeSinger(list) {
      let sortList = list.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
      return sortList
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  computed: {
    // 确保异步加载的数据能完全排序
    singerLists: function () {
      return this._normalizeSinger(this.singerList)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
