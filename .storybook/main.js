module.exports = {
  stories: ['../src/stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/addon-contexts',
    '@storybook/addon-docs',
    '@storybook/addon-essentials'
  ],
};
