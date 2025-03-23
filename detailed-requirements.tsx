import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle } from "lucide-react"

export function DetailedRequirements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Részletes követelmények</h1>
        <p className="text-muted-foreground mt-2">
          A részletes követelmények meghatározása kulcsfontosságú a sikeres AI-generált prototípusok létrehozásához.
        </p>
      </div>

      <Tabs defaultValue="process">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="process">Folyamat bemutatása</TabsTrigger>
          <TabsTrigger value="tips">Hatékony prompt tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">Hogyan határozz meg részletes követelményeket</h2>

          <div className="grid gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Lépés: Célok meghatározása</CardTitle>
                <CardDescription>Határozd meg világosan, mit szeretnél elérni a prototípussal.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Példa: "Egy olyan bejelentkezési űrlapot szeretnék, amely:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Lehetővé teszi a felhasználók számára az e-mail címmel és jelszóval történő bejelentkezést</li>
                  <li>Tartalmaz egy "Elfelejtett jelszó" opciót</li>
                  <li>Biztosít közösségi bejelentkezési lehetőségeket (Google, Facebook)</li>
                  <li>Mobilbarát és hozzáférhető"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Lépés: Funkcionális követelmények</CardTitle>
                <CardDescription>Sorold fel az összes szükséges funkciót és interakciót.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Példa: "Az űrlapnak a következő funkciókat kell tartalmaznia:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Valós idejű validáció az e-mail mezőben</li>
                  <li>Jelszó erősségének jelzése</li>
                  <li>Jelszó megjelenítése/elrejtése gomb</li>
                  <li>Bejelentkezve maradás opció</li>
                  <li>Hibaüzenetek megjelenítése sikertelen bejelentkezés esetén"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Lépés: Vizuális és UX követelmények</CardTitle>
                <CardDescription>Határozd meg a design és felhasználói élmény elvárásokat.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Példa: "A design legyen:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Minimális, tiszta megjelenésű</li>
                  <li>A cégem színpalettáját használja (elsődleges szín: #3B82F6)</li>
                  <li>Tartalmazzon finom animációkat a gombnyomásoknál</li>
                  <li>Legyen összhangban a meglévő design rendszerünkkel"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Lépés: Technikai specifikációk</CardTitle>
                <CardDescription>Add meg a technikai keretrendszereket és korlátozásokat.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Példa: "A prototípus:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Next.js és Tailwind CSS használatával készüljön</li>
                  <li>Legyen reszponzív (mobil, tablet és asztali méretekre)</li>
                  <li>Használjon shadcn/ui komponenseket</li>
                  <li>Legyen kompatibilis a legújabb böngészőkkel"</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">Hatékony prompt tippek</h2>

          <div className="grid gap-4 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <div>
                  <CardTitle>Használj strukturált formátumot</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Rendezd a követelményeidet logikus csoportokba (pl. funkcionális, vizuális, technikai). Ez segít a
                  V0-nak jobban megérteni a prioritásokat.
                </p>
                <div className="bg-muted p-3 rounded-md mt-3 text-sm">
                  <p className="font-medium">Példa:</p>
                  <p className="mt-1">
                    "Készíts egy termékoldalt a következő követelményekkel:
                    <br />
                    <br />
                    <strong>Funkcionális követelmények:</strong>
                    <br />- Termék galéria
                    <br />- Méret választó
                    <br />- Kosárba helyezés gomb
                    <br />
                    <br />
                    <strong>Vizuális követelmények:</strong>
                    <br />- Minimalista design
                    <br />- Fehér háttér, fekete szöveg
                    <br />
                    <br />
                    <strong>Technikai követelmények:</strong>
                    <br />- Next.js App Router
                    <br />- Tailwind CSS"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <div>
                  <CardTitle>Adj meg konkrét példákat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  A konkrét példák segítenek a V0-nak jobban megérteni, mit szeretnél. Használj valós adatokat vagy
                  tartalmakat, ahol lehetséges.
                </p>
                <div className="bg-muted p-3 rounded-md mt-3 text-sm">
                  <p className="font-medium">Példa:</p>
                  <p className="mt-1">
                    "A termékadatok a következők legyenek:
                    <br />- Terméknév: 'Prémium bőr pénztárca'
                    <br />- Ár: 12.990 Ft
                    <br />- Elérhető színek: fekete, barna, kék
                    <br />- Leírás: 'Kézzel készített, valódi bőr pénztárca, amely 8 kártyát és bankjegyeket is
                    tárolhat.'"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <div>
                  <CardTitle>Határozd meg a prioritásokat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Jelezd, mely követelmények a legfontosabbak. Ez segít a V0-nak a megfelelő kompromisszumok
                  meghozatalában.
                </p>
                <div className="bg-muted p-3 rounded-md mt-3 text-sm">
                  <p className="font-medium">Példa:</p>
                  <p className="mt-1">
                    "A következő követelmények fontossági sorrendben:
                    <br />
                    1. A mobilbarát design KRITIKUS
                    <br />
                    2. A kosárba helyezés funkció működjön
                    <br />
                    3. A termékgaléria legyen interaktív
                    <br />
                    4. Az animációk szépek, de opcionálisak"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <div>
                  <CardTitle>Használj vizuális leírásokat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Ha nincs referenciád, részletesen írd le a vizuális elemeket, beleértve a színeket, elrendezést és
                  hangulatot.
                </p>
                <div className="bg-muted p-3 rounded-md mt-3 text-sm">
                  <p className="font-medium">Példa:</p>
                  <p className="mt-1">
                    "A design legyen elegáns és prémium érzetet keltő:
                    <br />- Használj sok fehér teret
                    <br />- Az elsődleges szín legyen sötétkék (#1E3A8A)
                    <br />- A másodlagos szín legyen arany (#D4AF37)
                    <br />- A termékképek legyenek nagyok és dominánsak
                    <br />- A tipográfia legyen serif a címsorokhoz és sans-serif a szövegtörzsekhez"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">Kerülendő hibák</h2>

          <div className="grid gap-4 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <AlertTriangle className="h-5 w-5 mt-1 text-amber-500" />
                <div>
                  <CardTitle>Túl általános követelmények</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Az általános kérések, mint "készíts egy szép weboldalt" nem adnak elég információt a V0-nak a pontos
                  elvárásokról.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-red-800">Kerülendő:</p>
                    <p className="mt-1 text-red-700">"Készíts egy modern bejelentkezési oldalt."</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-green-800">Helyette:</p>
                    <p className="mt-1 text-green-700">
                      "Készíts egy modern bejelentkezési oldalt sötét témával, e-mail és jelszó mezőkkel, valamint
                      Google és Facebook bejelentkezési opciókkal."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <AlertTriangle className="h-5 w-5 mt-1 text-amber-500" />
                <div>
                  <CardTitle>Ellentmondásos követelmények</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Kerüld az egymásnak ellentmondó követelményeket, mert ez összezavarhatja a V0-t és nem optimális
                  eredményt ad.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-red-800">Kerülendő:</p>
                    <p className="mt-1 text-red-700">
                      "Legyen minimális design, de sok animációval és vizuális elemmel. Legyen egyszerű, de tartalmazzon
                      sok funkciót."
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-green-800">Helyette:</p>
                    <p className="mt-1 text-green-700">
                      "Legyen minimális design, néhány jól elhelyezett animációval a kulcsfontosságú interakciókhoz. A
                      fő funkciók (bejelentkezés, regisztráció) legyenek kiemelve."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <AlertTriangle className="h-5 w-5 mt-1 text-amber-500" />
                <div>
                  <CardTitle>Túl sok követelmény egyszerre</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  A túl sok követelmény egy promptban túlterhelheti a V0-t. Jobb, ha a komplex projekteket kisebb
                  részekre bontod.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-red-800">Kerülendő:</p>
                    <p className="mt-1 text-red-700">
                      "Készíts egy teljes e-kereskedelmi weboldalt terméklistával, részletes termékoldallal, kosárral,
                      fizetési folyamattal, felhasználói fiókkezeléssel, admin felülettel és mobilalkalmazással."
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-green-800">Helyette:</p>
                    <p className="mt-1 text-green-700">
                      "Készíts egy terméklistázó oldalt egy e-kereskedelmi weboldal számára. A következő lépésben a
                      termék részletes oldalát fogjuk elkészíteni."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <AlertTriangle className="h-5 w-5 mt-1 text-amber-500" />
                <div>
                  <CardTitle>Technikai részletek hiánya</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Ha nem adsz meg technikai részleteket, a V0 alapértelmezett megoldásokat fog használni, amelyek nem
                  feltétlenül felelnek meg az elvárásaidnak.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-red-800">Kerülendő:</p>
                    <p className="mt-1 text-red-700">"Készíts egy űrlapot, amely adatokat küld."</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    <p className="font-medium text-green-800">Helyette:</p>
                    <p className="mt-1 text-green-700">
                      "Készíts egy űrlapot React Hook Form használatával, amely adatokat küld egy API-nak POST kéréssel,
                      és kezelje a betöltési és hibaállapotokat."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

