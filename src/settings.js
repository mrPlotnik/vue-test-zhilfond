// App settings
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const DEFAULT_AXIOS_TIMEOUT = 1000 * 30; // 30 sec // Задержка после запроса axios
// Типы ошибок с сетью
const WARNING_TYPE = {
  SERVER_ERROR: 'serverError', // Ошибка сервера (status >= 500)
  ERR_NETWORK: 'networkError', // Ошибка сети (сервер не отвечает)
  UNKNOWN: 'unknownError', // Неизвестная ошибка
};

export {
  BASE_URL,
  DEFAULT_AXIOS_TIMEOUT,
  WARNING_TYPE,
};
