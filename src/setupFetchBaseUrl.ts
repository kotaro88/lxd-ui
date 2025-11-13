// setupFetchBaseUrl.ts
const BASE_URL = "https://my.trecloud.vn";

const originalFetch = window.fetch.bind(window);

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  let url = input;

  if (typeof input === "string" && input.startsWith("/")) {
    url = BASE_URL + input;
  } else if (input instanceof URL && input.pathname.startsWith("/")) {
    url = new URL(BASE_URL + input.pathname + input.search);
  }

  return originalFetch(url, init);
};
