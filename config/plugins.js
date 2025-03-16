module.exports = {
  upload: {
    provider: 'local', // Cung cấp lưu trữ tệp cục bộ
    providerOptions: {
      sizeLimit: 10000000, // Giới hạn kích thước tệp (10MB)
    },
  },
};