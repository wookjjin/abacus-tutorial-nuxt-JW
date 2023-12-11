// by convetion, composable function 이름은 "use"로 시작
export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  function updatePosition(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', updatePosition))
  onUnmounted(() => window.removeEventListener('mousemove', updatePosition))

  return { x, y }
}
