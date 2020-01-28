<script>
  export let steps = [];
  export let index = 0;
</script>

<style>
  .selected {
    color: #ffa500;
  }
  .complited {
    color: #176825;
  }
  b {
    color: #666;
  }
  b:hover {
    color: #ff6e45;
  }
  .wizzard-wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
  .wizzard-content {
    width: 100%;
    /* background: #f8f8f8; */
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding: 1em;
    margin-bottom: 2em;
    margin-top: 1em;
    /* -webkit-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.26); */
    -moz-box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.26);
    /* box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.26); */

    cursor: pointer;
  }

  .wizzard-content-selected {
    border-bottom: 2px solid #ffa500;
  }
</style>

<div class="wizzard-wrapper">
  {#each steps as s, idx}
    {#if idx === index}
      <div
        class="wizzard-content wizzard-content-selected"
        on:click={() => {
          index = idx;
        }}>
        <b class="selected">{s.label}</b>
      </div>
    {:else}
      <div
        class="wizzard-content"
        on:click={() => {
          index = idx;
        }}>
        <b>{s.label}</b>
      </div>
    {/if}
  {/each}
</div>
