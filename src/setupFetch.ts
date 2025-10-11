const BASE_URL = "https://localhost:8444";

// Lưu lại bản gốc
const originalFetch = window.fetch;

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  let url = input;

  // Nếu đường dẫn không phải URL tuyệt đối → chèn BASE_URL
  if (typeof input === "string" && !input.startsWith("http")) {
    url = BASE_URL + input;
  }

  return originalFetch(url, init);
};
