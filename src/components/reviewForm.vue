<template>
  <div class="reviews-section">
    <v-container>
      <div class="reviews-header">
        <h2>Customers <span class="highlight">reviews</span></h2>
        <v-btn
          color="primary"
          @click="showForm = !showForm"
          class="write-review-btn"
          >Write a Review</v-btn
        >
      </div>

      <v-row>
        <v-col cols="8">
          <v-card class="pa-5 review-card" elevation="3">
            <v-data-table :items="items" :headers="headers" class="elevation-1">
              <template v-slot:[`item.Rname`]="{ item }">
                <div class="review-item">
                  <div class="review-details">
                    <p class="reviewer-name">@{{ item.Rname }}</p>
                    <p class="product-name">{{ item.name }}</p>
                    <v-rating
                      dense
                      size="25"
                      active-color="yellow-accent-4"
                      readonly
                      :model-value="item.rating"
                    ></v-rating>
                    <p class="review-text">{{ item.text }}</p>
                  </div>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-5 review-card" elevation="3">
            <div class="rating-summary">
              <h3>4.89 out of 5 stars</h3>
              <p>13 reviews</p>
              <div v-for="i in 5" :key="i" class="rating-bar">
                <v-rating
                  dense
                  size="20"
                  active-color="yellow-accent-4"
                  readonly
                  :model-value="5 - (i - 1)"
                ></v-rating>
                <v-progress-linear
                  :value="i === 5 ? 100 : 0"
                  color="yellow-accent-4"
                ></v-progress-linear>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      newReview: {
        code: "",
        name: "",
        Rname: "",
        date: "",
        rating: 0,
        text: "",
      },
      items: [
        {
          code: "BP - Baby Products",
          name: "Gerber Baby Food Oat & Banana Cereal",
          Rname: "Samitha Rathnayaka",
          date: "07/21/2024",
          rating: 5,
          text: "This product is good",
        },
        {
          code: "HP - Health Product",
          name: "Detol Hand Sanitizer",
          Rname: "Malinga Bandara",
          date: "01/01/2024",
          rating: 5,
          text: "This product is good",
        },
        {
          code: "EP - Electronics",
          name: "Samsung Galaxy S21",
          Rname: "John Doe",
          date: "03/15/2024",
          rating: 4,
          text: "Great phone with excellent features",
        },
        {
          code: "AP - Automotive Parts",
          name: "Bosch Wiper Blades",
          Rname: "Jane Smith",
          date: "02/20/2024",
          rating: 4,
          text: "Perfect fit and works flawlessly",
        },
        {
          code: "FP - Food Products",
          name: "Quaker Oats",
          Rname: "Mark Johnson",
          date: "04/05/2024",
          rating: 4,
          text: "Healthy and tasty breakfast option",
        },
        {
          code: "BP - Baby Products",
          name: "Pampers Diapers",
          Rname: "Nadun Ratnayake",
          date: "09/20/2024",
          rating: 5,
          text: "Very comfortable for babies",
        },
        {
          code: "FP - Food Product",
          name: "Nestle Milk",
          Rname: "Harini Karunaratne",
          date: "07/04/2024",
          rating: 5,
          text: "Great taste",
        },
        {
          code: "HP - Health Product",
          name: "Vitamin C Tablets",
          Rname: "Raj Kumar",
          date: "06/25/2024",
          rating: 4,
          text: "Boosts immunity effectively",
        },
        {
          code: "BP - Baby Products",
          name: "Pampers Diapers",
          Rname: "Linda Lee",
          date: "07/14/2024",
          rating: 4,
          text: "Very absorbent and gentle",
        },
        {
          code: "BP - Beauty Product",
          name: "L'Oreal Shampoo",
          Rname: "Kavindi Senanayake",
          date: "06/08/2024",
          rating: 4,
          text: "Good for hair",
        },
        {
          code: "FP - Food Product",
          name: "Oreo Cookies",
          Rname: "Anusha Silva",
          date: "03/12/2024",
          rating: 2,
          text: "Not bad",
        },
        {
          code: "FP - Food Products",
          name: "Nature Valley Granola Bars",
          Rname: "Chris Martinez",
          date: "10/03/2024",
          rating: 3,
          text: "Good snack for on-the-go",
        },
        {
          code: "HP - Health Product",
          name: "Panadol Tablets",
          Rname: "Dilantha Wickramasinghe",
          date: "02/23/2024",
          rating: 3,
          text: "Effective for headaches",
        },
      ],
      headers: [
        { title: "Reviewer's Name", value: "Rname" },
        { title: "Product", value: "name" },
        { title: "Ratings", value: "rating" },
        { title: "Review Text", value: "text" },
      ],
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
      this.items.push({
        code: this.newReview.code,
        name: this.newReview.name,
        Rname: this.newReview.Rname,
        date: this.newReview.date,
        rating: this.newReview.rating,
        text: this.newReview.text,
      });
      this.newReview = {
        code: "",
        name: "",
        Rname: "",
        date: "",
        rating: 0,
        text: "",
      };
      this.showForm = false;
    },
  },
};
</script>

<style scoped>
.reviews-section {
  margin-top: 20px;
  background-color: #035c97;
  padding: 20px;
  border-radius: 10px;
}
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}
.highlight {
  color: blue;
}
.write-review-btn {
  text-transform: capitalize;
}
.review-card {
  background-color: #f9f9f9;
}
.review-item {
  display: flex;
  margin-bottom: 15px;
}
.review-details {
  display: flex;
  flex-direction: column;
}
.reviewer-name {
  font-weight: bold;
}
.product-name {
  font-style: italic;
}
.review-text {
  margin-top: 10px;
}
.rating-summary {
  text-align: center;
}
.rating-bar {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.rating-bar v-rating {
  margin-right: 10px;
}
</style>
