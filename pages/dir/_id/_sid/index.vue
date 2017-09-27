<template>
  <section class="container-book">
    <nav-bar :title="list.info.name"></nav-bar>
    <section class="container">
        <div class="m-info clearfix">
            <div class="info-thumb">
                <img :src="list.info.thumb" :alt="list.info.name">
            </div>
            <div class="info-text">
                <h1>{{list.info.name}}</h1>
                <ul>
                    <li>{{list.info.author}}</li>
                    <li>{{list.info.sorts}}</li>
                    <li>{{list.info.start}}</li>
                    <li>{{list.info.update}}</li>
                    <li>{{list.info.newest}}</li>
                </ul>
            </div>
        </div>
        <div class="m-intro">
            <div class="intro-cnt">
              {{list.info.introInfo}}
            </div>
        </div>
        <div class="m-dir">
            <div class="m-dir-tit">目录</div>
            <ul class="dir-list">
                <li v-for="item in list.list">
                  <a :href="'/dir/' + item.id + '/' + item.sid + '/' + item.aid">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </section>
  </section>
</template>
<script>
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'
export default {
  asyncData ({params}) {
    return axios.get('http://api.youmeixun.com/bookzw/dir/' + params.id + '/' + params.sid).then((res) => {
      return {list: res.data.data}
    })
  },
  data () {
    return {
      // list: list
    }
  },
  head: {
    title: '目录页标题',
    meta: [
      { hid: 'description', name: 'description', content: '目录页描述' }
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
