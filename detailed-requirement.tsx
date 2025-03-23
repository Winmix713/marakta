"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

export function DetailedRequirements() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">1. Részletes követelmények</h1>
        <p className="text-muted-foreground text-lg">
          Hogyan fogalmazz meg hatékony és részletes utasításokat a V0 számára
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
            <h2 className="text-xl font-semibold mb-4">A részletes követelmények meghatározásának folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Célok és kontextus meghatározása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a projekt célját, célközönségét és a fő felhasználási eseteket. Például: "Egy
                    e-commerce weboldal, amely 30-50 éves városi nőket céloz meg, akik prémium ruházati termékeket
                    keresnek."
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Vizuális stílus leírása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a kívánt vizuális stílust, színvilágot és hangulatot. Például: "Modern, minimalista
                    dizájn, fehér háttérrel, fekete szöveggel és arany kiemelésekkel. Elegáns, luxus hangulatú."
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Funkcionális követelmények listázása</h3>
                  <p className="text-muted-foreground">
                    Sorold fel a szükséges funkciókat és interakciókat. Például: "Termék galéria lapozható képekkel,
                    méret és szín választó, kosárba helyezés gomb, ajánlott termékek szekció."
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Tartalmi elemek meghatározása</h3>
                  <p className="text-muted-foreground">
                    Add meg a szükséges tartalmi elemeket és szövegeket. Például: "Főcím: 'Exkluzív nyári kollekció',
                    alcím: 'Fedezd fel legújabb darabjainkat', CTA gomb: 'Vásárlás most'."
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Reszponzivitás és kompatibilitás</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a támogatandó képernyőméreteket és eszközöket. Például: "Reszponzív dizájn, amely jól
                    működik mobilon, tableten és asztali gépen is, különös tekintettel az iPhone eszközökre."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa egy részletes követelményeket tartalmazó promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`# Hozz létre egy termék részletező oldalt egy luxus e-commerce webshophoz

## 1. Általános információk
- **Célközönség:** 30-50 éves, magasabb jövedelmű városi nők
- **Stílus:** Modern, elegáns, minimalista
- **Színvilág:** Fehér háttér, fekete szöveg, arany kiemelések (#E0C080)
- **Reszponzivitás:** Optimalizált mobil, tablet és asztali nézetekre

## 2. Fő komponensek
- **Termék galéria:** Nagy főkép, alatta lapozható miniatűrök, nagyítási lehetőséggel
- **Termék információk:** Név, ár, rövid leírás, értékelések (5 csillagos rendszer)
- **Vásárlási opciók:** Méret választó (XS-XL), szín választó (min. 3 szín), mennyiség választó
- **Akciógombok:** "Kosárba helyezés" (arany gomb), "Kedvencekhez adás" (körvonalazott gomb)
- **Termék részletek:** Részletes leírás, anyag információk, mérettáblázat, szállítási információk

## 3. Interakciók
- A miniatűrökre kattintva változzon a főkép
- A főképre kattintva nyíljon nagyított nézet
- Méret vagy szín választásakor frissüljön a készletinformáció
- "Kosárba helyezés" gomb megnyomásakor animált visszajelzés

## 4. Tartalmi elemek
- **Terméknév:** "Selyem Maxi Ruha"
- **Ár:** "129 €"
- **Rövid leírás:** "Elegáns, 100% selyem maxi ruha, kézi hímzéssel és egyedi szabással."
- **Részletes leírás:** Tartalmazzon információkat az anyagról, szabásról, és viselési javaslatokat.`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony prompt tippek részletes követelményekhez</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj strukturált formátumot</h3>
                  <p className="text-muted-foreground">
                    A Markdown formátum (címsorok, felsorolások, táblázatok) segít rendszerezni a követelményeket és
                    könnyebbé teszi a V0 számára a feldolgozást.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj meg konkrét példákat</h3>
                  <p className="text-muted-foreground">
                    Konkrét példák segítenek a V0-nak jobban megérteni, mit szeretnél. Például ahelyett, hogy "modern
                    dizájn", írd: "modern dizájn, mint az Apple vagy Airbnb weboldala".
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj vizuális leírásokat</h3>
                  <p className="text-muted-foreground">
                    Részletesen írd le a vizuális elemeket, például: "A gomb legyen lekerekített sarkú (8px), halvány
                    árnyékkal, és hover állapotban változzon a háttérszíne."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Határozd meg a prioritásokat</h3>
                  <p className="text-muted-foreground">
                    Jelöld meg, mely követelmények a legfontosabbak. Például: "A legfontosabb a termék galéria és a
                    vásárlási folyamat egyszerűsége."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj meg pontos mérőszámokat</h3>
                  <p className="text-muted-foreground">
                    Ahol lehet, használj pontos mérőszámokat: pixelek, színkódok, betűméretek. Például: "A fejléc
                    magassága 80px, a logó mérete 40x40px."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Írj felhasználói történeteket</h3>
                  <p className="text-muted-foreground">
                    A felhasználói történetek segítenek kontextusba helyezni a követelményeket: "Felhasználóként
                    szeretnék szűrni a termékeket ár szerint, hogy megtaláljam a költségvetésemnek megfelelő opciókat."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák a követelmények meghatározásánál</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl általános megfogalmazások</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Készíts egy szép weboldalt."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Készíts egy modern, minimalista
                    weboldalt fehér háttérrel, kék kiemelésekkel és nagy, olvasható betűtípussal."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Ellentmondásos követelmények</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Legyen minimalista, de sok
                    információval és sok képpel."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Minimalista dizájn, ahol a
                    kulcsinformációk jól kiemeltek, és a további részletek lenyíló szekciókban érhetők el."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok követelmény egyszerre</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Egy promptban 20+ különböző funkciót és
                    oldalt kérni.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Bontsd le a projektet kisebb, logikai
                    egységekre, és kérd ezeket külön-külön vagy fokozatosan.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Szubjektív kifejezések használata</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Legyen menő/trendi/modern."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Használjon nagy fehér tereket,
                    sans-serif betűtípust, és enyhe árnyékokat a kártyákon."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Technikai részletek kihagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Készíts egy webshopot."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Készíts egy webshopot Next.js és
                    Tailwind CSS használatával, amely támogatja a kosárba helyezést és a fizetési folyamatot."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A célközönség figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Nem említeni, kinek készül az oldal.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Az oldal 60+ éves felhasználóknak
                    készül, ezért nagy betűméreteket, egyszerű navigációt és kontrasztos színeket használj."
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

