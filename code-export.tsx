"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Code, FileCode, GitBranch, Wrench } from "lucide-react"

export function CodeExport() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">8. Kód exportálás</h1>
        <p className="text-muted-foreground text-lg">
          Hogyan exportálhatod és testreszabhatod a V0 által generált kódot
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
            <h2 className="text-xl font-semibold mb-4">Kód exportálás és testreszabás folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Megfelelő generálás elérése</h3>
                  <p className="text-muted-foreground">
                    Mielőtt exportálnád a kódot, győződj meg róla, hogy a V0 által generált felület megfelel az
                    elvárásaidnak. Használd az iteratív fejlesztést és a visszajelzéseket, hogy a lehető legjobb
                    eredményt érd el.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Kód exportálás kérése</h3>
                  <p className="text-muted-foreground">
                    Kérd a V0-t, hogy exportálja a kódot. Határozd meg, milyen formátumban szeretnéd a kódot (pl. React
                    komponensek, Next.js oldal, stb.), és milyen technológiákat használ (pl. Tailwind CSS, shadcn/ui,
                    stb.).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Kód áttekintése és megértése</h3>
                  <p className="text-muted-foreground">
                    Tekintsd át az exportált kódot, és értsd meg a struktúráját és működését. Azonosítsd a fő
                    komponenseket, függőségeket és funkcionalitásokat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Testreszabási igények meghatározása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg, milyen testreszabásokat szeretnél végrehajtani a kódon. Például: színek módosítása,
                    funkcionalitás hozzáadása, komponensek átrendezése, stb.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Testreszabás végrehajtása</h3>
                  <p className="text-muted-foreground">
                    Végezd el a kívánt testreszabásokat a kódon. Ez történhet közvetlenül a kódszerkesztőben, vagy
                    kérheted a V0-t, hogy segítsen a testreszabásban konkrét utasításokkal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa kód exportálási és testreszabási promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Exportáld a számláló komponens kódját, hogy testreszabhassam a következő módosításokkal:

1. Adj hozzá egy "Reset" gombot, amely visszaállítja a számlálót 0-ra
2. Állíts be egy minimum (0) és maximum (10) értéket, hogy a számláló ne mehessen ezeken túl
3. Változtasd meg a színeket a saját dizájn rendszeremhez:
   - Elsődleges szín: #6366f1 (indigo)
   - Másodlagos szín: #f97316 (narancs)
   - Háttér: #f8fafc (világos szürke)
   - Szöveg: #1e293b (sötét szürke)
4. Adj hozzá egy animációt a szám változásakor (enyhe felvillanás vagy méretváltozás)
5. Tedd lehetővé a billentyűzettel való vezérlést (fel/le nyilak a növeléshez/csökkentéshez, R gomb a visszaállításhoz)

Kérlek, add meg a teljes React komponenst, beleértve az importokat és a CSS-t is. A komponens legyen újrafelhasználható és jól dokumentált.`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek kód exportáláshoz és testreszabáshoz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <Code className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj részletes kódkommenteket</h3>
                  <p className="text-muted-foreground">
                    Kérd a V0-t, hogy lássa el részletes kommentekkel a kódot, különösen a bonyolultabb részeket. Ez
                    segít megérteni a kód működését és megkönnyíti a későbbi testreszabást.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FileCode className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj moduláris kódstruktúrát</h3>
                  <p className="text-muted-foreground">
                    Kérd a V0-t, hogy a kódot moduláris, jól strukturált formában exportálja, ahol a különböző
                    funkcionalitások külön fájlokban vagy komponensekben vannak. Ez megkönnyíti a kód megértését és
                    testreszabását.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <GitBranch className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj alternatív implementációkat</h3>
                  <p className="text-muted-foreground">
                    Ha nem vagy biztos benne, melyik megközelítés a legjobb, kérj a V0-tól alternatív implementációkat
                    ugyanarra a funkcionalitásra. Például: "Mutass két különböző módot a számláló implementálására: egy
                    hook-alapút és egy osztály-alapút."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Wrench className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj testreszabási útmutatót</h3>
                  <p className="text-muted-foreground">
                    Kérd a V0-t, hogy adjon útmutatót a kód leggyakoribb testreszabási lehetőségeihez. Például: "Mutasd
                    meg, hogyan változtathatom meg a színeket, hogyan adhatok hozzá új funkciókat, vagy hogyan
                    integrálhatom más komponensekkel."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj típusdefiníciókat TypeScript esetén</h3>
                  <p className="text-muted-foreground">
                    Ha TypeScript-et használsz, kérd a V0-t, hogy adjon részletes típusdefiníciókat a komponensekhez és
                    függvényekhez. Ez segít elkerülni a hibákat és javítja a kód minőségét.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kérj példákat a komponens használatára</h3>
                  <p className="text-muted-foreground">
                    Kérj példákat arra, hogyan használhatod a komponenst különböző kontextusokban és különböző
                    prop-okkal. Ez segít megérteni a komponens rugalmasságát és korlátait.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák kód exportálásnál és testreszabásnál</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A kód megértése nélküli módosítás</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> A kód vaktában módosítása anélkül, hogy
                    megértenéd a működését.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Szánj időt a kód megértésére, vagy
                    kérj magyarázatot a V0-tól a bonyolultabb részekhez.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok módosítás egyszerre</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> A kód teljes átírása vagy túl sok
                    módosítás egyszerre.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Végezz kisebb, inkrementális
                    változtatásokat, és minden lépés után ellenőrizd, hogy a kód még működik-e.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A függőségek figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> A kód módosítása anélkül, hogy
                    figyelembe vennéd a függőségeket és a más komponensekkel való kapcsolatokat.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Azonosítsd a komponens függőségeit és
                    kapcsolatait, és gondoskodj róla, hogy a módosítások ne törjék meg ezeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A kód túlbonyolítása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Felesleges komplexitás hozzáadása a
                    kódhoz, csak mert "menőnek" tűnik.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Törekedj az egyszerűségre és
                    olvashatóságra. Csak akkor adj hozzá komplexitást, ha az valódi előnyökkel jár.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A teljesítmény figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan módosítások végrehajtása, amelyek
                    jelentősen rontják a teljesítményt.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Gondolj a teljesítményre a módosítások
                    során, különösen nagyobb alkalmazásoknál vagy gyakran újrarenderelt komponenseknél.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A tesztelés mellőzése</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> A módosított kód tesztelés nélküli
                    használata.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Mindig teszteld alaposan a módosított
                    kódot, különböző esetekben és környezetekben, mielőtt éles környezetbe helyeznéd.
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

