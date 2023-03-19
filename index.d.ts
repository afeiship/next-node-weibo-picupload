interface Options {
  baseURL?: string;
  uploadURL?: string;
  cookie?: string;
}

interface NxStatic {
  nodeWeiboPicupload(items: any, options?: Options);
}
