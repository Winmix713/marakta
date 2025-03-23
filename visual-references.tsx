import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function VisualReferences() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vizuális referenciák</h1>
        <p className="text-muted-foreground mt-2">
          A vizuális referenciák használata jelentősen javítja a V0 által generált prototípusok minőségét és pontosságát.
        </p>
      </div>

      <Tabs defaultValue="process">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="process">Folyamat bemutatása</TabsTrigger>
          <TabsTrigger value="tips">Hatékony prompt tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>
        
        <TabsContent value="process" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">Hogyan használj vizuális referenciákat</h2>
          
          <div className="grid gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Lépés: Referenciák gyűjtése</CardTitle>
                <CardDescription>
                  Gyűjts össze releváns vizuális referenciákat, amelyek illusztrálják az elképzeléseidet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Keress inspirációt a következő forrásokból:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>\

