<template>
   <transition name="slide">
     <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
   </transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from '../../api/singer'
import {createSong} from '../../common/js/song'
import MusicList from '../music-list/music-list'

export default {
  name: 'singer-detail',
  components: {MusicList},
  data() {
    return {
      songs: []
    }
  },
  comments: {
    MusicList
  },
  computed: {
    title() {
      return this.singer.singer_name
    },
    bgImage() {
      return this.singer.singer_pic
    },
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getDetail()
    console.log(this.singer)
  },
  methods: {
    _getDetail() {
      if (!this.singer.singer_id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.singer_mid).then((res) => {
        if (res) {
          this.songs = this._normallizeSongs(res.singer.data.songlist)
          console.log(this.songs)
        }
      })
    },
    _normallizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        if (item.id && item.album.mid) {
          ret.push(createSong(item))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable.styl"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: $color-background
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
