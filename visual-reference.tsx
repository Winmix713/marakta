"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, FileImage, Lightbulb, Palette } from "lucide-react"
import Image from "next/image"

export function VisualReferences() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">2. Vizuális referenciák</h1>
        <p className="text-muted-foreground text-lg">
          Hogyan irányíthatod a V0-t képek és vizuális referenciák segítségével
        </p>
      </div>

      <Tabs defaultValue="process" onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="process">Folyamat</TabsTrigger>
          <TabsTrigger value="tips">Hatékony tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Vizuális referenciák használatának folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Megfelelő referenciák kiválasztása</h3>
                  <p className="text-muted-foreground">
                    Válassz olyan képeket, weboldalakat vagy dizájn elemeket, amelyek jól reprezentálják az
                    elképzelésedet. Ezek lehetnek képernyőképek más weboldalakról, UI készletek, vagy saját vázlatok.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Referenciák előkészítése</h3>
                  <p className="text-muted-foreground">
                    Győződj meg róla, hogy a képek jó minőségűek és tisztán láthatók. Ha szükséges, jelöld meg a fontos
                    részeket vagy elemeket a képeken, amelyekre különösen szeretnéd felhívni a figyelmet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Referenciák csatolása a prompthoz</h3>
                  <p className="text-muted-foreground">
                    Csatold a kiválasztott képeket a V0 prompthoz. A V0 képes feldolgozni a csatolt képeket és
                    figyelembe venni azokat a generálás során.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Szöveges magyarázat hozzáadása</h3>
                  <p className="text-muted-foreground">
                    A képek mellett mindig adj szöveges magyarázatot is, amely pontosan leírja, mit szeretnél átvenni a
                    referenciákból. Például: "A csatolt képen látható elrendezést szeretném, de kék színséma helyett
                    zöldet használj."
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Eredmény értékelése és finomítása</h3>
                  <p className="text-muted-foreground">
                    Az első generálás után értékeld az eredményt, és szükség esetén adj további vizuális referenciákat
                    vagy pontosítsd a leírást a következő iterációban.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa vizuális referenciát használó promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Készíts egy modern, minimalista landing page-et egy tech startup számára.

A dizájn hasonlítson a csatolt képre, különösen:
- A fejléc elrendezése (logo balra, menü jobbra)
- A hero szekció elrendezése (szöveg balra, illusztráció jobbra)
- A színátmenetes háttér stílusa

De a következő módosításokkal:
- Használj kék és zöld színeket a lila helyett (#3B82F6 és #10B981)
- A betűtípus legyen sans-serif, modern (Inter vagy Roboto)
- Adj hozzá egy "Kapcsolat" gombot a menübe
- A hero szekcióban legyen egy email feliratkozási űrlap

[Csatolt kép: landing-page-reference.jpg]`}
            </div>

            <div className="mt-4 border border-slate-200 rounded-md p-2">
              <p className="text-xs text-muted-foreground mb-2">Csatolt referencia kép:</p>
              <div className="relative h-48 bg-slate-100 rounded flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Landing+Page+Reference"
                  alt="Landing page reference"
                  width={400}
                  height={200}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek vizuális referenciák használatához</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <FileImage className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj jó minőségű képeket</h3>
                  <p className="text-muted-foreground">
                    A jó felbontású, tiszta képek segítenek a V0-nak pontosabban értelmezni a vizuális referenciákat.
                    Kerüld a homályos, alacsony felbontású képeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Palette className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kombinálj különböző referenciákat</h3>
                  <p className="text-muted-foreground">
                    Használhatsz több különböző referenciát különböző aspektusokhoz. Például egy képet az elrendezéshez,
                    egy másikat a színekhez, és egy harmadikat a tipográfiához.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Lightbulb className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Jelöld meg a fontos részeket</h3>
                  <p className="text-muted-foreground">
                    Ha egy képen csak bizonyos elemek fontosak, jelöld meg őket nyilakkal, körökkel vagy más vizuális
                    jelölésekkel, hogy a V0 tudja, mire kell figyelnie.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Pontosan írd le, mit szeretnél átvenni</h3>
                  <p className="text-muted-foreground">
                    Ne csak csatold a képet, hanem részletesen írd le, mely elemeket szeretnéd átvenni és melyeket
                    módosítani. Például: "Szeretem a kártyák elrendezését, de változtasd meg a színüket."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj moodboardokat</h3>
                  <p className="text-muted-foreground">
                    A moodboardok (hangulattáblák) segítenek átfogó képet adni a kívánt vizuális stílusról. Készíts
                    kollázst különböző inspiráló képekből, színekből és tipográfiai elemekből.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj meg konkrét színkódokat</h3>
                  <p className="text-muted-foreground">
                    Ha egy referencia képről szeretnéd átvenni a színeket, adj meg konkrét HEX vagy RGB színkódokat,
                    hogy a V0 pontosan tudja, milyen színeket használjon.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák vizuális referenciák használatánál</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok referencia használata</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 10+ különböző stílusú referencia kép
                    csatolása.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Válassz 2-3 kulcsfontosságú
                    referenciát, amelyek jól reprezentálják az elképzelésedet.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Szöveges magyarázat hiánya</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak képet csatolni szöveges magyarázat
                    nélkül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Mindig magyarázd el, mit szeretnél
                    átvenni a képről és mit módosítani.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Alacsony minőségű képek használata</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Homályos, pixeles vagy túl kicsi képek
                    használata.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj jó felbontású, tiszta
                    képeket, amelyeken jól láthatók a részletek.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Ellentmondásos referenciák</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Teljesen különböző stílusú referenciák
                    használata egyértelmű magyarázat nélkül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Ha különböző stílusú referenciákat
                    használsz, pontosan magyarázd el, melyik elemeket szeretnéd átvenni mindegyikből.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl komplex referenciák</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Nagyon összetett, sok részletet
                    tartalmazó képek használata konkrét fókusz nélkül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj egyszerűbb referenciákat,
                    vagy jelöld meg a komplex képeken a fontos részeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Szerzői jogvédett tartalom másolása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Azt kérni, hogy a V0 pontosan másoljon
                    le egy szerzői jogvédett dizájnt.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használd a referenciákat
                    inspirációként, és kérj egyedi, de hasonló stílusú dizájnt.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

