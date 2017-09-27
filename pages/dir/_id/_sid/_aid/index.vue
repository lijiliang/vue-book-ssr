<template>
  <section class="container-book">
    <nav-bar :title="list.title"></nav-bar>
    <section class="container">
        <div class="m-show">
            <div class="show-cnt">
                <p v-for="item in list.contentList">{{item}}</p>
            </div>
        </div>
        <div class="show-page">
            <a v-if="list.other.previd != list.other.sid" :href="'/dir/' + list.other.id + '/' + list.other.sid + '/' + list.other.previd">上一章</a>
            <a :href="'/dir/' + list.other.id + '/' + list.other.sid " class="show-dir">目录</a>
            <a v-if="list.other.nextid != list.other.sid" :href="'/dir/' + list.other.id + '/' + list.other.sid + '/' + list.other.nextid">下一章</a>
        </div>
    </section>
  </section>
</template>
<script>
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'
export default {
  asyncData ({params}) {
    return axios.get('http://api.youmeixun.com/bookzw/show/' + params.id + '/' + params.sid + '/' + params.aid).then((res) => {
      const _data = res.data.data
      const contentList = {
        contentList: _data.content.split(/\s{4}/g)
      }
      const _list = Object.assign({}, _data, contentList)
      return {list: _list}
    })
  },
  data () {
    return {
      // list: list
    }
  },
  head: {
    title: '详情页标题',
    meta: [
      { hid: 'description', name: 'description', content: '详情页描述' }
    ]
  },
  methods: {
    getListHref: function (sid, listId) {
      return '/dir/' + sid + '/' + listId
    }
  },
  components: {
    NavBar
  }
}
</script>
