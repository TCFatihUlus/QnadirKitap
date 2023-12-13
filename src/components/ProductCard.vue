<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.name">
      <img class="product-image" :src="product.image" />
      <div class="product-name">{{ product.name }}</div>
      <div>
        <div class="product-author">{{ product.author }}</div>
        &nbsp;
        <div class="product-cost">{{ product.cost }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductCard',
  setup() {
    return {
      products: [
        {
          name: 'TÜRK MİTOLOJİSİ 1. CİLT',
          author: 'BAHAEDDİN ÖGEL',
          cost: '27,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/1197175/35/Kitap_2023121314024811971757.jpg',
        },
        {
          name: 'MAVİ VE KARA',
          author: 'SABAHATTİN EYUBOĞLU',
          cost: '7,90₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/781453/35/Kitap_2023121314153278145313.jpg',
        },
        {
          name: 'KULLETEYN',
          author: 'TURAN DURSUN',
          cost: '300,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/447304/35/Kitap_202312131405594473049.jpg',
        },

        {
          name: 'MİTOLOJİ VE İKONOGRAFİ',
          author: 'BEDRETTİN CÖMERT',
          cost: '850,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/342281/35/Kitap_202312131416293422815.jpg',
        },
        {
          name: 'MEMLEKET HİKAYELERİ',
          author: 'REFİK HALİT KARAY',
          cost: '45,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/40847/35/Kitap_20231213141453408474.jpg',
        },
        {
          name: 'TASAVVUF VE TARİKATLAR',
          author: 'SELÇUK ERAYDIN',
          cost: '250,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/483835/35/Kitap_202312131436484838359.jpg',
        },
        {
          name: 'UMACININ PEŞİNDE',
          author: 'RICHARD CHIZMAR',
          cost: '190,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/18770/35/Kitap_20231213144339187702.jpg',
        },
        {
          name: 'YUNUS EMRE(PİYES)',
          author: 'SABAHATTİN ENGİN',
          cost: '9,90₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/119777/35/Kitap_202312131443411197773.jpg',
        },
        {
          name: 'ATLARIN GÜNÜ',
          author: 'ÖMER TURAN',
          cost: '55,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/2078709/35/Kitap_2023121314432320787095.jpg',
        },
        {
          name: 'FELSEFENİN BAŞLANGIÇ İLKELERİ',
          author: 'GEORGES POLITZER',
          cost: '40,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/719864/35/Kitap_202312131443477198642.jpg',
        },
        {
          name: 'KIYAMET YAKLAŞIYOR',
          author: 'DR. İZZET HÜSEYİN',
          cost: '19,90₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/1745653/30/Kitap_2023012713302117456536.jpg',
        },
        {
          name: 'SAĞLIK ÖYKÜLERİ',
          author: 'HİKMET ULUSOY',
          cost: '19,90₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/1745653/35/Kitap_2023121315044717456536.jpg',
        },
        {
          name: 'MARSLILAR',
          author: 'ISAAC ASIMOV',
          cost: '18,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/1980187/35/Kitap_20231213151843198018713.jpg',
        },
        {
          name: 'LALE SESİYDİLER VE YOKTULAR',
          author: 'GÜLSELİ İNAL',
          cost: '80,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/2078709/35/Kitap_20231213151842207870910.jpg',
        },
        {
          name: 'HEP SENİN İÇİN',
          author: 'F. YERBY',
          cost: '20,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/687110/35/Kitap_2023121315150768711011.jpg',
        },
        {
          name: 'KAVGAM',
          author: 'ADOLF HITLER',
          cost: '14,00₺',
          image:
            'https://static.nadirkitap.com/fotograf_t/1980187/34/Kitap_2023120717503619801878.jpg',
        },
      ],
    };
  },
});
</script>

<style scoped></style>
