<!-- src/components/ChatInterface.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ $t('chat.title') }}</v-card-title>
          <v-card-text>
            <v-list ref="messageList">
              <v-list-item v-for="(message, index) in chatStore.messages" :key="index">
                <v-list-item-content :class="{ 'text-right': message.sender === 'user' }">
                  <v-chip
                    :color="message.sender === 'user' ? 'primary' : 'secondary'"
                    text-color="white"
                    class="ma-2"
                  >
                    {{ message.text }}
                    <template v-slot:append>
                      <v-icon small class="ml-2">mdi-clock-outline</v-icon>
                      <span class="text-caption ml-1">{{ formatTime(message.timestamp) }}</span>
                    </template>
                  </v-chip>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="userInput"
              :label="$t('chat.inputPlaceholder')"
              @keyup.enter="sendMessage"
            ></v-text-field>
            <v-btn @click="sendMessage" color="primary">
              {{ $t('chat.send') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { useChatStore } from '@/stores/chat'

export default defineComponent({
  name: 'ChatInterface',
  setup () {
    const chatStore = useChatStore()
    const userInput = ref('')
    const messageList = ref<HTMLElement | null>(null)

    const scrollToBottom = () => {
      nextTick(() => {
        if (messageList.value) {
          messageList.value.scrollTop = messageList.value.scrollHeight
        }
      })
    }

    const sendMessage = () => {
      if (userInput.value.trim()) {
        chatStore.addMessage({ sender: 'user', text: userInput.value })
        userInput.value = ''
        scrollToBottom()
        setTimeout(() => {
          chatStore.addMessage({ sender: 'ai', text: 'This is a placeholder AI response.' })
          scrollToBottom()
        }, 1000)
      }
    }

    const formatTime = (timestamp: Date) => {
      return new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric'
      }).format(timestamp)
    }

    return {
      chatStore,
      userInput,
      sendMessage,
      messageList,
      formatTime
    }
  }
})
</script>
