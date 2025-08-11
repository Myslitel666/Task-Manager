<script>
  import { Button, Modal, TextArea, TextField } from "svelte-elegant";
  import { Save, CheckMark } from "svelte-elegant/icons-elegant";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";

  export let isOpen = false;
  export let modalTitle = "Title";
  export let isModify = false;
  export let buttonText = "Button Text";
  export let taskTitle = "";
  export let details = "";

  let theme;
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<Modal bind:isOpen padding="14px" width="495px">
  <p class="modal-title">{modalTitle}</p>
  <div class="text-field">
    <TextField bind:value={taskTitle} width="100%" label="Task Title" />
  </div>
  <div class="text-field">
    <TextArea bind:value={details} width="100%" label="Details (optional)" />
  </div>
  <Button width="100%">
    {#if isModify}
      <div style:margin-right="0.3rem" style:margin-top="0.09rem">
        <Save size="1.33rem" fill={theme?.palette.text.main} />
      </div>
    {:else}
      <div style:margin-right="0.2rem" style:margin-top="0.09rem">
        <CheckMark size="1.33rem" fill={theme?.palette.text.main} />
      </div>
    {/if}
    {buttonText}
  </Button>
</Modal>

<style>
  .modal-title {
    font-size: 24px;
    font-weight: 400;
    margin-top: 3px;
    margin-bottom: 17px;
    display: flex;
    justify-content: center;
  }

  .text-field {
    margin-bottom: 14px;
    width: 100%;
  }
</style>
