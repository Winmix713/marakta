"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Route, GitBranch, MessageSquare, ArrowLeftRight } from "lucide-react"

export function UserFlows() {
  const [activeTab, setActiveTab] = useState<"process" | "tips" | "mistakes">("process")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">6. Felhasználói folyamatok</h1>
        <p className="text-muted-foreground text-lg">Hogyan tervezhetsz interaktív és felhasználóbarát élményeket</p>
      </div>

      <Tabs defaultValue="process" onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="process">Folyamat</TabsTrigger>
          <TabsTrigger value="tips">Hatékony tippek</TabsTrigger>
          <TabsTrigger value="mistakes">Kerülendő hibák</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Felhasználói folyamatok tervezésének folyamata</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Felhasználói célok azonosítása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg, mit szeretne elérni a felhasználó a folyamat során. Például: "A felhasználó szeretne
                    jelszót visszaállítani" vagy "A felhasználó szeretne terméket vásárolni".
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Folyamat lépéseinek meghatározása</h3>
                  <p className="text-muted-foreground">
                    Bontsd le a folyamatot logikai lépésekre, a kezdőponttól a végpontig. Például egy
                    jelszó-visszaállítási folyamat esetén: email megadása, kód ellenőrzése, új jelszó megadása, sikeres
                    visszaállítás.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Adatbeviteli és validációs szabályok definiálása</h3>
                  <p className="text-muted-foreground">
                    Határozd meg, milyen adatokat kell megadnia a felhasználónak minden lépésben, és milyen validációs
                    szabályokat kell alkalmazni. Például: "Az email mezőnek érvényes email formátumúnak kell lennie"
                    vagy "A jelszónak legalább 8 karakterből kell állnia".
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visszajelzések és hibaüzenetek tervezése</h3>
                  <p className="text-muted-foreground">
                    Tervezd meg, hogyan kap visszajelzést a felhasználó a folyamat során. Határozd meg a hibaüzeneteket,
                    sikeres művelet visszaigazolását és az állapotjelzőket. Például: "Ha a jelszavak nem egyeznek,
                    jelenjen meg a 'A jelszavak nem egyeznek' hibaüzenet".
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Alternatív útvonalak és kivételek kezelése</h3>
                  <p className="text-muted-foreground">
                    Gondold át a különböző útvonalakat és kivételeket, amelyek előfordulhatnak a folyamat során.
                    Például: "Mi történik, ha a felhasználó nem kapja meg a kódot?" vagy "Hogyan léphet vissza a
                    felhasználó az előző lépésre?".
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Példa felhasználói folyamat promptra:</h3>
            <div className="bg-slate-50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              {`Készíts egy jelszó-visszaállítási folyamatot egy webalkalmazás számára a következő lépésekkel:

1. Email megadása
   - A felhasználó megadja az email címét
   - Validáció: érvényes email formátum
   - Hibaüzenet: "Kérjük, adjon meg egy érvényes email címet"
   - Sikeres esetben: "Ellenőrizze email fiókját a további utasításokért"

2. Kód ellenőrzése
   - A felhasználó megadja a kapott 6 jegyű kódot
   - Validáció: 6 számjegy
   - Hibaüzenet: "Érvénytelen kód. Kérjük, ellenőrizze és próbálja újra"
   - "Nem kapta meg a kódot?" opció újraküldéshez
   - Sikeres esetben: továbblépés az új jelszó megadásához

3. Új jelszó megadása
   - A felhasználó megad egy új jelszót és megerősíti azt
   - Validáció: minimum 8 karakter, tartalmazzon nagybetűt, kisbetűt és számot
   - Jelszó erősség indikátor
   - Hibaüzenet: "A jelszavak nem egyeznek" vagy "A jelszó nem elég erős"
   - Sikeres esetben: "Jelszava sikeresen megváltoztatva"

4. Sikeres visszaállítás
   - Visszaigazoló üzenet
   - "Vissza a bejelentkezéshez" gomb

Minden lépésnél legyen lehetőség visszalépni az előző lépésre. A folyamat legyen lépésenkénti (wizard), vizuálisan jelezve, hogy a felhasználó hol tart a folyamatban.`}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hatékony tippek felhasználói folyamatok tervezéséhez</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <Route className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj felhasználói történeteket</h3>
                  <p className="text-muted-foreground">
                    A felhasználói történetek segítenek kontextusba helyezni a folyamatot. Például: "Felhasználóként
                    szeretnék jelszót visszaállítani, hogy újra hozzáférhessek a fiókhoz, ha elfelejtettem a
                    jelszavamat."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <GitBranch className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Tervezd meg az elágazásokat</h3>
                  <p className="text-muted-foreground">
                    Gondold át és tervezd meg a folyamat összes lehetséges elágazását és alternatív útvonalát. Például:
                    "Ha a felhasználó már regisztrált, irányítsd a bejelentkezési oldalra."
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MessageSquare className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adj konkrét hibaüzeneteket</h3>
                  <p className="text-muted-foreground">
                    Határozz meg konkrét, segítőkész hibaüzeneteket minden lehetséges hibára. Például: "A jelszónak
                    legalább egy nagybetűt kell tartalmaznia" ahelyett, hogy "Érvénytelen jelszó".
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <ArrowLeftRight className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Biztosíts visszalépési lehetőséget</h3>
                  <p className="text-muted-foreground">
                    Mindig biztosíts lehetőséget a felhasználónak, hogy visszalépjen az előző lépésre vagy megszakítsa a
                    folyamatot. Ez növeli a felhasználói élményt és csökkenti a frusztrációt.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Használj vizuális visszajelzéseket</h3>
                  <p className="text-muted-foreground">
                    Tervezz vizuális visszajelzéseket a folyamat állapotáról, például folyamatjelzőt, amely mutatja, hol
                    tart a felhasználó a folyamatban, vagy színkódokat a sikeres/sikertelen műveletek jelzésére.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Minimalizáld a szükséges lépéseket</h3>
                  <p className="text-muted-foreground">
                    Törekedj arra, hogy a folyamat a lehető legkevesebb lépésből álljon, miközben még mindig
                    felhasználóbarát és érthető marad. Minden extra lépés növeli a lemorzsolódás esélyét.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kerülendő hibák felhasználói folyamatok tervezésénél</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok lépés</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> 7+ lépéses folyamat egyszerű
                    feladatokhoz.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Csoportosítsd a kapcsolódó mezőket egy
                    lépésbe, és csak a szükséges információkat kérd.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Hiányos validáció</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Validáció nélküli űrlapok vagy homályos
                    hibaüzenetek.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Határozz meg konkrét validációs
                    szabályokat és segítőkész hibaüzeneteket minden mezőhöz.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Visszalépési lehetőség hiánya</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan folyamat, ahol a felhasználó nem
                    tud visszalépni vagy megszakítani a műveletet.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Mindig biztosíts "Vissza" gombot és
                    lehetőséget a folyamat megszakítására.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Nem egyértelmű következő lépések</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan felület, ahol nem egyértelmű, mit
                    kell tennie a felhasználónak a következő lépéshez.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj egyértelmű címeket,
                    utasításokat és feltűnő CTA gombokat a következő lépéshez.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Túl sok információ kérése</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan űrlapok, amelyek túl sok vagy
                    irreleváns információt kérnek.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Csak a feltétlenül szükséges
                    információkat kérd, és jelöld meg, mely mezők kötelezőek és melyek opcionálisak.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Hiányzó állapotjelzők</h3>
                  <p className="text-muted-foreground">
                    <span className="text-red-500 font-medium">Kerülendő:</span> Olyan folyamat, ahol a felhasználó nem
                    tudja, hol tart és hány lépés van még hátra.
                    <br />
                    <span className="text-green-500 font-medium">Helyette:</span> Használj folyamatjelzőt vagy
                    lépésszámlálót, amely mutatja a haladást és a hátralévő lépéseket.
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

