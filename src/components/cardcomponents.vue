<template>
  <div class="pa-15">
    <!--pa-4 means padding 4  -->

    <div class="mt-10"></div>
    <!--md-10 means spacing   -->
    <div class="mt-10"></div>
    <v-row>
      <v-col lg="4" cols="12">
        <v-sheet :elevation="8" :height="600" :width="450" border color="grey-lighten-1">
          <v-img src="@\assets\butterfly cycle (4).jpg"></v-img>
          <h1 class="text-center">Egg Stage</h1>
          <p class="pa-2  text-justify" >
            The butterfly's life cycle begins with the egg stage. Female
            butterflies lay their eggs on host plants, ensuring a food source
            for the emerging caterpillars. These eggs are tiny, often resembling
            small dots, and can vary in color and texture. Within days to weeks,
            the eggs hatch, marking the beginning of the caterpillar stage
          </p>
        </v-sheet>
      </v-col>
      <v-col lg="4" cols="12"
        ><v-sheet :elevation="8" :height="600" :width="450" border color="red-lighten-5"
          ><v-img src="@\assets\butterfly cycle (3).jpg"></v-img>

          <h1 class="text-center">Caterpillar: The Feeding Stage</h1>
          <p class="pa-2  text-justifyr">
            The caterpillar, or larva, stage follows the egg stage. During this
            period, the caterpillar's primary activity is eating, consuming vast
            amounts of the host plant to grow rapidly. As it grows, it molts
            several times, shedding its skin to accommodate its increasing size.
            This stage is crucial for storing energy for the next phase
          </p>
        </v-sheet></v-col
      >
      <v-col lg="4" cols="12"
        ><v-sheet :elevation="8" :height="600" :width="450" border color="red-lighten-5"
          ><v-img src="@\assets\butterfly cycle (2).jpg"></v-img>
          <h1 class=" text-center">Pupa: The Transition Stage</h1>
          <p class=" pa-2 text-justify">
            In the pupa stage, the caterpillar transforms into a chrysalis.
            Inside this protective casing, the caterpillar undergoes a
            remarkable metamorphosis. Its body breaks down and reorganizes into
            the adult butterfly. This stage can last from a few weeks to several
            months, depending on the species and environmental conditions.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
