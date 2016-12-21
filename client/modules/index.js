export default {
    name: 'index',
    methods: {
      redirect(path, e) {
        console.log(path, e, this.router);
        // this.$route.push('/profile');
      }
    }
}
