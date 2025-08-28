import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "../api/auth";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (body) => {
      // 토큰 저장
      localStorage.setItem("token", body.data.accessToken);

      // /me 정보 다시 가져오도록 invalidation
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
}