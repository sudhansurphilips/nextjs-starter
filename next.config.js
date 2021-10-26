module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      /* "/products/HX9957_51": { page: "/products/[id]" },
      "/products/HY1200_08": { page: "/products/[id]" },
      "/products/S9031_90": { page: "/products/[id]" },
      "/products/HD9654_96": { page: "/products/[id]" }, */
    };
  },
};
