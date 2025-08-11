<script>
  import {
    ToggleContentCard,
    IconHover,
    Button,
    ScrollbarContainer,
  } from "svelte-elegant";
  import { Delete, Pen, Plus } from "svelte-elegant/icons-elegant";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";

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
      title: "Повторить слова перед собеседованием",
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
      title: "Повторить слова перед собеседованием",
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
    style:height="calc(100dvh - 127.5px)"
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
            <div
              style:display="flex"
              style:aligh-items="center"
              style:justify-content="center"
            >
              <Button
                onclick={() => modifyTask(index)}
                variant="Outlined"
                width="100%"
                marginTop="0.45rem"
                marginBottom="0.66rem"
                maxWidth="310px"
              >
                <Pen size="1.25rem" />
                <span style:margin-left="0.25rem">Modify Task</span>
              </Button>
            </div>
          </div>
          <div slot="actions" style:margin-left="0.25rem">
            <IconHover padding="0.33rem">
              <Delete size="1.66rem" />
            </IconHover>
          </div>
        </ToggleContentCard>
      </div>
    {/each}
  </div>
</div>

<div
  style:position="absolute"
  style:width="100vw"
  style:justify-content="center"
  style:align-items="center"
  style:display="flex"
  style:bottom="0"
  style:padding-bottom="8px"
>
  <Button variant="Outlined" width="100%" maxWidth="310px">
    <Pen size="1.25rem" />
    <span style:margin-left="0.25rem">Modify Task</span>
  </Button>
</div>

<style>
  .card {
    width: 100%;
    line-height: 1.5;
  }

  .toggle-content-cards {
    justify-content: center;
    display: flex;
    padding-top: 0.58rem;
    padding-left: 0.66rem;
    padding-right: 0.18rem;
    box-sizing: border-box;
    width: 100vw;
  }
</style>
