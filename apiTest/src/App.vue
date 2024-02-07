<template>
  <div>
    <div v-for="(data, index) in datas" :key="index">
      <div class="bg-secondary p-3 m-auto g-2">{{ data.title }}</div>
    </div>

    <div class="container p-4 border rounded">
      <form class="row g-3">
        <div class="col-12 col-md-6">
          <label for="inputName" class="form-label">Your name</label>
          <input
            v-model="form.name"
            type="text"
            class="form-control"
            placeholder="Your name"
            aria-label="your name"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="inputEmail14" class="form-label">Mobile Number</label>
          <input
            v-model="form.phone"
            type="text"
            class="form-control"
            placeholder="Enter your mobile number"
            aria-label="your number"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="inputPhone" class="form-label">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control"
            placeholder="Your email"
            aria-label="your email"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="inputMessage" class="form-label"
            >Write your message here</label
          >
          <input
            v-model="form.message"
            type="text"
            class="form-control"
            placeholder="Write your message"
            aria-label="your email"
          />
        </div>

        <div class="col-auto">
          <button type="submit" class="btn btn-secondary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const BASE_URL =
  "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth";
export default {
  data() {
    return {
      datas: [],
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(BASE_URL, {
          method: "GET",
        });
        const data = await response.json();
        this.datas = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async postData({ name, email, phone, message }) {
      try {
        const response = await fetch(
          "https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth",
          {
            method: "POST",
            data: {
              name,
              email,
              phone,
              message,
            },
          }
        );
        this.form = response;
        this.fetchData();
        console.log("post success");
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
