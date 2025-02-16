module.exports = {
  plugins: [
    require('postcss-merge-rules'), // Объединяет одинаковые селекторы
    require('postcss-discard-duplicates'), // Удаляет дубликаты правил
    require('cssnano')({
      preset: ['default', {
        mergeRules: true,
        discardDuplicates: true, // Удаляет дубликаты
      }],
    }),
  ],
};
