"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Component, Puzzle, Layers, Combine } from "lucide-react"

export function ComponentBasedApproach() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">7. Komponens-alapú megközelítés</h1>
        <p className="text-muted-foreground text-lg">Hogyan bonthatod le a projekteket kezelhetőbb részekre</p>
      </div>

      <Tabs defaultValue="process" onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="process">Folyamat</TabsTrigger>
          <TabsTrigger value="tips">Hatékony tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Komponens-alapú tervezés folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek azonosítása</h3>
                  <p className="text-muted-foreground">
                    Elemezd a tervezett felületet, és azonosítsd a különálló, újrafelhasználható komponenseket. Például:
                    navigáció, hero szekció, termék kártya, űrlap, lábléc, stb.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek tulajdonságainak meghatározása</h3>
                  <p className="text-muted-foreground">
                    Minden komponenshez határozd meg a szükséges tulajdonságokat: méret, szín, tartalom, interakciók,
                    stb. Gondold át, milyen adatokat és funkciókat kell tartalmaznia minden komponensnek.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek közötti kapcsolatok definiálása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg, hogyan kapcsolódnak egymáshoz a komponensek, és milyen adatokat osztanak meg
                    egymással. Például: a termék kártya komponens adatokat küld a kosár komponensnek.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek egyenkénti generálása</h3>
                  <p className="text-muted-foreground">
                    Kérd a V0-t, hogy generálja a komponenseket egyenként, részletes leírással mindegyikhez. Így minden
                    komponensre külön tudsz fókuszálni, és pontosabb eredményeket érhetsz el.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek összeállítása</h3>
                  <p className="text-muted-foreground">
                    Miután minden komponens elkészült, kérd a V0-t, hogy állítsa össze őket egy teljes oldallá,
                    figyelembe véve az elrendezést és a reszponzivitást.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa komponens-alapú promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Készíts egy termék részletező oldalt egy e-commerce webshophoz a következő komponensekkel:

1. Termék galéria komponens
   - Főkép nagyobb méretben
   - Miniatűr képek alatta, amelyekre kattintva változik a főkép
   - Nagyítás funkció a főképen

2. Termék információs komponens
   - Termék név és ár
   - Rövid leírás
   - Értékelések (5 csillagos rendszer)
   - Méret választó (S, M, L, XL)
   - Szín választó (legalább 3 szín)

3. Vásárlási komponens
   - Mennyiség választó
   - "Kosárba" gomb
   - "Kedvencekhez" gomb
   - Szállítási információk

4. Termék részletek komponens
   - Részletes leírás
   - Anyag és ápolási információk
   - Méretek táblázata`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek komponens-alapú megközelítéshez</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <Component className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kövesd az egységes felelősség elvét</h3>
                  <p className="text-muted-foreground">
                    Minden komponensnek egy jól definiált, egyértelmű feladata legyen. Ha egy komponens túl sok mindent
                    csinál, bontsd kisebb komponensekre.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Puzzle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Tervezz újrafelhasználható komponenseket</h3>
                  <p className="text-muted-foreground">
                    Tervezd úgy a komponenseket, hogy azok újrafelhasználhatók legyenek különböző kontextusokban.
                    Például egy gomb komponens használható a navigációban, űrlapokon és termék kártyákon is.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Layers className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj komponens hierarchiát</h3>
                  <p className="text-muted-foreground">
                    Szervezd a komponenseket hierarchiába: alap komponensek (gombok, inputok), összetett komponensek
                    (űrlapok, kártyák), és oldal szintű komponensek (fejléc, lábléc, oldalak).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Combine className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Határozd meg a komponensek közötti interakciókat</h3>
                  <p className="text-muted-foreground">
                    Világosan határozd meg, hogyan kommunikálnak egymással a komponensek, milyen adatokat osztanak meg,
                    és hogyan reagálnak egymás eseményeire. Ez segít elkerülni a váratlan viselkedést és hibákat.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj részletes leírást minden komponenshez</h3>
                  <p className="text-muted-foreground">
                    Minden komponenshez adj részletes leírást, beleértve a vizuális megjelenést, funkcionalitást,
                    interakciókat és állapotokat. Minél részletesebb a leírás, annál pontosabb lesz az eredmény.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj vizuális referenciákat a komponensekhez</h3>
                  <p className="text-muted-foreground">
                    Ha lehetséges, adj vizuális referenciákat a komponensekhez, hogy a V0 jobban megértse, mit
                    szeretnél. Például: "A termék kártya hasonlítson erre a képre."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák komponens-alapú megközelítésnél</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl nagy komponensek</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Túl sok funkcionalitást és felelősséget
                    egy komponensbe zsúfolni.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Bontsd kisebb, jól definiált
                    komponensekre, amelyek egy konkrét feladatot látnak el.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Hiányos komponens leírások</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Túl általános vagy hiányos leírások a
                    komponensekhez.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Adj részletes leírást minden
                    komponenshez, beleértve a vizuális megjelenést, funkcionalitást és interakciókat.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A komponensek közötti kapcsolatok figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak az egyes komponensekre fókuszálni,
                    figyelmen kívül hagyva, hogyan működnek együtt.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozd meg a komponensek közötti
                    kapcsolatokat és interakciókat is.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Inkonzisztens komponens stílusok</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Különböző stílusú és megjelenésű
                    komponensek használata ugyanazon a felületen.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj egységes stílus rendszert az
                    összes komponenshez, hogy koherens felhasználói élményt biztosíts.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A reszponzivitás figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak egy képernyőméretre tervezni a
                    komponenseket.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozd meg, hogyan viselkednek a
                    komponensek különböző képernyőméreteken.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túlzott komponens felosztás</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Túl sok apró komponensre bontani a
                    felületet, ami megnehezíti a kezelést.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Találd meg az egyensúlyt a komponensek
                    mérete és száma között, figyelembe véve a projekt komplexitását.
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

