module.exports = [
  'strapi::logger',
    'strapi::errors',
    'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'],  // Thêm domain của frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Cho phép các phương thức HTTP bạn muốn
      allowedHeaders: ['Content-Type', 'Authorization'],  // Các header được phép
      exposedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,  // Nếu cần cho phép cookies
    },
  },
]
