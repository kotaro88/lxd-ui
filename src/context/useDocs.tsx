import { useSupportedFeatures } from "./useSupportedFeatures";

export const useDocs = (): string => {
  const remoteBase = "https://doc.navicloud.vn";
  const localBase = "https://doc.navicloud.vn";

  const { hasLocalDocumentation } = useSupportedFeatures();

  if (!hasLocalDocumentation) {
    return remoteBase;
  }

  return localBase;
};
