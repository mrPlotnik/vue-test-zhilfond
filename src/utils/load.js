const load = async (action, successHandler, errorHandler) => {
  try {
    const result = await action();
    successHandler(result);
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      errorHandler('Axios error: Сервер не отвечает. Timeout');
    } else if (error.response && error.response.status >= 500) {
      errorHandler(`Axios error: , code: ${error.response.status}`);
    } else if (errorHandler) {
      errorHandler('Axios error: Кажется, сервер не отвечает');
    } else {
      errorHandler('Axios unknown error');
    }
  }
};

export default load;
