angular.module('emtelco.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('NewService', function() {
  // Might use a resource here that returns a JSON array


  var news = [
    { id: 0, title: 'Noticias de Interés y actualidad', description: 'Conoce las últimas noticias de tu ciudad' },
    { id: 1, title: 'Convocatorias', description: 'Ofertas Laborales' },
    { id: 2, title: 'Clasificados', description: 'Buscas comprar o vender?' },
    { id: 3, title: 'Actualización de datos', description: 'Actualiza tus datos.' },
	{ id: 4, title: 'Contáctenos', description: 'Escribenos.' }
  ];

  return {
    all: function() {
      return news;
    },
    get: function(newId) {
      // Simple index lookup
      return news[newId];
    }
  }
});
