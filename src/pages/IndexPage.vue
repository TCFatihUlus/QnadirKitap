<template>
  <q-page id="row-items-center-justify-evenly">
    <CarouselSlide></CarouselSlide>
    <div>
      <example-component
        title="Kitaplar"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
    </div>
  </q-page>
</template>

<script lang="ts" src="">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import CarouselSlide from 'src/components/CarouselSlide.vue';

export default defineComponent({
  name: 'IndexPage',

  components: { ExampleComponent, CarouselSlide },

  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
<style>
#row-items-center-justify-evenly {
  height: 1500px;
}
</style>
