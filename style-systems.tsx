"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Palette, Type, Layout, Box } from "lucide-react"

export function StyleSystems() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">3. Stílus rendszerek</h1>
        <p className="text-muted-foreground text-lg">
          Hogyan biztosíthatod a konzisztens megjelenést a V0 generált felületeken
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
            <h2 className="text-xl font-semibold mb-4">Stílus rendszer meghatározásának folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Színpaletta meghatározása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a projekt színpalettáját, beleértve az elsődleges, másodlagos és semleges színeket,
                    valamint az állapotjelző színeket (siker, hiba, figyelmeztetés). Adj meg konkrét HEX vagy RGB
                    színkódokat.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500"></div>
                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Tipográfia definiálása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a használni kívánt betűtípusokat, betűméreteket, betűvastagságokat és sormagasságokat a
                    különböző szövegelemekhez (címsorok, bekezdések, feliratok).
                  </p>
                  <div className="mt-3 space-y-2">
                    <p className="text-2xl font-bold">Főcím (24px)</p>
                    <p className="text-xl font-semibold">Alcím (20px)</p>
                    <p className="text-base">Normál szöveg (16px)</p>
                    <p className="text-sm">Kis szöveg (14px)</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Komponensek stílusának meghatározása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg az alapvető UI komponensek (gombok, űrlapmezők, kártyák, navigáció) vizuális stílusát,
                    beleértve a formákat, árnyékokat, szegélyeket és átmeneteket.
                  </p>
                  <div className="mt-3 space-y-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Elsődleges gomb</button>
                    <div className="px-4 py-2 border border-slate-200 rounded-md">Kártya</div>
                    <input
                      type="text"
                      className="px-3 py-2 border border-slate-200 rounded-md w-full"
                      placeholder="Input mező"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Elrendezési szabályok definiálása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg az elrendezési szabályokat, beleértve a rácsrendszert, térközöket, margókat és a
                    reszponzív töréspontokat.
                  </p>
                  <div className="mt-3">
                    <div className="grid grid-cols-12 gap-1 h-8">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="bg-blue-200 h-full"></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>xs</span>
                      <span>sm</span>
                      <span>md</span>
                      <span>lg</span>
                      <span>xl</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Stílus rendszer dokumentálása</h3>
                  <p className="text-muted-foreground">
                    Dokumentáld a teljes stílus rendszert egy strukturált formában, hogy könnyen hivatkozhass rá a V0
                    promptokban. Használhatsz Markdown formátumot vagy táblázatokat a rendszerezéshez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa stílus rendszer promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Készíts egy kapcsolatfelvételi űrlapot egy weboldal számára a következő stílus rendszer alapján:

Színek:
- Elsődleges szín: #6366f1 (indigo)
- Másodlagos szín: #f97316 (narancs)
- Háttér: #f8fafc (világos szürke)
- Szöveg: #1e293b (sötét szürke)
- Siker: #10b981 (zöld)
- Hiba: #ef4444 (piros)

Tipográfia:
- Főcímek: Inter, 24px, félkövér, 1.2 sormagasság
- Alcímek: Inter, 18px, félkövér, 1.3 sormagasság
- Normál szöveg: Inter, 16px, normál, 1.5 sormagasság
- Kis szöveg: Inter, 14px, normál, 1.5 sormagasság

Komponensek:
- Gombok: lekerekített sarkok (8px), átmenetes háttér, hover effekt
- Input mezők: lekerekített sarkok (8px), világos háttér, fókusz effekt (kék szegély)
- Kártyák: fehér háttér, enyhe árnyék (0 4px 6px rgba(0, 0, 0, 0.1)), lekerekített sarkok (12px)
- Címkék: kis lekerekítés (4px), halvány háttér, kis belső margó

Elrendezés:
- Maximális szélesség: 1200px
- Belső margók: 24px
- Elemek közötti távolság: 16px
- Reszponzív töréspontok: 640px, 768px, 1024px, 1280px`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek stílus rendszerek használatához</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <Palette className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj színkód generátorokat</h3>
                  <p className="text-muted-foreground">
                    Használj olyan eszközöket, mint a Coolors vagy Adobe Color, hogy harmonikus színpalettát hozz létre.
                    Ezek segítenek kiválasztani az egymással jól működő színeket.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Type className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Kövesd a tipográfiai skálát</h3>
                  <p className="text-muted-foreground">
                    Használj következetes tipográfiai skálát (pl. 1.2x vagy 1.5x szorzót) a különböző szövegméretek
                    között. Ez professzionális és harmonikus megjelenést biztosít.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Layout className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Határozz meg térköz rendszert</h3>
                  <p className="text-muted-foreground">
                    Használj következetes térköz rendszert (pl. 4px vagy 8px alapú rácsot) a margók és paddinok
                    meghatározásához. Ez segít fenntartani a vizuális ritmust.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Box className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Definiálj komponens variánsokat</h3>
                  <p className="text-muted-foreground">
                    Határozd meg a komponensek különböző variánsait (pl. elsődleges, másodlagos, körvonalazott gombok),
                    hogy a V0 következetesen használhassa őket.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj meglévő dizájn rendszereket referenciaként</h3>
                  <p className="text-muted-foreground">
                    Inspirálódj olyan népszerű dizájn rendszerekből, mint a Material Design, Apple Human Interface
                    Guidelines vagy a Tailwind. Ezek jól átgondolt alapelveket követnek.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj példákat a komponensekre</h3>
                  <p className="text-muted-foreground">
                    A stílus rendszer leírása mellett adj konkrét példákat a komponensek használatára, hogy a V0 jobban
                    megértse, hogyan kell alkalmazni a stílusokat.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák stílus rendszerek használatánál</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok szín használata</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 10+ különböző szín meghatározása a
                    palettában.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj 1-2 elsődleges színt, 1-2
                    másodlagos színt, és néhány semleges árnyalatot.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Inkonzisztens mértékegységek</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Keverni a különböző mértékegységeket
                    (px, em, rem, %) következetlenül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Válassz egy fő mértékegységet (pl. px
                    vagy rem) és használd következetesen.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok betűtípus</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 3+ különböző betűtípus használata egy
                    projekten belül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj 1-2 betűtípust, és
                    különböztesd meg a szövegelemeket mérettel, vastagsággal és stílussal.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Hiányos komponens definíciók</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak az alapállapotok definiálása,
                    interakciós állapotok nélkül.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozd meg a komponensek összes
                    állapotát (alap, hover, aktív, letiltott, fókusz).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Alacsony kontraszt</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan színkombinációk használata,
                    amelyek nem biztosítanak megfelelő kontrasztot (pl. világos szürke szöveg fehér háttéren).
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Ellenőrizd a színkontrasztot
                    akadálymentességi szempontból, és biztosítsd, hogy megfeleljen a WCAG szabványoknak.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A reszponzivitás figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak egy képernyőméretre optimalizált
                    stílus rendszer definiálása.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozd meg, hogyan változnak a
                    komponensek és az elrendezés különböző képernyőméreteken.
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

