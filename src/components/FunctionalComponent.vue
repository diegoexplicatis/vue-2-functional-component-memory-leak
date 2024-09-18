<script>
export default {
  name: "FunctionalComponent",
  functional: true,
  render(h) {
    return h("div", { attrs: { id: "functionalDiv" } }, "");
  },
}
</script>

<style lang="scss"></style>