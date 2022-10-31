const {
  tambahBukuHandler,
  getSemuaBukuHandler,
  getBukuIdHandler,
  editBukuIdHandler,
  hapusBukuIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahBukuHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getSemuaBukuHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBukuIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBukuIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusBukuIdHandler,
  },
];

module.exports = routes;
