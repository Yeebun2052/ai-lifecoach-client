// src/stores/chat.ts
import { defineStore } from 'pinia'

interface Message {
  sender: 'user' | 'ai'
  text: string
  timestamp: Date
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [] as Message[]
  }),
  actions: {
    addMessage (message: Omit<Message, 'timestamp'>) {
      this.messages.push({
        ...message,
        timestamp: new Date()
      })
    }
  }
})
