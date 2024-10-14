export const loadFont = async () => {
  return await fetch(new URL("../assets/Roboto-Medium.ttf", import.meta.url), {
    cache: "force-cache",
  }).then((res) => res.arrayBuffer())
}
