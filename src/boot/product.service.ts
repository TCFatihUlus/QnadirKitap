import { get } from 'http';

export function getById(id) {
  return get({ path: '/kitap/' + id });
}
