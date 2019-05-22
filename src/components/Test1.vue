<script>
export default {
  name: 'test1',
  // functional: true,
  props: ['a'],
  render(h, context) {
    console.log(this);
    return <div >test1</div>;
  }
};
</script>