<script>
  export let type = "";
  export let id="";
  export let disabled=false;
</script>

<style>
  .elementor *,
  .elementor :after,
  .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .elementor-button {
    display: inline-block;
    line-height: 1;
    background-color: #818a91;
    color: #fff;
    fill: #fff;
    text-align: center;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  a,
  a:hover,
  a:focus {
    text-decoration: none;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  a {
    color: #172b68;
  }
  .elementor-animation-float {
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;
  }
  .elementor-button {
    background-color: #818a91;
    color: white;
    font-weight: bold;
    border-radius: 30px !important;
    padding: 1em 3em !important;
  }
  .elementor-button:hover {
    background: #235788;
  }
  .elementor-button[type="submit"] {
      background: #172b68;
  }
  .elementor-button[type="submit"]:hover{
      background: #235788;
  }

  .elementor a {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
  }
  .elementor-align-center .elementor-button {
    width: auto;
  }

  .elementor-button.elementor-size-xl {
    padding: 0.5em;
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  button:focus {
    border: 1px solid #00000000;
    background: #172b68;
  }
</style>

<div
  class="elementor-element elementor-element-d0ebb8e elementor-align-center
  elementor-widget elementor-widget-button"
  data-id="d0ebb8e"
  data-element_type="widget"
  data-widget_type="button.default">
  <div class="elementor-widget-container">
    <div class="elementor-button-wrapper">
      {#if type === 'submit'}
        <button
          id={id}
          disabled={disabled}
          class="elementor-button-link elementor-button elementor-size-xl
          elementor-animation-float"
          type="submit"
          role="button">
          <span class="elementor-button-content-wrapper">
            <span class="elementor-button-text">

              <slot />

            </span>
          </span>
        </button>
      {:else}
        <a
          id={id}
          disabled={disabled}
          style="cursor: pointer"
          on:click
          class="elementor-button-link elementor-button elementor-size-xl
          elementor-animation-float"
          role="button">
          <span class="elementor-button-content-wrapper">
            <span class="elementor-button-text">

              <slot />

            </span>
          </span>
        </a>
      {/if}
    </div>
  </div>
</div>
