"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Repeat, IterationCw, GitBranch } from "lucide-react"

export function AlternativeDesign() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">4. Alternatív tervezés</h1>
        <p className="text-muted-foreground text-lg">
          Hogyan finomíthatod fokozatosan a V0 által generált eredményeket
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
            <h2 className="text-xl font-semibold mb-4">Az iteratív fejlesztés folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Kezdeti prompt megfogalmazása</h3>
                  <p className="text-muted-foreground">
                    Kezdd egy egyszerű, de konkrét prompttal, amely leírja az alapvető igényeidet. Ne próbálj túl sok
                    részletet belezsúfolni az első körben, csak a legfontosabb követelményeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Első eredmény értékelése</h3>
                  <p className="text-muted-foreground">
                    Értékeld az első generálás eredményét: mi tetszik, mi nem, és mi hiányzik. Készíts jegyzeteket a
                    következő iterációhoz, azonosítsd a fejlesztendő területeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Prompt finomítása</h3>
                  <p className="text-muted-foreground">
                    Készíts egy új promptot, amely tartalmazza az eredeti kérést, valamint a konkrét módosításokat és
                    finomításokat. Légy specifikus a változtatásokkal kapcsolatban, és hivatkozz az előző eredményre.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Ismételt generálás és értékelés</h3>
                  <p className="text-muted-foreground">
                    Ismételd a 2. és 3. lépést, amíg el nem éred a kívánt eredményt. Minden iterációval egyre
                    specifikusabb lehetsz, és fokozatosan finomíthatod a dizájnt.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Véglegesítés</h3>
                  <p className="text-muted-foreground">
                    Az utolsó iterációban kérhetsz apró finomításokat, vagy exportálhatod a kódot további
                    testreszabáshoz. Ezen a ponton már csak a részleteken kell dolgoznod.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa iteratív fejlesztési folyamatra:</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Iteráció - Kezdeti prompt:</h4>
                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal."
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Iteráció - Finomított prompt:</h4>
                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
                  Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy
                  'Leggyakrabban választott' jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a
                  csomagok alatt, amely részletezi a funkciókat."
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Iteráció - Részletes prompt:</h4>
                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
                  Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy
                  'Leggyakrabban választott' jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a
                  csomagok alatt, amely részletezi a funkciókat. Stílus: - Használj gradiens hátteret a fejlécben
                  (világoskék -> sötétkék) - A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe
                  árnyékkal - A kiemelt csomag (Pro) legyen kék szegéllyel ellátva - Legyen egy váltógomb, amivel
                  éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél) - Minden kártyán legyen egy
                  'Próbáld ki ingyen' gomb - A táblázatban használj pipákat és X-eket a funkciók jelölésére"
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek az iteratív fejlesztéshez</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <Repeat className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Egy iterációban csak néhány aspektusra fókuszálj</h3>
                  <p className="text-muted-foreground">
                    Ahelyett, hogy mindent egyszerre próbálnál megváltoztatni, minden iterációban csak néhány aspektusra
                    koncentrálj. Ez segít a V0-nak jobban megérteni a kéréseidet.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <IterationCw className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Hivatkozz az előző eredményre konkrét részletekkel</h3>
                  <p className="text-muted-foreground">
                    Amikor új promptot írsz, hivatkozz konkrétan az előző eredmény elemeire. Például: "Az előző
                    verzióban tetszett a fejléc elrendezése, de változtasd meg a színét kékről zöldre."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <GitBranch className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Próbálj ki alternatív megközelítéseket</h3>
                  <p className="text-muted-foreground">
                    Ha nem vagy elégedett az eredménnyel, próbálj ki teljesen más megközelítéseket is. Például: "Mutass
                    egy alternatív elrendezést, ahol a képek balra, a szöveg pedig jobbra kerül."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj pontos leírásokat a módosításokhoz</h3>
                  <p className="text-muted-foreground">
                    Légy konkrét a kért módosításokkal kapcsolatban. Ahelyett, hogy azt mondanád "tedd nagyobbá a
                    gombot", írd: "növeld a gomb méretét 120px szélesre és 48px magasra".
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Tartsd meg, ami jó, és csak azt változtasd, ami szükséges</h3>
                  <p className="text-muted-foreground">
                    Minden iterációban jelezd, mely részek jók és megtartandók, és csak azokat a részeket változtasd,
                    amelyekkel nem vagy elégedett. Ez segít elkerülni, hogy a V0 olyan elemeket is megváltoztasson,
                    amelyek már megfelelőek.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj vizuális referenciákat az iterációkban</h3>
                  <p className="text-muted-foreground">
                    Ha nehéz szavakkal leírni, mit szeretnél, használj vizuális referenciákat az iterációkban. Például:
                    "A következő verzióban a gombok stílusa hasonlítson erre a képre."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák az iteratív fejlesztésnél</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok változtatás kérése egyszerre</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 10+ különböző módosítás kérése egy
                    iterációban.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Fókuszálj 2-3 kulcsfontosságú
                    változtatásra iterációnként.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Homályos visszajelzések</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Tedd szebbé" vagy "modernebb legyen"
                    típusú visszajelzések.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Adj konkrét, mérhető visszajelzéseket:
                    "Használj világosabb kék színt (#3B82F6) a gombokhoz."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Az eredeti prompt teljes újraírása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Minden iterációban teljesen új promptot
                    írni, figyelmen kívül hagyva az előző eredményeket.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Építs az előző promptra, és csak a
                    szükséges módosításokat add hozzá.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Ellentmondásos utasítások</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Különböző iterációkban ellentmondó
                    utasításokat adni (pl. "használj kék színt" majd "ne használj kék színt").
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Légy következetes a kéréseiddel, vagy
                    magyarázd el, miért változtattad meg a véleményed.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok iteráció apró változtatásokkal</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 10+ iteráció nagyon apró
                    változtatásokkal.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Gyűjtsd össze a kisebb
                    változtatásokat, és kérd őket egyszerre egy iterációban.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A pozitív visszajelzés hiánya</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak a problémákra és hiányosságokra
                    fókuszálni.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Jelezd, mely részek jók és
                    megtartandók, ez segít a V0-nak megérteni a preferenciáidat.
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

