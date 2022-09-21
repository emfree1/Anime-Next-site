self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/anime/[id]': ['static\u002Fchunks\u002Fpages\u002Fanime\u002F[id].js'],
  sortedPages: ['\u002F_app', '\u002F_error', '\u002Fanime\u002F[id]'],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();