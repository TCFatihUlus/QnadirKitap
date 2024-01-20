<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    title: '> Bilim ve Teknik',

    link: 'https://quasar.dev',
  },
  {
    title: '> Çizgi Roman',

    link: 'https://github.com/quasarframework',
  },
  {
    title: '> Çocuk Kitapları',

    link: 'https://chat.quasar.dev',
  },
  {
    title: '> Din',

    link: 'https://forum.quasar.dev',
  },
  {
    title: '> Edebiyat',

    link: 'https://twitter.quasar.dev',
  },
  {
    title: '> Ekonomi & İş Dünyası',

    link: 'https://facebook.quasar.dev',
  },
  {
    title: '> Felsefe & Düşünce',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Hukuk',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Osmanlıca',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Referans & Başvuru',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sağlık',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sanat',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sınav ve Ders Kitapları',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Spor',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Tarih',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Toplum & Siyaset',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Diğer & Çeşitli',

    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'EssentialLink',

  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
