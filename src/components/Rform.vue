<template>
  <v-container>
    <div class="review-form-section">
      <h2>Submit a Review</h2>
      <v-form @submit.prevent="submitReview">
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="newReview.code"
              :items="productCodes"
              label="Product Code"
              required
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="newReview.name"
              :items="productNames"
              label="Product Name"
              required
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="newReview.Rname"
              label="Reviewer Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="newReview.date"
              label="Review Date"
              type="date"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-rating
              v-model="newReview.rating"
              label="Rating"
              required
              size="40"
              background-color="yellow lighten-3"
              color="yellow darken-3"
            ></v-rating>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="newReview.text"
              label="Description"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" type="submit">Submit Review</v-btn>
                  <P></P>
            <v-btn color="red" @click="reviews()">Back</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-container>

</template>

<script>
import reviews from "@/pages/createreaview.vue"
export default {
  components:{
    reviews,
  },

  reviews(){
    this.$router.push("/reviews");
  },
  data() {
    return {
      newReview: {
        code: '',
        name: '',
        Rname: '',
        date: '',
        rating: 0,
        text: '',
      },
      productCodes: [
        "BP - Baby Products",
        "HP - Health Product",
        "EP - Electronics",
        "AP - Automotive Parts",
        "FP - Food Products",
        "BP - Beauty Product",
      ],
      productNames: [
        "Gerber Baby Food Oat & Banana Cereal",
        "Detol Hand Sanitizer",
        "Samsung Galaxy S21",
        "Bosch Wiper Blades",
        "Quaker Oats",
        "Pampers Diapers",
        "Nestle Milk",
        "Vitamin C Tablets",
        "L'Oreal Shampoo",
        "Oreo Cookies",
        "Nature Valley Granola Bars",
        "Panadol Tablets",
      ],
    };
  },
  methods: {
    submitReview() {
      console.log("Review submitted: ", this.newReview);
      // Reset form after submission
      this.newReview = {
        code: '',
        name: '',
        Rname: '',
        date: '',
        rating: 0,
        text: '',
      };
    },
  },
};
</script>

<style scoped>
.review-form-section {
  margin-top: 20px;
  background-color: #154a7e;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
}
.review-form-section h2 {
  margin-bottom: 20px;
}
</style>
