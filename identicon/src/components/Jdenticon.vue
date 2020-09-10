<template>
 <div>
   <h2>Generate Identicon</h2>
   <div>
     Input: <label>
     <input type="text" @input="onInput">
   </label>
   </div>
   <p>Output: </p>
   <span v-html="identicon"></span>
 </div>
</template>

<script>
import { toSvg } from 'jdenticon';

export default {
  name: "Jdenticon",
  data(){
    return {
      inputString: null,
    }
  },
  computed: {
    identicon(){
      return toSvg(this.inputString, 300);
    },
  },
  methods: {
    onInput(e){
      this.inputString = e.target.value;
    },
    // created this just for fun so each time refreshing the page it'll be a different identicon
    randomStr(length){
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  },
  created() {
    this.inputString = this.randomStr(30);
  }
}
</script>

<style scoped>

</style>
