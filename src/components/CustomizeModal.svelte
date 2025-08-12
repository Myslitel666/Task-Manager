<script>
  import { Button, Modal, TextArea, TextField } from "svelte-elegant";
  import { Save, CheckMark } from "svelte-elegant/icons-elegant";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";
  import {
    clearCashTask,
    tasks,
    addTask,
    removeTask,
    updateTask,
    taskTitle,
    details,
  } from "../stores/tasksStore";

  export let isOpen = false;
  export let modifyTaskIndex = -1;
  export let modalTitle = "Title";
  export let type = "Creation";
  export let buttonText = "Button Text";

  let theme;
  themeStore.subscribe((value) => {
    theme = value;
  });

  $: {
    if (!isOpen) {
      clearCashTask();
    }
  }
</script>

<Modal
  bind:isOpen
  padding="14px"
  width={type === "Deletion" ? "315px" : "495px"}
>
  <p class="modal-title">{modalTitle}</p>
  {#if type !== "Deletion"}
    <div class="text-field">
      <TextField bind:value={$taskTitle} width="100%" label="Task Title" />
    </div>
    <div class="text-field">
      <TextArea bind:value={$details} width="100%" label="Details (optional)" />
    </div>
    <Button
      width="100%"
      onclick={() => {
        if (type === "Modif") updateTask(modifyTaskIndex, $taskTitle, $details);
        else addTask($taskTitle, $details);
        isOpen = false;
      }}
    >
      {#if type === "Modif"}
        <div style:margin-right="0.3rem" style:margin-top="0.09rem">
          <Save size="1.33rem" fill={theme?.palette.text.contrast} />
        </div>
      {:else}
        <div style:margin-right="0.2rem" style:margin-top="0.09rem">
          <CheckMark size="1.33rem" fill={theme?.palette.text.contrast} />
        </div>
      {/if}
      {buttonText}
    </Button>
  {:else}
    <div class="modal-content">
      <p>Are you sure that the task is no longer relevant?</p>
      <div style:display="flex" style:margin-top="10px" style:gap="12.5px">
        <Button
          width="150px"
          onclick={() => {
            removeTask();
            isOpen = false;
          }}
        >
          Yes
        </Button>
        <Button
          width="150px"
          variant="Outlined"
          onclick={() => {
            isOpen = false;
          }}
        >
          No
        </Button>
      </div>
    </div>
  {/if}
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

  .modal-content {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .text-field {
    margin-bottom: 14px;
    width: 100%;
  }
</style>
