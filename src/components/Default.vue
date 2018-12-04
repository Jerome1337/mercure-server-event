<template>
  <div>
    {{ serverData }}
  </div>
</template>

<script>
  let mercureHub;

  /* eslint-disable */
  export default {
    name: 'default',
    data() {
      return {
        serverData: null,
      };
    },
    mounted() {
      this.$sse('http://localhost:9000/hub?topic=http://localhost:9000/demo/server/1.jsonld', {
        format: 'json',
      }).then(
        sse => {
          console.log(sse);
          mercureHub = sse;

          sse.onError(e => {
            console.error('lost connection; giving up!', e);
            sse.close();
          });


          sse.subscribe('', message => {
            console.log('message' + message);
            this.serverData = message
          });
        },
      ).catch(err => {
        console.error('Failed to connect to server', err);
      });
    },
    beforeDestroy() {
      mercureHub.close();
    },
  };
</script>
