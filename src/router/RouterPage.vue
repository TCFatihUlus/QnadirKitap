<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'RouterPage',
  setup() {
    const router = useRouter();
    return router;
  },
});
</script>
