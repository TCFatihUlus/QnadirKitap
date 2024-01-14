<template>
  <q-page>
    <div>
      <q-list>
        <q-item-label header>Sahaflar</q-item-label>
        <q-item v-for="(sahaf, index) in sahaflar" :key="index">
          <q-item-label>
            {{ sahaf.name }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
<script lang="ts">
import { collection, getDocs, query } from 'firebase/firestore/lite';

import { createApp } from 'vue';

export default createApp({
  name: 'BookSellers',

  data() {
    return {
      sahaflar: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.sahaflar = [];
      const q = query(collection(this.$db, this.sahaflar));
      const querySnaphot = await getDocs(q);
      querySnaphot.forEach((sahaf) => {
        this.sahaflar.push(sahaf.data());
      });
    },
  },
  mounted: function () {
    this.refreshData();
  },
});
</script>
