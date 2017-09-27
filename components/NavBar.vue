<template>
  <header class="nav-bar">
      <a href="javascript:history.go(-1);" class="top-back"></a>
      <h1 class="bar-title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '分类列表'
    }
  }
}
</script>
