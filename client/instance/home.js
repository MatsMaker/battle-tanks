export default {
  name: 'home',
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
