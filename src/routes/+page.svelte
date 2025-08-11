<script>
  import {
    ToggleContentCard,
    IconHover,
    Button,
    Modal,
    TextArea,
  } from "svelte-elegant";
  import { Delete, Pen, Plus } from "svelte-elegant/icons-elegant";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";

  let isOpenCreationModal = false;
  let theme;
  themeStore.subscribe((value) => {
    theme = value;
  });

  let tasks = [
    {
      title: "Выписать 50 новых слов в English Assistant",
      details:
        "Среди них должны быть как специализированные термины, так и разговорные слова.",
    },
    {
      title: "Повторить Theory перед собеседованием",
      details: "Сделать упор на технические термины и устойчивые выражения.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Выписать 50 новых слов в English Assistant",
      details:
        "Среди них должны быть как специализированные термины, так и разговорные слова.",
    },
    {
      title: "Повторить Theory перед собеседованием",
      details: "Сделать упор на технические термины и устойчивые выражения.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
  ];

  function modifyTask(index) {
    console.log("Modify clicked, index:", index);
  }
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
    {#each tasks as task, index}
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
            <IconHover isPrimary padding="0.33rem">
              <Pen size="1.44rem" />
            </IconHover>
            <IconHover padding="0.33rem">
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

<Modal bind:isOpen={isOpenCreationModal} padding="8px">
  <TextArea width="100%" label="Text Area" />
</Modal>

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
