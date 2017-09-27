<template>
  <section class="container-book">
    <nav-bar title="分类列表"></nav-bar>
    <section class="container">
        <div class="search">
            <input autocomplete="off" class="s-value">
            <div class="search-btn">搜索</div>
        </div>
        <ul class="m-catalog">
            <li class="list-item" v-for="item in catalogs">
              <a v-bind:href="getCatalogsHref(item.id)">{{item.text}}</a>
            </li>
        </ul>
    </section>
  </section>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
export default {
  asyncData () {
    return axios.get('http://api.youmeixun.com/bookzw/catalog').then((res) => {
      return {catalogs: res.data.data}
    })
  },
  created () {
    this._getCatalogs()
  },
  data () {
    return {
      catalogs: [1, 2, 3]
    }
  },
  methods: {
    getCatalogsHref: function (val) {
      return '/list/' + val + '/1'
    },
    _getCatalogs () {
      return axios.get('/bookzw/catalog').then((res) => {
        console.log(res.data.data)
        return {catalogs: res.data.data}
      })
    }
  },
  watch: {

  },
  components: {
    Logo,
    NavBar
  }
}
</script>

<style>

</style>
