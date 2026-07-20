import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import OutdatedNotice from './OutdatedNotice.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(OutdatedNotice),
    })
  },
}
