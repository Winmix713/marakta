"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, MessageSquare, ListChecks, ArrowRight } from "lucide-react"

export function FeedbackModifications() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">5. Visszajelzés és módosítások</h1>
        <p className="text-muted-foreground text-lg">Hogyan kérhetsz célzott módosításokat a generált felületeken</p>
      </div>

      <Tabs defaultValue="process" onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="process">Folyamat</TabsTrigger>
          <TabsTrigger value="tips">Hatékony tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Visszajelzés és módosítások folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Eredmény alapos értékelése</h3>
                  <p className="text-muted-foreground">
                    Alaposan értékeld a V0 által generált eredményt. Azonosítsd a jó részeket, amelyeket meg szeretnél
                    tartani, és a problémás részeket, amelyeket módosítani szeretnél.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visszajelzések strukturálása</h3>
                  <p className="text-muted-foreground">
                    Rendszerezd a visszajelzéseidet logikus kategóriákba, például: vizuális dizájn, elrendezés,
                    funkcionalitás, tartalom. Használj listákat vagy számozott pontokat a jobb áttekinthetőség
                    érdekében.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Konkrét módosítási kérések megfogalmazása</h3>
                  <p className="text-muted-foreground">
                    Fogalmazz meg konkrét, egyértelmű módosítási kéréseket. Ahelyett, hogy azt mondanád "a fejléc nem
                    tetszik", írd: "a fejléc háttérszínét változtasd kékről zöldre (#34d399)".
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Prioritások meghatározása</h3>
                  <p className="text-muted-foreground">
                    Ha több módosítást kérsz, határozd meg a prioritásokat. Jelezd, mely változtatások a legfontosabbak,
                    és melyek kevésbé kritikusak.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Módosított eredmény ellenőrzése</h3>
                  <p className="text-muted-foreground">
                    A módosítások után ellenőrizd alaposan az új eredményt. Nézd meg, hogy minden kért változtatás
                    megfelelően megtörtént-e, és nem okozott-e új problémákat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa visszajelzés és módosítási kérés:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Módosítsd a hírlevél feliratkozási komponenst a következő visszajelzések alapján:

1. Vizuális dizájn:
   - A háttér legyen gradiens (kék -> lila) a jelenlegi egyszínű fehér helyett
   - A betűtípus legyen modernebb, használj Inter vagy Roboto betűtípust
   - A "Feliratkozás" gomb legyen nagyobb és feltűnőbb, használj gradiens hátteret

2. Elrendezés:
   - Adj hozzá egy illusztrációt a bal oldalra (email vagy hírlevél témájú)
   - A feliratkozási űrlap legyen jobb oldalon
   - Növeld a térközöket az elemek között 16px-ről 24px-re

3. Tartalom:
   - Változtasd a főcímet "Iratkozz fel hírlevelünkre" helyett "Csatlakozz közösségünkhöz"
   - Adj hozzá egy rövid leírást a főcím alá: "Iratkozz fel hírlevelünkre és értesülj elsőként a legfrissebb hírekről, exkluzív ajánlatokról és szakértői tippekről."
   - Adj hozzá egy "Miért iratkozz fel?" szekciót 3 ponttal

4. Funkcionalitás:
   - Adj hozzá egy GDPR jelölőnégyzetet a feliratkozás előtt
   - Adj hozzá egy "Már feliratkoztál? Leiratkozás" linket
   - Az email mező validálja az email formátumot

Megtartandó elemek:
- A kártyaszerű megjelenés
- A reszponzív viselkedés
- Az egyszerű, letisztult dizájn koncepció`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek visszajelzéshez és módosításokhoz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <MessageSquare className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj pozitív és negatív visszajelzést is</h3>
                  <p className="text-muted-foreground">
                    Ne csak azt mondd el, mit szeretnél megváltoztatni, hanem azt is, mi tetszik és mit szeretnél
                    megtartani. Ez segít a V0-nak megérteni a preferenciáidat.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <ListChecks className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj számozott listákat</h3>
                  <p className="text-muted-foreground">
                    A számozott listák segítenek strukturálni a visszajelzéseidet és könnyebbé teszik a V0 számára a
                    követést. Például: "1. Változtasd a fejléc színét. 2. Növeld a gomb méretét."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <ArrowRight className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj "előtte-utána" formátumot</h3>
                  <p className="text-muted-foreground">
                    Világosan jelezd, mi a jelenlegi állapot és mivé szeretnéd változtatni. Például: "Változtasd a kék
                    gombot (#1E40AF) zöldre (#10B981)."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj vizuális referenciákat a módosításokhoz</h3>
                  <p className="text-muted-foreground">
                    Ha nehéz szavakkal leírni a kívánt változtatást, használj vizuális referenciákat. Például: "A gomb
                    stílusa hasonlítson erre a képre."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Csoportosítsd a hasonló módosításokat</h3>
                  <p className="text-muted-foreground">
                    Csoportosítsd a hasonló típusú módosításokat (pl. színek, méretek, elrendezés), hogy a V0 könnyebben
                    megértse a kéréseidet és következetesen alkalmazhassa a változtatásokat.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj technikai terminológiát, ha releváns</h3>
                  <p className="text-muted-foreground">
                    Ha ismered a megfelelő technikai terminológiát, használd azt a pontosabb kommunikáció érdekében.
                    Például: "Növeld a padding értékét 16px-ről 24px-re" vagy "Változtasd a flex-direction értékét
                    column-ról row-ra".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák visszajelzésnél és módosításoknál</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl általános visszajelzések</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Ez nem tetszik" vagy "Tedd szebbé".
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "A fejléc túl nagy, csökkentsd a
                    magasságát 100px-ről 80px-re."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok módosítás kérése egyszerre</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 20+ különböző módosítás kérése egy
                    promptban.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Csoportosítsd a módosításokat logikai
                    kategóriákba, és ha túl sok van, fontold meg több iteráció használatát.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Ellentmondásos kérések</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Legyen minimalista, de adj hozzá sok
                    részletet és grafikát."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozd meg pontosan, mit értesz
                    minimalista alatt, és mely területeken szeretnél több részletet.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Csak a negatívumokra fókuszálás</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Csak azt mondani, mi nem tetszik,
                    anélkül, hogy jeleznéd, mi jó.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Kezdd a visszajelzést a pozitív
                    elemekkel, majd térj rá a módosítandó részekre.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Szubjektív kifejezések használata konkrétumok nélkül</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> "Legyen
                    modernebb/trendisebb/elegánsabb."
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> "Használj sans-serif betűtípust, több
                    fehér teret és enyhe árnyékokat a modernebb megjelenésért."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">A kontextus figyelmen kívül hagyása</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Módosításokat kérni anélkül, hogy
                    figyelembe vennéd a dizájn eredeti célját és kontextusát.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Mindig tartsd szem előtt a dizájn
                    célját és célközönségét, és ehhez igazítsd a módosítási kéréseket.
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

