module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-merge-rules'),
        require('postcss-discard-duplicates'),
        require('cssnano')({
          preset: ['default', { mergeRules: true, discardDuplicates: true }],
        }),
      ],
    },
  },
};
