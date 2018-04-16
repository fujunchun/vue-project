import zhCN from './zh-CN'
import en from './en'

// element locale
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
  'zh-CN': {
    ...zhCN,
    ...zhLocale
  },
  en: {
    ...en,
    ...enLocale
  }
}
