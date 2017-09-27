module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1,minimum-scale=1' },
      { name: 'flexible', content: 'maximum-dpr=2' },
      { hid: 'description', name: 'description', content: '首页描述说明！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/flexible.js'}
    ]
  },
  /*
  ** Global css
  */
  css: [
    {src: '~assets/less/index.less', lang: 'less'}
  ],
  // plugins: [
  //   {src: '~plugins/flex.js'}
  // ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/bookzw', {target: 'http://api.youmeixun.com/'}]
  ]
}
