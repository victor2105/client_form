<script>
  import { onMount } from "svelte";
  import Wizzard from "./Wizzard.svelte";
  import { createForm } from "./activeCampaign.js";
  import Button from "./Button.svelte";
  import WizzardShell from "./WizzardShell.svelte";
  import { uploadBlobFile } from "./firebase";

  const steps = [
    {
      identifier: "1",
      label: "Parte 1",
      status: "incomplete"
    },
    {
      identifier: "2",
      label: "Parte 2",
      status: "incomplete",
      title:
        "VOCE ESTA QUASE LA...PREENCHAS AS INFORMACOES ADICIONAIS PARA CRIAR O SEU CADASTRO "
    }
  ];

  let index = 0;

  $: step = steps[index].identifier;

  function previews() {
    index = index - 1;
  }

  function next() {
    index = index + 1;
  }

  function addListeners() {
    const form = document.getElementById("_form_9_");
    form.addEventListener("submit", function() {
      if (this.checkValidity() == false) {
        index = 0;
        return false;
      }
    });
  }

  let cpf,
    file1,
    file2,
    loading1 = "",
    loading2 = "",
    extratoEmpresa,
    extratoPessoal;
  function uploadExtratoEmpresa() {
    console.log(file1.files);
    uploadFile(
      cpf.value,
      file1.files[0].name,
      file1.files[0],
      function(link) {
        extratoEmpresa.value = link;
      },
      function(progress) {
        loading1 = progress;
      }
    );
  }

  function uploadExtratoPessoal() {
    uploadFile(
      cpf.value,
      file2.files[0].name,
      file2.files[0],
      function(link) {
        extratoPessoal.value = link;
      },
      function(progress) {
        loading2 = progress;
      }
    );
  }

  function uploadFile(cpfStr, fileName, file, callBack, progress) {
    if (cpfStr === undefined || cpfStr == "") {
      return uploadBlobFile("no_cpf", fileName, file, callBack, progress);
    }
    return uploadBlobFile(cpfStr, fileName, file, callBack, progress);
  }

  function masks() {
    jQuery(":input").inputmask();
  }

  onMount(masks);
  onMount(createForm);
  onMount(addListeners);
</script>

