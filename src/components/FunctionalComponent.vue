<script>
export default {
  name: "FunctionalComponent",
  functional: false,
  render(h) {
    return h("div", { attrs: { id: "functionalDiv" } }, "");
  },
}
</script>

<style lang="scss"></style>