export default {
  theme: state => state.theme,
  lang: state => state.lang,
  size: state => state.size,
  sect: state => state.sect,
  isMobile: state => state.size == "xs" || state.size == "sm"
}