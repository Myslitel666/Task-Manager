<script>
  import "../app.css";
  import { ThemeProvider, Header, ColorThemeSwitch } from "svelte-elegant";
  import { ScrollbarContainer } from "svelte-elegant";
  import { themeStore } from "svelte-elegant/stores/themeStore";
  import { ImageThemeTransition } from "svelte-elegant";

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });
</script>

<Header height="3.42rem">
  <button style:gap="0.5rem">
    <ImageThemeTransition
      transitionSeconds="0.6"
      size="2.66rem"
      srcImages={["/light-mega2.png", "/dark-mega2.png"]}
    />
    <p style:font-size="26px">
      <span
        style:margin-left=""
        style:color={theme?.palette.primary}
        style:transition="all 0.3s"
      >
        Task Manager
      </span>
    </p>
  </button>
  <div style:margin-left="auto" style:margin-right="0.25rem">
    <ColorThemeSwitch />
  </div>
</Header>

<ThemeProvider>
  <ScrollbarContainer>
    <slot />
  </ScrollbarContainer>
</ThemeProvider>

<style>
</style>
