import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { createToaster } from '@meforma/vue-toaster';
import { handleSignOut } from '../service/common/authStateService';

export function useAuthComposable() {
  const store = useStore();
  const router = useRouter();
  const toaster = createToaster();

  const isLoggedIn = computed(() => store.getters.isLoggedIn);

  async function signOut() {
    await handleSignOut(store, router, toaster);
  }

  return { isLoggedIn, signOut };
}