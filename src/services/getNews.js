//запрос на бэкэнд
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=627b604816e34667a27a3ddb897812f2
const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "627b604816e34667a27a3ddb897812f2";
// Точно! В запросе вы задаете обязательные заголовки, которые всегда должны быть отправлены, такие как X-Api-Key. С помощью параметра headers вы можете добавлять дополнительные заголовки, которые могут быть специфичны для определенного запроса и не прописаны жестко в функции. Это дает вам гибкость в добавлении новых заголовков по мере необходимости, без необходимости изменять основную функцию.

export const getNews = (
  searchText,
  lang = "uk",
  from = "2025-02-22",
  to = "2025-02-26",
  headers = {}
) => {
  return fetch(
    `${BASE_URL}/everything?q=${searchText}&language=${lang}&from=${from}&to=${to}`,
    {
      headers: {
        "X-Api-Key": API_KEY,
        ...headers,
      },
    }
  )
};

//проверить какие хэдеры залетают в запрос можно на сайте апи network фильтр fetch/xhr

// export const getNews = (searchText) => {
// 	return fetch(`${BASE_URL}/everything?q=${searchText}`, {
// 		headers: {
// 			'X-Api-Key': API_KEY,
// 		},
// 	})
// }

//добавляем заголовки
// export const getNews = (searchText, language = "tr") => {
//   return fetch(`${BASE_URL}/everything?q=${searchText}&language=${language}`, {
//     headers: {
//       //передаем хедерсы
//       "X-Api-Key": API_KEY,
//       "Accept-Language": language,
//     },
//   });
// };

//деструктуризируем заголовки

// export const getNews = (
//   searchText,
//   language = "tr",
//   from = "2025-02-22",
//   to = "2025-02-15",
//   additionalHeaders = {}
// ) => {
//   const headers = {
//     "X-Api-Key": API_KEY,
//     "Accept-Language": language,
//     from: from,
//     to: to,
//     ...additionalHeaders, // Объединяем с дополнительными заголовками
//   };

//   return fetch(`${BASE_URL}/everything?q=${searchText}&language=${language}`, {
//     headers,
//   });
// };

// Деструктуризируем заголовки и добавляем from и to в URL
// export const getNews = (
//   searchText,
//   language = "uk",
//   to = "2025-02-22",
//   from = "2025-02-15",
//   // additionalHeaders = {}
// ) => {
//   const headers = {
//     "X-Api-Key": API_KEY,
//     "Accept-Language": language,
//     // ...additionalHeaders, // Объединяем с дополнительными заголовками
//   };

//   return fetch(`${BASE_URL}/everything?q=${searchText}&language=${language}&from=${from}&to=${to}`, {
//     headers,
//   });
// };
