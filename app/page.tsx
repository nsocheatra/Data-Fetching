import CardClientList from "@/components/CardClientList";
import Cards from "@/components/Cards";
import LoadingCard from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { loadPost } from "@/lib/data/fetchPost";
import { ArrowUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Button variant="outline"> Click Me</Button>
       <Button variant="secondary"> Click Me</Button>
        <Button variant="destructive"> Click Me</Button>
        <Button variant="outline" size="icon" aria-label="Submit"> 
          <ArrowUpIcon />
        </Button>

        <Cards
        userId={1}
        id={1}
        title="សួស្ដី សុជាត្រា"
        body="Default Description"
        />
             <CardClientList loadPost={loadPost()}  />

        
       <LoadingCard />
    </div>

    
  );
}
