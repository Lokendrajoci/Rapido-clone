import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card1 from "../components/Safety1";
import Card2 from "../components/Safety2";
import Card3 from "../components/Safety3";
export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="overview"
      className="max-w-full flex flex-col justify-center items-center"
    >
      <TabsList className="grid justify-center grid-cols-3  h-16 w-[40rem]">
        <TabsTrigger value="overview" className="h-12 text-2xl ">
          Overviews
        </TabsTrigger>
        <TabsTrigger value="customer" className="h-12 text-2xl">
          Customers
        </TabsTrigger>
        <TabsTrigger value="captain" className="h-12 text-2xl">
          Captains
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card1 />
      </TabsContent>
      <TabsContent value="customer">
        <Card2 />
      </TabsContent>
      <TabsContent value="captain">
        <Card3 />
      </TabsContent>
    </Tabs>
  );
}
