module.exports = {
  plugins: [
    require('postcss-combine-duplicated-selectors'),
    require('cssnano')({
      preset: [
        'default',
        {
          mergeRules: true,
          discardDuplicates: true,
        },
      ],
    }),
    require('postcss-discard-duplicates'),
  ],
};
