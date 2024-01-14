<template>
  <div class="q-pa-md" id="q-pa-md">
    <q-carousel
      class="carousel"
      id="carousel"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1">
        <img src="../assets/s91.jpg" />
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <img src="../assets/s103.jpg" />
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <img src="../assets/s113.jpg" />
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <img src="../assets/s124.jpg" />
      </q-carousel-slide>
      <q-carousel-slide :name="5">
        <img src="../assets/s127.jpg" />
      </q-carousel-slide>
      <q-carousel-slide :name="6">
        <img src="../assets/s132.jpg" />
      </q-carousel-slide>
      <q-carousel-slide :name="7">
        <img src="../assets/s135.jpg" />
      </q-carousel-slide>
      <q-carousel-slide :name="8">
        <img src="../assets/s136.jpg" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>
<style>
#carousel {
  width: 895px;
  height: 396px;
}
#q-pa-md {
  vertical-align: top;
  width: 895px;
  height: 396px;
}
.scroll {
  overflow: hidden;
}
.q-btn {
  text-transform: unset;
  font-weight: 400;
  text-align: center;
}
.q-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}

.q-btn-dropdown--simple * + .q-btn-dropdown__arrow {
  margin-left: 0px;
  display: inline-block;
  width: 0px;
  transition: none;
}
.rotate-180 {
  transform: none;
}
.block {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 70px;
}
</style>
