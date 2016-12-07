<template lang="pug">
div(class="col-sm-6 col-sm-offset-3")
  button(class="btn btn-primary" v-on:click="getQuote()") Make a test reuest
  p(v-if="seen") Now you see me after test request
</template>

<script>
export default {
  data: function() {
    return {
      seen: false
    }
  },
  methods: {
    getQuote() {
      this.$http
        .get('/api/test-reuest')
        .then(result => {
          this.seen = result.body.result;
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
