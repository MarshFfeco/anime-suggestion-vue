import { defineStore } from "pinia";

export const anime = defineStore('anime', {
  state: () => {
    return {
      name: ""
    }
  },
  getters: {
    getName: (state) => {
      return state.name
    }
  },
  actions: {
    setName(val) {
      this.name = val
    }
  }
})