module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      "/products/HX9957%2F51": { page: "/products/[id]" },
      "/products/HY1200%2F08": { page: "/products/[id]" },
      "/products/S9031%2F90": { page: "/products/[id]" },
      "/products/HD9654%2F961": { page: "/products/[id]" },
    };
  },
};
