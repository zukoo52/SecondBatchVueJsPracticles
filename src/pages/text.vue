<template>

  <div>
    <h1>second vue page</h1>
    <!-- <firstpage /> -->


      <v-row>
        <V-col cols="6" color="red"> </V-col>
          <v-btn color="black" elevation="15" @click="reviewform()">Next</v-btn>

      </v-row>

    <v-btn color="black
    " @click="reviewform()">Add Review</v-btn>

   <p></p>
    <p>
      Why do we use this a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. Many desktop publishing packages and
      web page editors now use Lorem Ipsum as their default model text, and a
      search for 'lorem ipsum' will uncover many web sites still in their
      infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </p>
    <v-container>
    <v-btn color="green" @click="firstpage()">show Review></v-btn>
<br><br>
</v-container>
  </div>
<!--   grid view -->
   <div>
    <center>
    <v-card loading text="..." width="400px" height="400px" elevation="8">
      <v-btn color="red" elevation="10">press</v-btn>
    </v-card>
    <br /><br />
    <v-sheet width="400px" height="200px" elevation=" 20">
      <p class="pt-8">hello</p>
    </v-sheet>

    <br /><br />

    <div class="mt-10"></div>
    <div class="mt-10"></div>
    <div class="mt-10"></div>
    <div class="mt-10"></div>




      <v-container>
      <v-row>
        <V-col cols="3">
          <v-sheet color="green" elevation="30">one</v-sheet>
        </V-col>
        <V-col cols="3">
          <v-sheet color="orange" elevation="30">one</v-sheet>
        </V-col>
        <V-col cols="3">
          <v-sheet color="red" elevation="30">two</v-sheet>
        </V-col>
        <V-col cols="3">
          <v-sheet color="black" elevation="30">three</v-sheet>
        </V-col>

      </v-row>
    </v-container>
    </center>

</div>

</template>

<script>
import firstpage from "@/pages/index.vue";
import reviewform from "@/pages/createreaview.vue";

export default {
  components: {
    firstpage,
    reviewform,
  },
  // vue hooks
  // beforeCreate() {
  //   console.log("hello clarification before create this page");
  // },
  // created() {
  //   console.log("created the file");
  // },
  // beforeMount() {
  //   console.log("after create and before loading");
  // },
  // mounted() {
  //   console.log("after loading");
  // },

  // beforeUpdate() {
  //   console.log("before update");
  // },
  // updated() {
  //   console.log("after update");
  // },
  methods: {
    firstpage() {
      this.$router.push("/");
    },
    reviewform() {
      this.$router.push("/reviews");
    },
  },
};
</script>
<style></style>
