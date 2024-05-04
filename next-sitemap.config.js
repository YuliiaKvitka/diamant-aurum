// next-sitemap.config.js
module.exports = {
  siteUrl: 'http://localhost:3001/', // Укажите URL вашего сайта
  generateRobotsTxt: true, // Генерировать файл robots.txt
  sitemapSize: 5000, // Количество элементов на одной странице карты сайта
  changefreq: 'daily', // Как часто обновляется контент
  priority: 0.7, // Приоритет страниц
};