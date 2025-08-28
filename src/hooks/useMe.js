import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api/me";

export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: fetchMe,
        enabled: !!localStorage.getItem("token"), // 토큰 있을 때만 실행
    });
}