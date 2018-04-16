import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ElementLocale from 'element-ui/lib/locale'

import messages from './lang'
import conf from '@/config/i18n.conf'
import { read } from '@/utils/storage'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: read('lang') || conf.defaultLocale,
  messages,
  fallbackLocale: conf.fallbackLocale
})

// element ui国际化兼容vue-i18n 6.x版本
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
