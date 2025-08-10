<script>
  import { ToggleContentCard, IconHover, Button } from "svelte-elegant";
  import { Delete, Pen, Plus } from "svelte-elegant/icons-elegant";

  import { themeStore } from "svelte-elegant/stores/ElementIdStore";

  let theme;

  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<div class="toggle-content-cards">
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p
          style:color={theme?.palette.text.neutral}
          style:transition="color 0.3s"
        >
          Выписать 50 новых слов в English Assistant
        </p>
      </div>
      <div slot="detailes" style:padding-right="54px">
        <p style:text-indent="19px">
          Среди них должны быть как специализированные термины, так и
          разговорные слова.
        </p>
        <div
          style:display="flex"
          style:aligh-items="center"
          style:justify-content="center"
        >
          <Button
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
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p
          style:color={theme?.palette.text.neutral}
          style:transition="color 0.3s"
        >
          Выписать 50 новых слов в English Assistant
        </p>
      </div>
      <div slot="detailes" style:padding-right="47.5px">
        <p>
          Среди них должны быть как специализированные термины, так и
          разговорные слова.
        </p>
        <div
          style:display="flex"
          style:aligh-items="center"
          style:justify-content="center"
        >
          <Button
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
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p
          style:color={theme?.palette.text.neutral}
          style:transition="color 0.3s"
        >
          Выписать 50 новых слов в English Assistant
        </p>
      </div>
      <div slot="detailes" style:padding-right="47.5px">
        <p>
          Среди них должны быть как специализированные термины, так и
          разговорные слова.
        </p>
        <div
          style:display="flex"
          style:aligh-items="center"
          style:justify-content="center"
        >
          <Button
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
</div>

<style>
  .card {
    justify-content: center;
    width: 100%;
    max-width: 525px;
    line-height: 1.5;
  }

  .toggle-content-cards {
    display: flex;
    align-items: center; /* Центрируем карточки по горизонтали */
    flex-direction: column;
    margin-bottom: 0.25rem;
    padding-top: 0.58rem;
    padding-left: 0.66rem;
    padding-right: 0.18rem;
    box-sizing: border-box;
    width: 100vw;
  }
</style>
