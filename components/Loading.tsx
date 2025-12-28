import { Skeleton } from "./ui/skeleton"

export default function LoadingCard(){
    return(
        
        <div className="flex flex-col space-y-3">
        <Skeleton className="w-full aspect-5/3 rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-full"/>
            <Skeleton className="h-4 w-3/4"/>
        </div>
        </div>
        
    )
}