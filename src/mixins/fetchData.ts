const fetchData: FetchData = {
  data: () => ({
    loading: false,
    api: null,
  }),

  methods: {
    fetchData(url: string) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.api = r;
            this.loading = false;
          }, 1000);
        });
    },
  },
};

interface FetchData {
  data: Function;
  methods: any;
}

export default fetchData;
