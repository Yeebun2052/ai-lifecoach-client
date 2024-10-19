// src/i18n/index.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'Hello world',
      welcome: 'Welcome to AI Life Coach'
    },
    chat: {
      title: 'Chat with AI Life Coach',
      inputPlaceholder: 'Type your message here...',
      send: 'Send'
    }
  },
  zh: {
    message: {
      hello: '你好，世界',
      welcome: 'Welcome to AI Life Coach'
    },
    chat: {
      title: '与 AI 生活教练对话',
      inputPlaceholder: '在这里输入您的消息...',
      send: '发送'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
