<template>
  <div>
    {{ serverData }}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        serverData: null,
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        const url = new URL('http://mercure/hub');

        url.searchParams.append('topic', 'http://mercure/demo/books/1.jsonld');

        const eventSource = new EventSource(url);

        eventSource.onmessage = message => this.serverData = message;
      },
    },
  };
</script>
