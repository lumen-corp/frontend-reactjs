import { api } from "utils/api";

type GetDummyRequest = void;
type GetDummyResponse = void;

export async function getDummy(): Promise<GetDummyResponse> {
  const response = await api.request<GetDummyResponse>(`/dummyroute`, {
    requiresAuthentication: true,
    method: "GET",
  });
  return response.data;
}
