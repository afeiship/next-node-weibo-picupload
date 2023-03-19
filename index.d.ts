interface Options {
  baseURL?: string;
  uploadURL?: string;
  cookie?: string;
}
interface NxState {
  nodeWeiboPicupload(items: any, opts?: Options);
}
