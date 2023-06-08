import { useQuery } from "@tanstack/react-query";

const useInfo = () => {
    const { data: info = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/info');
            return res.json();
        }
    });

    return [info, loading, refetch]
}

export default useInfo