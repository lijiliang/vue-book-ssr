<template>
  <section class="container-book">
    <nav-bar :title="list.data[0].type"></nav-bar>
    <section class="container">
        <ul class="m-list">
          <li v-for="item in list.data" class="list-item">
            <a :href="getListHref(item.sid, item.listId)">{{item.name}}<span class="author">/{{item.author}}</span></a>
          </li>
        </ul>
         <div class="m-page">
            <div class="page">
                <span v-if="list.curpage > 1">
                  <a :href="'/list/' + list.id + '/1'">首页</a>
                  <a :href="'/list/' + list.id + '/' + (parseInt(list.sid)-1)">上页</a>
                </span>
                <span v-if="list.curpage != list.total">
                  <a :href="'/list/' + list.id + '/' + (parseInt(list.sid)+1)">下页</a>
                  <a :href="'/list/' + list.id + '/' + list.total">尾页</a>
                </span>
            </div>
            <div class="page-info">(第{{list.curpage}}/{{list.total}}页)当前{{list.pageSize}}条/页</div>
        </div>
    </section>
  </section>
</template>
<script>
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'
export default {
  asyncData ({params}) {
    return axios.get('http://api.youmeixun.com/bookzw/list/' + params.id + '/' + params.sid).then((res) => {
      const _data = {
        id: params.id,
        sid: params.sid
      }
      const _list = Object.assign({}, _data, res.data)
      return {list: _list}
    })
  },
  data () {
    return {
      // list: list
    }
  },
  head: {
    title: '列表页标题',
    meta: [
      { hid: 'description', name: 'description', content: '列表页描述' }
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
