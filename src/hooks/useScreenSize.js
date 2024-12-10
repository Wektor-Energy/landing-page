import { ref, onMounted, onUnmounted } from 'vue';

export function useScreenSize() {
    const threshold = 830

    const isSmallScreen = ref(window.innerWidth <= threshold);

    const checkScreenSize = () => {
        isSmallScreen.value = window.innerWidth <= threshold;
    };

    onMounted(() => {
        window.addEventListener('resize', checkScreenSize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    return {
        isSmallScreen,
    };
}