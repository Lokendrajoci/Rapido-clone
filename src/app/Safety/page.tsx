import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card1 from "../components/Safety1";
import Card2 from "../components/Safety2";
import Card3 from "../components/Safety3";

export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="overview"
      className="w-full flex flex-col justify-center items-center p-4"
    >
      <TabsList className="grid grid-cols-3 h-16 w-full sm:w-[30rem] md:w-[40rem] gap-2">
        <TabsTrigger
          value="overview"
          className="h-12 text-lg sm:text-xl md:text-2xl"
        >
          Overviews
        </TabsTrigger>
        <TabsTrigger
          value="customer"
          className="h-12 text-lg sm:text-xl md:text-2xl"
        >
          Customers
        </TabsTrigger>
        <TabsTrigger
          value="captain"
          className="h-12 text-lg sm:text-xl md:text-2xl"
        >
          Captains
        </TabsTrigger>
      </TabsList>

      <div className="w-full mt-4">
        <TabsContent value="overview">
          <Card1 />
        </TabsContent>
        <TabsContent value="customer">
          <Card2 />
        </TabsContent>
        <TabsContent value="captain">
          <Card3 />
        </TabsContent>
      </div>
    </Tabs>
  );
}
