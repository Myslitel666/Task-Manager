<script>
  import { ToggleContentCard, IconHover, Button, Modal } from "svelte-elegant";
  import { Delete, Pen, Plus, CheckMark } from "svelte-elegant/icons-elegant";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";
  import CustomizeModal from "../components/CustomizeModal.svelte";
  import { tasks, taskTitle, details } from "../stores/tasksStore";

  let isOpenCreationModal = false;
  let isOpenDeletionModal = false;
  let isOpenModifyModal = false;
  let modifyTaskIndex = -1;
  let theme;
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div class="toggle-content-cards">
  <div
    style:width="100%"
    style:max-width="525px"
    style:display="flex"
    style:flex-direction="column"
    style:align-items="center"
    style:max-height="calc(100dvh - 127.5px)"
    style:overflow="auto"
    style:box-sizing="border-box"
  >
    {#each $tasks as task, index}
      <div class="card">
        <ToggleContentCard width="100%">
          <div slot="content">
            <p
              style:color={theme?.palette.text.neutral}
              style:transition="color 0.3s"
            >
              {task.title}
            </p>
          </div>

          <div slot="detailes" style:padding-right="54px">
            <p style:text-indent="19px">{task.details}</p>
          </div>
          <div
            slot="actions"
            style:margin-left="0.25rem"
            style:margin-right="0.25rem"
          >
            <IconHover
              onclick={() => {
                isOpenModifyModal = true;
                $details = $tasks[index].details;
                $taskTitle = $tasks[index].title;
                modifyTaskIndex = index;
              }}
              isPrimary
              padding="0.33rem"
            >
              <Pen size="1.44rem" />
            </IconHover>
            <IconHover
              onclick={() => {
                isOpenDeletionModal = true;
              }}
              padding="0.33rem"
            >
              <Delete size="1.58rem" />
            </IconHover>
          </div>
        </ToggleContentCard>
      </div>
    {/each}
  </div>
  <Button
    variant="Outlined"
    width="100%"
    maxWidth="525px"
    onclick={() => {
      isOpenCreationModal = true;
    }}
  >
    <Plus size="2.25rem" />
    <span style:margin-left="-0.25rem">Create Task</span>
  </Button>
</div>

<CustomizeModal
  bind:isOpen={isOpenDeletionModal}
  type="Deletion"
  modalTitle="Deletion Task"
  buttonText="Create Task"
/>
<CustomizeModal
  bind:isOpen={isOpenCreationModal}
  type="Creation"
  modalTitle="Creation Task"
  buttonText="Create Task"
/>
<CustomizeModal
  bind:isOpen={isOpenModifyModal}
  bind:modifyTaskIndex
  type="Modif"
  modalTitle="Modification Task"
  buttonText="Save Task"
/>

<style>
  .card {
    width: 100%;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  .toggle-content-cards {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-top: 0.58rem;
    padding-left: 0.66rem;
    padding-right: 0.66rem;
    box-sizing: border-box;
    width: 100vw;
  }
</style>
