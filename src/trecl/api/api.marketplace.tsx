import axios from "axios";

// axios for trecloud
const tcAxios = axios.create({
  baseURL: "/",
});

export async function fetchMarketplaceAppsInProject(project: string) {
  return tcAxios.get(`/projects/${project}/marketplaceApps`);
}
