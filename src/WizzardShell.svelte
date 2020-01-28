<script>
    export let identifier;
    export let step;
</script>

<div style={step === identifier ? 'display: block;' : 'display: none;'}>
  <slot />
</div>
