import instance from '@/service/axios-config';

import user from '@/service/data/user';

const api = {
  user: user(instance),
};

export default api;
