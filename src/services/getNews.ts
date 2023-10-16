import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Source {
    id:null
    name: string
}
interface Article {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}
interface Response {
    totalResults: number
    articles: Article[]
}
interface QueryProps {
    search: string | undefined
    sortBy:string | undefined
    pageSize: number
    page: number
}
const GetNews = (query:QueryProps) => {
   return useQuery<Response, Error>({
        queryKey: ["news", query],
        queryFn: () => 
            axios.get<Response>(`https://newsapi.org/v2/everything`, {
                params: {
                    apiKey:  "1803daeff4b1487abdc7f5067cca97be",
                    pageSize: query.pageSize,
                    page: query.page,
                    q: query.search || "games",
                    sortBy: query.sortBy
                }
            })
                .then(res => res.data),
        keepPreviousData: true,
        staleTime: 10000
    })
}
export default GetNews