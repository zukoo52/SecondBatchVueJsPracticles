<template>
  <!-- <center> -->
    <div class="form-header">
      <v-card class="form_width"   elevation="5">
        <div class="pa-4">
        <h2 class="  text-center ">Fill The Form</h2>
        <v-form>
          <div class="mt-10 ml-15 mr-10 ">
          <v-row>
            <v-col lg="12" cols="12">
              <lable><b>Name</b></lable>
              <br>
              <v-text-field lable="lable" varient="outline" placeholder="Enter name..."> </v-text-field>
            </v-col>
            <v-col lg="12" cols="12">
              <lable> <b>Address</b></lable>
              <br>
              <v-text-field lable="lable" varient="outline" placeholder="Enter Address..."><i></i></v-text-field>
            </v-col>
            <v-col lg="12" cols="12">
              <lable><b>Inquery</b></lable>
              <br>
              <v-text-field lable="lable" varient="outline" placeholder="Enter Inquery..."><i></i></v-text-field>
            </v-col>
            <br><br>

            <v-btn  block color="#004DA7"  type="submit" elevation="2"> Submit</v-btn>
            <br>
            <br>

          </v-row>

        </div>
        </v-form>
      </div>
      </v-card>
    </div>
  <!-- </center> -->
</template>

<script>
export default {};
</script>

<style></style>