<style>
  .buttons {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  #_form_9_ {
    font-size: 14px;
    line-height: 1.6;
    font-family: arial, helvetica, sans-serif;
    margin: 0;
  }
  #_form_9_ * {
    outline: 0;
  }
  ._form_hide {
    display: none;
    visibility: hidden;
  }
  ._form_show {
    display: block;
    visibility: visible;
  }
  #_form_9_._form-top {
    top: 0;
  }
  #_form_9_._form-bottom {
    bottom: 0;
  }
  #_form_9_._form-left {
    left: 0;
  }
  #_form_9_._form-right {
    right: 0;
  }
  #_form_9_ input[type="email"],
  #_form_9_ input[type="tel"],
  #_form_9_ input[type="text"],
  #_form_9_ input[type="date"],
  #_form_9_ textarea {
    padding: 6px;
    height: auto;
    border: #979797 1px solid;
    border-radius: 4px;
    color: #000 !important;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #_form_9_ textarea {
    resize: none;
  }
  #_form_9_ ._submit {
    -webkit-appearance: none;
    cursor: pointer;
    font-family: arial, sans-serif;
    font-size: 14px;
    text-align: center;
    background: #ff6e45 !important;
    border: 3px solid #ff6e45 !important;
    -moz-border-radius: 15px !important;
    -webkit-border-radius: 15px !important;
    border-radius: 15px !important;
    color: #f2f2f2 !important;
    padding: 15px !important;
  }
  #_form_9_ ._close-icon {
    cursor: pointer;
    background-image: url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");
    background-repeat: no-repeat;
    background-size: 14.2px 14.2px;
    position: absolute;
    display: block;
    top: 11px;
    right: 9px;
    overflow: hidden;
    width: 16.2px;
    height: 16.2px;
  }
  #_form_9_ ._close-icon:before {
    position: relative;
  }
  #_form_9_ ._form-body {
    margin-bottom: 30px;
  }
  #_form_9_ ._form-image-left {
    width: 150px;
    float: left;
  }
  #_form_9_ ._form-content-right {
    margin-left: 164px;
  }
  #_form_9_ ._form-branding {
    color: #fff;
    font-size: 10px;
    clear: both;
    text-align: left;
    margin-top: 30px;
    font-weight: 100;
  }
  #_form_9_ ._form-branding ._logo {
    display: block;
    width: 130px;
    height: 14px;
    margin-top: 6px;
    background-image: url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");
    background-size: 130px auto;
    background-repeat: no-repeat;
  }
  #_form_9_ ._form-label,
  #_form_9_ ._form_element ._form-label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  #_form_9_._dark ._form-branding {
    color: #333;
  }
  #_form_9_._dark ._form-branding ._logo {
    background-image: url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png");
  }
  #_form_9_ ._form_element {
    position: relative;
    margin-bottom: 10px;
    font-size: 0;
    max-width: 100%;
  }
  #_form_9_ ._form_element * {
    font-size: 14px;
  }
  #_form_9_ ._form_element._clear {
    clear: both;
    width: 100%;
    float: none;
  }
  #_form_9_ ._form_element._clear:after {
    clear: left;
  }
  #_form_9_ ._form_element input[type="email"],
  #_form_9_ ._form_element input[type="tel"],
  #_form_9_ ._form_element input[type="text"],
  #_form_9_ ._form_element input[type="date"],
  #_form_9_ ._form_element select,
  #_form_9_ ._form_element textarea:not(.g-recaptcha-response) {
    display: block;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #_form_9_ ._field-wrapper {
    position: relative;
  }
  #_form_9_ ._inline-style {
    float: left;
  }
  #_form_9_ ._inline-style input[type="email"],
  #_form_9_ ._inline-style input[type="tel"],
  #_form_9_ ._inline-style input[type="text"] {
    width: 150px;
  }
  #_form_9_ ._inline-style:not(._clear) + ._inline-style:not(._clear) {
    margin-left: 20px;
  }
  #_form_9_ ._form_element img._form-image {
    max-width: 100%;
  }
  #_form_9_ ._clear-element {
    clear: left;
  }
  #_form_9_ ._full_width {
    width: 100%;
  }
  #_form_9_ ._form_full_field {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
  #_form_9_ input[type="email"]._has_error,
  #_form_9_ input[type="tel"]._has_error,
  #_form_9_ input[type="text"]._has_error,
  #_form_9_ textarea._has_error {
    border: #f37c7b 1px solid;
  }
  #_form_9_ input[type="checkbox"]._has_error {
    outline: #f37c7b 1px solid;
  }
  #_form_9_ ._error {
    display: block;
    position: absolute;
    font-size: 14px;
    z-index: 10000001;
  }
  #_form_9_ ._error._above {
    padding-bottom: 4px;
    bottom: 39px;
    right: 0;
  }
  #_form_9_ ._error._below {
    padding-top: 4px;
    top: 100%;
    right: 0;
  }
  #_form_9_ ._error._above ._error-arrow {
    bottom: 0;
    right: 15px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #f37c7b;
  }
  #_form_9_ ._error._below ._error-arrow {
    top: 0;
    right: 15px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #f37c7b;
  }
  #_form_9_ ._error-inner {
    padding: 8px 12px;
    background-color: #f37c7b;
    font-size: 14px;
    font-family: arial, sans-serif;
    color: #fff;
    text-align: center;
    text-decoration: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  #_form_9_ ._error-inner._form_error {
    margin-bottom: 5px;
    text-align: left;
  }
  #_form_9_ ._button-wrapper ._error-inner._form_error {
    position: static;
  }
  #_form_9_ ._error-inner._no_arrow {
    margin-bottom: 10px;
  }
  #_form_9_ ._error-arrow {
    position: absolute;
    width: 0;
    height: 0;
  }
  #_form_9_ ._error-html {
    margin-bottom: 10px;
  }

  .pika-single {
    z-index: 10000001 !important;
  }
  @media all and (min-width: 320px) and (max-width: 667px) {
    ::-webkit-scrollbar {
      display: none;
    }
    #_form_9_ {
      margin: 0;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    #_form_9_ * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 1em;
    }
    #_form_9_ ._form-content {
      margin: 0;
      width: 100%;
    }
    #_form_9_ ._form-inner {
      display: block;
      min-width: 100%;
    }
    #_form_9_ ._form-title,
    #_form_9_ ._inline-style {
      margin-top: 0;
      margin-right: 0;
      margin-left: 0;
    }
    #_form_9_ ._form-title {
      font-size: 1.2em;
    }
    #_form_9_ ._form_element {
      margin: 0 0 20px;
      padding: 0;
      width: 100%;
    }
    #_form_9_ ._form-element,
    #_form_9_ ._inline-style,
    #_form_9_ input[type="email"],
    #_form_9_ input[type="tel"],
    #_form_9_ input[type="text"],
    #_form_9_ label,
    #_form_9_ p,
    #_form_9_ textarea:not(.g-recaptcha-response) {
      float: none;
      display: block;
      width: 100%;
    }
    #_form_9_ ._row._checkbox-radio label {
      display: inline;
    }
    #_form_9_ ._row,
    #_form_9_ p,
    #_form_9_ label {
      margin-bottom: 0.7em;
      width: 100%;
    }
    #_form_9_ ._row input[type="checkbox"],
    #_form_9_ ._row input[type="radio"] {
      margin: 0 !important;
      vertical-align: middle !important;
    }
    #_form_9_ ._row input[type="checkbox"] + span label {
      display: inline;
    }
    #_form_9_ ._row span label {
      margin: 0 !important;
      width: initial !important;
      vertical-align: middle !important;
    }
    #_form_9_ ._form-image {
      max-width: 100%;
      height: auto !important;
    }
    #_form_9_ input[type="email"],
    #_form_9_ input[type="tel"],
    #_form_9_ input[type="text"] {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 16px;
      line-height: 1.3em;
      -webkit-appearance: none;
    }
    #_form_9_ input[type="radio"],
    #_form_9_ input[type="checkbox"] {
      display: inline-block;
      width: 1.3em;
      height: 1.3em;
      font-size: 1em;
      margin: 0 0.3em 0 0;
      vertical-align: baseline;
    }
    #_form_9_ button[type="submit"] {
      padding: 20px;
      font-size: 1.5em;
    }
    #_form_9_ ._inline-style {
      margin: 20px 0 0 !important;
    }
  }
  #_form_9_ {
    position: relative;
    text-align: left;
    margin: 25px auto 0;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    *zoom: 1;
    background: #f2f2f2 !important;
    border: 0px solid #b0b0b0 !important;
    width: 450px;
    -moz-border-radius: 30px !important;
    -webkit-border-radius: 30px !important;
    border-radius: 30px !important;
    color: #172b68 !important;
  }
  #_form_9_ ._form-title {
    font-size: 22px;
    line-height: 22px;
    font-weight: 600;
    margin-bottom: 0;
  }
  #_form_9_:before,
  #_form_9_:after {
    content: " ";
    display: table;
  }
  #_form_9_:after {
    clear: both;
  }
  #_form_9_._inline-style {
    width: auto;
    display: inline-block;
  }
  #_form_9_._inline-style input[type="email"],
  #_form_9_._inline-style input[type="tel"],
  #_form_9_._inline-style input[type="text"],
  #_form_9_._inline-style input[type="date"] {
    padding: 10px 12px;
  }
  #_form_9_._inline-style button._inline-style {
    position: relative;
    top: 27px;
  }
  #_form_9_._inline-style p {
    margin: 0;
  }
  #_form_9_._inline-style ._button-wrapper {
    position: relative;
    margin: 27px 12.5px 0 20px;
  }
  #_form_9_ ._form-thank-you {
    position: relative;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 18px;
  }
  @media all and (min-width: 320px) and (max-width: 667px) {
    #_form_9_._inline-form._inline-style ._inline-style._button-wrapper {
      margin-top: 20px !important;
      margin-left: 0 !important;
    }
  }

  #_form_9_ ._x29228999 ._form-title {
    text-align: center;
  }
  #_form_9_ ._field3 select {
    border-style: solid;
    border-width: 1px;
    border-color: #979797;
  }
  #_form_9_ ._field4 select {
    border-style: solid;
    border-width: 1px;
    border-color: #979797;
  }
  #_form_9_ ._form_1 {
    padding: 25px 25px 25px 25px;
  }
  #_form_9_ ._field5 select {
    border-style: solid;
    border-width: 1px;
    border-color: #979797;
  }
  #_form_9_ ._submit {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  ._error-inner {
    color: red;
  }
