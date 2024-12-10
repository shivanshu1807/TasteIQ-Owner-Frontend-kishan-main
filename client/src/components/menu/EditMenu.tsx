import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCategory from "./AddCategory";
import AddItem from "./AddItem";
import AddMenu from "./AddMenu";

export default function EditMenu() {
  return (
    <Tabs defaultValue="category" className="w-full h-full flex flex-col">
      <TabsList className="grid w-full grid-cols-3 gap-4 shrink-0">
        <TabsTrigger
          value="category"
          className="bg-background data-[state=active]:bg-[#4f46e5] data-[state=active]:text-white text-foreground p-3"
        >
          Add Category
        </TabsTrigger>
        <TabsTrigger
          value="item"
          className="bg-background data-[state=active]:bg-[#4f46e5] data-[state=active]:text-white text-foreground p-3"
        >
          Add Item
        </TabsTrigger>
        <TabsTrigger
          value="umenu"
          className="bg-background data-[state=active]:bg-[#4f46e5] data-[state=active]:text-white text-foreground p-3"
        >
          Upload Menu
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 overflow-hidden mt-8">
        <TabsContent value="category" className="h-full p-1">
          <AddCategory />
        </TabsContent>
        <TabsContent value="item" className="h-full p-1">
          <AddItem />
        </TabsContent>
        <TabsContent value="umenu" className="h-full p-1">
          <AddMenu />
        </TabsContent>
      </div>
    </Tabs>
  );
}
