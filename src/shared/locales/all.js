import eleLocaleDe from 'element-ui/lib/locale/lang/de'
import eleLocaleEn from 'element-ui/lib/locale/lang/en'
import eleLocaleFa from 'element-ui/lib/locale/lang/fa'
import eleLocaleFr from 'element-ui/lib/locale/lang/fr'
import eleLocaleJa from 'element-ui/lib/locale/lang/ja'
import eleLocaleKo from 'element-ui/lib/locale/lang/ko'
import eleLocalePtBR from 'element-ui/lib/locale/lang/pt-br'
import eleLocaleRu from 'element-ui/lib/locale/lang/ru-RU'
import eleLocaleTr from 'element-ui/lib/locale/lang/tr-TR'
import eleLocaleZhCN from 'element-ui/lib/locale/lang/zh-CN'
import eleLocaleZhTW from 'element-ui/lib/locale/lang/zh-TW'
import eleLocaleUk from 'element-ui/lib/locale/lang/ua'
import appLocaleDe from '@shared/locales/de'
import appLocaleEnUS from '@shared/locales/en-US'
import appLocaleFa from '@shared/locales/fa'
import appLocaleFr from '@shared/locales/fr'
import appLocaleJa from '@shared/locales/ja'
import appLocaleKo from '@shared/locales/ko'
import appLocalePtBR from '@shared/locales/pt-BR'
import appLocaleRu from '@shared/locales/ru-RU'
import appLocaleTr from '@shared/locales/tr'
import appLocaleZhCN from '@shared/locales/zh-CN'
import appLocaleZhTW from '@shared/locales/zh-TW'
import appLocaleUk from '@shared/locales/uk'

// Please keep the locale key in alphabetical order.
const resources = {
  'de': {
    translation: {
      ...eleLocaleDe,
      ...appLocaleDe
    }
  },
  'en-US': {
    translation: {
      ...eleLocaleEn,
      ...appLocaleEnUS
    }
  },
  'fa': {
    translation: {
      ...eleLocaleFa,
      ...appLocaleFa
    }
  },
  'fr': {
    translation: {
      ...eleLocaleFr,
      ...appLocaleFr
    }
  },
  'ja': {
    translation: {
      ...eleLocaleJa,
      ...appLocaleJa
    }
  },
  'ko': {
    translation: {
      ...eleLocaleKo,
      ...appLocaleKo
    }
  },
  'pt-BR': {
    translation: {
      ...eleLocalePtBR,
      ...appLocalePtBR
    }
  },
  'ru': {
    translation: {
      ...eleLocaleRu,
      ...appLocaleRu
    }
  },
  'tr': {
    translation: {
      ...eleLocaleTr,
      ...appLocaleTr
    }
  },
  'zh-CN': {
    translation: {
      ...eleLocaleZhCN,
      ...appLocaleZhCN
    }
  },
  'zh-TW': {
    translation: {
      ...eleLocaleZhTW,
      ...appLocaleZhTW
    }
  },
  'uk': {
    translation: {
      ...eleLocaleUk,
      ...appLocaleUk
    }
  }
}

export default resources