</style>

<form
  method="POST"
  action="https://renaned6841.activehosted.com/proc.php"
  id="_form_9_"
  class="_form _form_9 _inline-form _dark"
  novalidate>
  <input type="hidden" name="u" value="9" />
  <input type="hidden" name="f" value="9" />
  <input type="hidden" name="s" />
  <input type="hidden" name="c" value="0" />
  <input type="hidden" name="m" value="0" />
  <input type="hidden" name="act" value="sub" />
  <input type="hidden" name="v" value="2" />
  <div class="_form-content">
    <div class="_form_element _x29228999 _full_width _clear">
      <div class="_form-title">
        Cadastre-se e receba o contato de um dos nossos consultores
      </div>
    </div>
    <Wizzard {steps} bind:index />
    <WizzardShell {step} identifier="1">
      <div class="_form_element _field8 _full_width ">
        <label class="_form-label">Valor*</label>
        <div class="_field-wrapper">
          <input
            type="text"
            name="field[8]"
            value=""
            placeholder="0"
            required />
        </div>
      </div>
      <div class="_form_element _field9 _full_width ">
        <label class="_form-label">Número de parcelas*</label>
        <div class="_field-wrapper">
          <input
            type="text"
            name="field[9]"
            value=""
            placeholder="0"
            required />
        </div>
      </div>
      <div class="_form_element _field11 _full_width ">
        <label class="_form-label">Total do empréstimo*</label>
        <div class="_field-wrapper">
          <input
            type="text"
            name="field[11]"
            value=""
            placeholder="0"
            required />
        </div>
      </div>
      <div class="_form_element _x05439407 _full_width ">
        <label class="_form-label">Nome Completo*</label>
        <div class="_field-wrapper">
          <input type="text" name="fullname" placeholder="" required />
        </div>
      </div>
      <div class="_form_element _x58989238 _full_width ">
        <label class="_form-label">Email*</label>
        <div class="_field-wrapper">
          <input type="text" id="email" name="email" placeholder="" required />
          <div id="msgemail" />
        </div>
      </div>
      <div class="_form_element _field6 _full_width ">
        <label class="_form-label">CPF*</label>
        <div class="_field-wrapper">
          <input
            type="text"
            bind:this={cpf}
            name="field[6]"
            id="cpf"
            value=""
            placeholder="___.___.___-__"
            data-inputmask="'mask': '999.999.999-99'"
            required />
        </div>
      </div>
      <div class="_form_element _field7 _full_width ">
        <label class="_form-label">Data de nascimento</label>
        <div class="_field-wrapper">
          <input
            type="text"
            name="field[7]"
            value=""
            placeholder="__/__/____"
            data-inputmask="'mask': '99/99/9999'" />
        </div>
      </div>
      <div class="_form_element _field2 _full_width ">
        <label class="_form-label">Telefone (DDD)*</label>
        <div class="_field-wrapper">
          <input
            type="tel"
            name="field[2]"
            value=""
            required
            placeholder="(___) _____ ____"
            data-inputmask="'mask': '(999) 99999 9999'" />
        </div>
      </div>
      <div class="_form_element _field1 _full_width ">
        <label class="_form-label">CNPJ</label>
        <div class="_field-wrapper">
          <input
            type="text"
            name="field[1]"
            value=""
            placeholder="XX.XXX.XXX/YYYY-ZZ"
            data-inputmask="'mask': '99.999.999/9999-99'" />
        </div>
      </div>
      <div class="_form_element _field10 _full_width ">
        <label class="_form-label">Razão social da empresa</label>
        <div class="_field-wrapper">
          <input type="text" name="field[10]" value="" placeholder="" />
        </div>
      </div>

      <div class="buttons">
        <div />
        <Button id="_form_9_submit" on:click={next}>Próximo</Button>
      </div>
    </WizzardShell>

    <WizzardShell {step} identifier="2">
      <div class="_form_element _x93703049 _full_width ">
        <label class="_form-label">Telefone fixo</label>
        <div class="_field-wrapper">
          <input
            type="tel"
            name="phone"
            placeholder="(___) _____ ____"
            data-inputmask="'mask': '(999) 99999 9999'" />
          <span class="help-block" />
        </div>
      </div>
      <div class="_form_element _field12 _full_width ">
        <label class="_form-label">Nome da mãe</label>
        <div class="_field-wrapper">
          <input type="text" name="field[12]" value="" placeholder="" />
        </div>
      </div>
      <div class="_form_element _field13 _full_width ">
        <label class="_form-label">Endereço</label>
        <div class="_field-wrapper">
          <input type="text" name="field[13]" value="" placeholder="" />
        </div>
      </div>
      <div class="_form_element _field15 _full_width ">
        <label class="_form-label">Cidade</label>
        <div class="_field-wrapper">
          <input type="text" name="field[15]" value="" placeholder="" />
        </div>
      </div>
      <div class="_form_element _field17 _full_width ">
        <label class="_form-label">Estado</label>
        <div class="_field-wrapper">
          <input type="text" name="field[17]" value="" placeholder="" />
        </div>
      </div>
      <div class="_form_element _field16 _full_width ">
        <label class="_form-label">CEP</label>
        <div class="_field-wrapper">
          <input type="text" name="field[16]" value="" />
        </div>
      </div>
      <div class="_form_element _field14 _full_width ">
        <label class="_form-label">Renda bruta mensal</label>
        <div class="_field-wrapper">
          <input type="text" name="field[14]" value="" placeholder="" />
        </div>
      </div>

      <div class="_form_element _field18 _full_width ">
        <label class="_form-label">
          Anexar extrato movimentação bancaria dos últimos 3 meses da empresa*
        </label>
        <div class="_field-wrapper">
          <input
            type="file"
            bind:this={file1}
            on:change={uploadExtratoEmpresa}
            name="extratoEmpresa"
            value=""
            placeholder=""
            required />
        </div>
        <p>{loading1}</p>
      </div>

      <div class="_form_element _field19 _full_width ">
        <label class="_form-label">
          Anexar Extrato movimentação bancaria dos últimos 3 meses pessoa
          física*
        </label>
        <div class="_field-wrapper">
          <input
            type="file"
            bind:this={file2}
            on:change={uploadExtratoPessoal}
            name="extratoPessoal"
            value=""
            placeholder=""
            required />
        </div>
        <p>{loading2}</p>
      </div>

      <input
        type="hidden"
        bind:this={extratoEmpresa}
        name="field[18]"
        value=""
        placeholder="" />

      <input
        type="hidden"
        bind:this={extratoPessoal}
        name="field[19]"
        value=""
        placeholder="" />

      <div class="buttons">
        <Button on:click={previews}>Anterior</Button>
        <Button on:click={previews} type="submit">Enviar</Button>
      </div>
      <div class="_clear-element" />
    </WizzardShell>
    <div class="_form_element _x89311961 _full_width _clear">
      <div class="_html-code" />
    </div>
  </div>
  <div class="_form-thank-you" style="display:none;" />
</form>
