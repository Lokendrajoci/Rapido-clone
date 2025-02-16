import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dummyData from "./data";
import Image from "next/image";

export default function NewsArticle() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {dummyData.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <Image
              src={item.image}
              alt="News Article"
              width={600} 
              height={300} 
              className="object-cover w-full h-48"
            />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
