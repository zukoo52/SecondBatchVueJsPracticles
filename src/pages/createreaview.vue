<template>
  <div class="reviews-section">
    <v-container>
      <div class="reviews-header">
        <h2>Customers <span class="highlight">reviews</span></h2>
        <v-btn color="primary" class="write-review-btn">write-in-review</v-btn>
      </div>
      <v-row>
        <v-col cols="8">
          <v-card class="pa-5" elevation="3">
            <v-data-table :items="items" :headers="headers" class="elevation-1">
              <template v-slot:[`item.Rname`]="{ item }">
                <div class="review-item">
                  <div class="review-avatar"></div>
                  <div class="review-details">
                    <p class="reviewer-name">@{{ item.Rname }}</p>
                    <p class="verified-purchase">• Verified Purchase</p>
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
          <v-card class="pa-5" elevation="3">
            <div class="rating-summary">
              <h3>4.89 out of 5 stars</h3>
              <p>2 reviews</p>
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
      items: [
        {
          Rname: "Yasindu Ramanayake",
          rating: 5,
          text: "Best service!!!",
        },
        {
          Rname: "sachin hesh",
          rating: 5,
          text: "Great service. delivery within a day. will order again for sure.",
        },
        // Add more reviews as needed
      ],
      headers: [
        { title: "Reviewer's Name", value: "Rname" },
        // Add more headers if needed
      ],
    };
  },
};
</script>

<style scoped>
.reviews-section {
  margin-top: 20px;
}
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.highlight {
  color: blue;
}
.write-review-btn {
  text-transform: capitalize;
}
.review-item {
  display: flex;
  margin-bottom: 15px;
}
.review-avatar {
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 15px;
}
.review-details {
  display: flex;
  flex-direction: column;
}
.reviewer-name {
  font-weight: bold;
}
.verified-purchase {
  color: gray;
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
