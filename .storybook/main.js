module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  "framework": "@storybook/react"
}