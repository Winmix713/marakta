import type React from "react"
// Optimalizáljuk az importokat - csak a szükséges komponenseket importáljuk
import Image from "next/image"
import Link from "next/link"
import { PromptPreview } from "@/components/prompt-preview"
import { EcommercePreview } from "@/components/ecommerce-preview"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ImageReferencePreview } from "@/components/image-reference-preview"
import { IterativeDesignPreview } from "@/components/iterative-design-preview"
import { ComponentBasedPreview } from "@/components/component-based-preview"
import { StyleSystemPreview } from "@/components/style-system-preview"
import { UserFlowPreview } from "@/components/user-flow-preview"
import { FeedbackPreview } from "@/components/feedback-preview"
import { CodeExportPreview } from "@/components/code-export-preview"
import { PromptTemplateSelector } from "@/components/prompt-template-selector"
import { Button } from "@/components/ui/button"

// Létrehozunk egy újrafelhasználható Section komponenst
const Section = ({
  id,
  title,
  subtitle,
  bgColor = "bg-white",
  children,
}: {
  id?: string
  title: string
  subtitle: string
  bgColor?: string
  children: React.ReactNode
}) => (
  <section id={id} className={`w-full py-12 md:py-24 lg:py-32 ${bgColor}`}>
    <div className="container">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className="mx-auto max-w-[700px]">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  </section>
)

export default function V0Guide() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - optimalizált */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">v0.dev</div>
            <nav className="hidden md:flex gap-6">
              {[
                { href: "#capabilities", label: "Képességek" },
                { href: "#tips", label: "Tippek" },
                { href: "#examples", label: "Példák" },
                { href: "#success-stories", label: "Sikertörténetek" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Bevezető szekció */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                  V0 Gyorstalpaló: Tippek és trükkök az AI Prototípus-készítéshez
                </h1>
                <p className="mx-auto max-w-[700px]">Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett</p>
              </div>
              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm text-left mt-4">
                <p className="mb-4">
                  A V0 egy AI-alapú eszköz, amely képes szöveges utasításokból felületeket, prototípusokat, sőt teljesen
                  működőképes alkalmazásokat létrehozni.
                </p>
                <p className="mb-4">
                  Más hasonló eszközökhöz hasonlóan könnyen előállítható vele egy kezdeti koncepció.
                </p>
                <p className="mb-4">
                  De mi van, ha többet szeretnél, mint egy első vázlat? Mi van, ha nagyobb kontrollt szeretnél az
                  eredmények felett? Mi van, ha egy olyan dizájnt akarsz, amely közelebb áll a saját elképzeléseidhez?
                </p>
                <p className="mb-4">
                  Az 50-60%-os készültségi szint gyorsan elérhető, de az ezt meghaladó finomítás a trükkös rész.
                </p>
                <p>
                  Ma 8 módszert osztunk meg, amelyek segítségével maximalizálhatod a V0 lehetőségeit, és nagyobb
                  precizitást és kontrollt nyerhetsz az AI által generált eredmények felett.
                </p>
              </div>
              <div className="mx-auto max-w-[800px] mt-8">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="v0.dev felhasználói felület"
                  width={800}
                  height={500}
                  className="rounded-lg border border-border overflow-hidden"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Áttekintés szekció - újrafelhasználható komponenssel */}
        <Section id="capabilities" title="Áttekintés" subtitle="Ismerje meg a V0 alapjait">
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A V0-t a Vercel fejlesztette, amely egy népszerű felhőplatform, amely megkönnyíti a fejlesztők számára a
              webalkalmazások üzemeltetését és kezelését.
            </p>
            <p className="mb-4">
              A fejlesztők mellett azonban hatalmas potenciált látunk a dizájnerek, termékmenedzserek, vállalkozók és
              más szakemberek számára is, különösen a proof-of-concept (PoC) létrehozásában.
            </p>
            <p className="mb-4">Úgy gondoljuk, hogy az ilyen eszközök, mint a V0, itt a leghasznosabbak.</p>
            <p>
              <strong>
                A következőkben részletesen bemutatjuk a 8 legfontosabb módszert, amelyek segítségével kihasználhatod a
                V0 teljes potenciálját.
              </strong>
            </p>
          </div>
        </Section>

        {/* 1. TIPP: Részletes követelmények */}
        <Section
          id="tip-1"
          title="1️⃣ Adj meg részletes követelményeket"
          subtitle="Hogyan fogalmazz meg hatékony utasításokat a V0 számára"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              Egy részletes követelmény segíthet jobb eredményeket elérni, mint egy rövid, homályos utasítás. De tudjuk,
              hogy nem könnyű ilyet megfogalmazni.
            </p>
            <p className="mb-4">
              Mindig kérheted a ChatGPT vagy Claude segítségét egy első vázlat elkészítéséhez az igényeid alapján, amit
              aztán tovább finomíthatsz.
            </p>
            <p className="mb-4">
              Sok felhasználó létrehozott saját botokat (egyedi GPT-ket), amelyek segítenek gyorsan generálni részletes
              promptokat AI-alapú eszközökhöz.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <PromptPreview />
          </div>

          {/* Prompt sablonok előnézete */}
          <div className="mx-auto max-w-[800px] mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Prompt sablonok előnézete</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <EcommercePreview />
              <DashboardPreview />
            </div>
          </div>

          {/* Prompt sablon választó hozzáadása */}
          <div className="mx-auto max-w-[800px] mt-8">
            <PromptTemplateSelector />
          </div>

          {/* Tippek és trükkök a részletes promptokhoz */}
          <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
            <h3 className="text-xl font-semibold mb-4">A tökéletes prompt anatómiája</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">✅ Amit érdemes belevenni:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Pontos célmeghatározás</strong> - Mi a projekt célja és kinek készül?
                  </li>
                  <li>
                    <strong>Vizuális stílus</strong> - Modern, minimalista, játékos, elegáns?
                  </li>
                  <li>
                    <strong>Színvilág</strong> - Konkrét színkódok vagy általános színsémák
                  </li>
                  <li>
                    <strong>Felhasználói folyamatok</strong> - Milyen interakciókat kell támogatnia?
                  </li>
                  <li>
                    <strong>Komponensek listája</strong> - Milyen UI elemekre van szükség?
                  </li>
                  <li>
                    <strong>Reszponzivitás</strong> - Milyen képernyőméretekre optimalizáljunk?
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-md border border-red-100">
                <h4 className="font-medium text-red-800 mb-2">❌ Amit kerülj:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Túl általános kérések</strong> - "Csinálj egy szép weboldalt"
                  </li>
                  <li>
                    <strong>Ellentmondásos utasítások</strong> - "Legyen minimalista, de sok animációval"
                  </li>
                  <li>
                    <strong>Túl sok funkció egyszerre</strong> - Inkább bontsd kisebb részekre
                  </li>
                  <li>
                    <strong>Technikai zsargon</strong> - Hacsak nem specifikus implementációt kérsz
                  </li>
                  <li>
                    <strong>Homályos elvárások</strong> - "Valami modernebb kellene"
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Prompt fejlesztési stratégiák</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-2 text-purple-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers"
                  >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5" />
                    <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fokozatos megközelítés</h4>
                  <p className="text-sm text-muted-foreground">
                    Kezdj egy alapvető prompttal, majd fokozatosan finomítsd a részleteket. Minden változat után
                    értékeld az eredményt és adj hozzá további specifikációkat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-component"
                  >
                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                    <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                    <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                    <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Komponens-alapú tervezés</h4>
                  <p className="text-sm text-muted-foreground">
                    Bontsd le a projektet kisebb, jól definiált komponensekre. Így könnyebb specifikus utasításokat adni
                    minden elemhez, és a végeredmény is koherensebb lesz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 rounded-full p-2 text-amber-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Referenciák használata</h4>
                  <p className="text-sm text-muted-foreground">
                    Hivatkozz létező weboldalakra, dizájn rendszerekre vagy UI könyvtárakra a promptodban. Például: "A
                    navigáció hasonlítson az Airbnb-re, de használjon shadcn/ui komponenseket".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-check"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Felhasználói szempontú leírás</h4>
                  <p className="text-sm text-muted-foreground">
                    Írd le a felhasználói folyamatokat és élményeket, ne csak a vizuális elemeket. Például: "A
                    felhasználónak egyszerűen kell tudnia szűrni a termékeket kategória és ár szerint".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. TIPP: Használj vizuális referenciákat */}
        <Section
          id="tip-2"
          title="2️⃣ Használj vizuális referenciákat"
          subtitle="Hogyan irányíthatod a V0-t képek és referenciák segítségével"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A V0 képes képeket és vizuális referenciákat feldolgozni, és ezek alapján generálni a kívánt felületet. Ez
              különösen hasznos, ha van egy konkrét dizájn elképzelésed.
            </p>
            <p className="mb-4">
              Csatolhatsz képernyőképeket, vázlatokat, vagy akár más weboldalakról készült képeket, és kérheted a V0-t,
              hogy kövesse azok stílusát vagy elrendezését.
            </p>
            <p className="mb-4">
              A vizuális referenciák használata jelentősen javíthatja az eredmények pontosságát és csökkentheti a
              félreértések lehetőségét.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <ImageReferencePreview />
          </div>
        </Section>

        {/* 3. TIPP: Fokozatos fejlesztés és finomítás */}
        <Section
          id="tip-3"
          title="3️⃣ Fokozatos fejlesztés és finomítás"
          subtitle="Hogyan finomíthatod fokozatosan a V0 által generált eredményeket"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              Az AI-alapú fejlesztés nem egyszeri folyamat, hanem fokozatos. Kezdj egy alapvető prompttal, értékeld az
              eredményt, majd finomítsd a kérésedet a következő körben.
            </p>
            <p className="mb-4">
              Minden változattal egyre közelebb kerülsz a kívánt végeredményhez, miközben a V0 is jobban megérti, mit
              szeretnél elérni.
            </p>
            <p className="mb-4">
              Ne félj kísérletezni és több különböző megközelítést kipróbálni ugyanarra a problémára.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <IterativeDesignPreview />
          </div>
        </Section>

        {/* 4. TIPP: Komponens-alapú megközelítés */}
        <Section
          id="tip-4"
          title="4️⃣ Komponens-alapú megközelítés"
          subtitle="Hogyan bonthatod le a projekteket kezelhetőbb részekre"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A modern webalkalmazások komponensekből épülnek fel. Ahelyett, hogy egy teljes oldalt próbálnál egyszerre
              generálni, bontsd le a projektet kisebb, jól definiált komponensekre.
            </p>
            <p className="mb-4">
              Ez a megközelítés lehetővé teszi, hogy minden komponensre külön fókuszálj, és pontosabb eredményeket érj
              el. Később ezeket a komponenseket összeállíthatod egy teljes oldallá.
            </p>
            <p className="mb-4">
              A komponens-alapú megközelítés különösen hasznos összetett felületek esetén, ahol sok különböző elem és
              interakció van.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <ComponentBasedPreview />
          </div>
        </Section>

        {/* 5. TIPP: Stílus és dizájn rendszer meghatározása */}
        <Section
          id="tip-5"
          title="5️⃣ Stílus és dizájn rendszer meghatározása"
          subtitle="Hogyan biztosíthatod a konzisztens megjelenést a V0 generált felületeken"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A konzisztens dizájn kulcsfontosságú a professzionális felhasználói élmény szempontjából. A V0 képes
              követni egy meghatározott dizájn rendszert, ha megfelelően leírod azt.
            </p>
            <p className="mb-4">
              Egy jól definiált stílus rendszer tartalmazza a színeket, tipográfiát, komponensek stílusát és az
              elrendezési szabályokat.
            </p>
            <p className="mb-4">
              Ha már van meglévő dizájn rendszered vagy brand guide-od, használd azt referenciaként a V0 promptokban.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <StyleSystemPreview />
          </div>
        </Section>

        {/* 6. TIPP: Felhasználói folyamatok részletes leírása */}
        <Section
          id="tip-6"
          title="6️⃣ Felhasználói folyamatok részletes leírása"
          subtitle="Hogyan tervezhetsz interaktív és felhasználóbarát élményeket"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A jó felhasználói élmény nem csak a vizuális megjelenésről szól, hanem a felhasználói folyamatokról is. A
              V0 képes komplex felhasználói folyamatokat generálni, ha részletesen leírod azokat.
            </p>
            <p className="mb-4">
              Határozd meg a felhasználói folyamat minden lépését, beleértve a validációkat, hibaüzeneteket és
              visszajelzéseket.
            </p>
            <p className="mb-4">
              A részletes felhasználói folyamatok segítenek abban, hogy a generált felület ne csak jól nézzen ki, hanem
              jól is működjön.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <UserFlowPreview />
          </div>
        </Section>

        {/* 7. TIPP: Visszajelzés és módosítások kérése */}
        <Section
          id="tip-7"
          title="7️⃣ Visszajelzés és módosítások kérése"
          subtitle="Hogyan kérhetsz célzott módosításokat a generált felületeken"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A V0 kiválóan alkalmas a generált felületek módosítására konkrét visszajelzések alapján. Ahelyett, hogy
              újrakezdenéd a teljes folyamatot, kérhetsz célzott módosításokat.
            </p>
            <p className="mb-4">
              A hatékony visszajelzés konkrét, részletes és konstruktív. Kerüld az általános megjegyzéseket, mint
              például "tedd szebbé" vagy "modernebb legyen".
            </p>
            <p className="mb-4">
              Használj listákat vagy számozott pontokat a módosítási kérések rendszerezéséhez, így a V0 könnyebben
              követheti a kéréseidet.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <FeedbackPreview />
          </div>
        </Section>

        {/* 8. TIPP: Kód exportálás és testreszabás */}
        <Section
          id="tip-8"
          title="8️⃣ Kód exportálás és testreszabás"
          subtitle="Hogyan használhatod a generált kódot saját projektjeidben"
        >
          <div className="mx-auto max-w-[800px] text-left mt-6">
            <p className="mb-4">
              A V0 által generált felületek kódját exportálhatod és felhasználhatod saját projektjeidben. Ez különösen
              hasznos, ha a generált felületet tovább szeretnéd fejleszteni vagy integrálni egy meglévő alkalmazásba.
            </p>
            <p className="mb-4">
              Az exportált kód tiszta, jól strukturált és könnyen testreszabható. A V0 modern technológiákat használ,
              mint például React, Next.js és Tailwind CSS.
            </p>
            <p className="mb-4">
              Ha specifikus igényeid vannak a kód struktúrájával vagy a használt technológiákkal kapcsolatban, ezeket is
              megadhatod a promptban.
            </p>
          </div>

          {/* Interaktív Preview komponens */}
          <div className="mx-auto max-w-[800px] mt-8">
            <CodeExportPreview />
          </div>
        </Section>

        {/* Összefoglaló szekció */}
        <Section
          id="summary"
          title="Összefoglaló"
          subtitle="Hogyan maximalizálhatod a V0 lehetőségeit"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm text-left mt-6">
            <p className="mb-4">
              A V0 egy rendkívül hatékony eszköz, amely segíthet felgyorsítani a fejlesztési folyamatot és csökkenteni a
              prototípus-készítés költségeit. A fenti 8 módszer segítségével maximalizálhatod a V0 lehetőségeit és
              pontosabb, személyre szabottabb eredményeket érhetsz el.
            </p>
            <p className="mb-4">
              Emlékezz, a V0 nem helyettesíti a tervezőket vagy fejlesztőket, hanem kiegészíti a munkájukat. A legjobb
              eredményt akkor éred el, ha a V0-t a saját szakértelmeddel és kreativitásoddal kombinálod.
            </p>
            <p>
              Kezdj el kísérletezni a V0-val még ma, és fedezd fel, hogyan gyorsíthatod fel a fejlesztési folyamatot és
              hogyan hozhatsz létre lenyűgöző felhasználói felületeket minimális erőfeszítéssel!
            </p>
          </div>

          <div className="mx-auto max-w-[800px] mt-8 flex justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-6 text-lg font-medium rounded-lg hover:opacity-90 transition-all shadow-lg">
              Kezdj el tervezni a V0-val
            </Button>
          </div>
        </Section>

        {/* Gyakori kérdések szekció */}
        <Section id="faq" title="Gyakori kérdések" subtitle="Válaszok a leggyakrabban felmerülő kérdésekre">
          <div className="mx-auto max-w-[800px] mt-6 space-y-6 text-left">
            {[
              {
                question: "Ingyenes a V0 használata?",
                answer:
                  "A V0 jelenleg korlátozott hozzáféréssel érhető el. A Vercel felhasználók számára bizonyos mennyiségű generálás ingyenesen elérhető, további használatért előfizetés szükséges.",
              },
              {
                question: "Milyen technológiákat használ a V0 által generált kód?",
                answer:
                  "A V0 által generált kód React és Next.js alapú, Tailwind CSS-sel a stílusokhoz. A komponensek modern, újrafelhasználható és könnyen testreszabható formában készülnek.",
              },
              {
                question: "Használhatom a V0 által generált kódot kereskedelmi projektekben?",
                answer:
                  "Igen, a V0 által generált kód szabadon felhasználható bármilyen projektben, beleértve a kereskedelmi projekteket is.",
              },
              {
                question: "Hogyan exportálhatom a V0 által generált kódot?",
                answer:
                  "A generált kód exportálásához használd a felület jobb felső sarkában található 'Export' gombot. Választhatsz, hogy csak a komponenst vagy a teljes projektet szeretnéd exportálni.",
              },
              {
                question: "Támogatja a V0 a többnyelvűséget?",
                answer:
                  "Igen, a V0 képes többnyelvű felületeket generálni. Egyszerűen add meg a promptban, hogy milyen nyelveken szeretnéd a felületet, és a V0 ennek megfelelően generálja a tartalmat.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Kapcsolat szekció */}
        <Section
          id="contact"
          title="Kapcsolat"
          subtitle="Kérdésed van? Vedd fel velünk a kapcsolatot"
          bgColor="bg-slate-50"
        >
          <div className="mx-auto max-w-[600px] bg-white rounded-lg border border-border p-6 shadow-sm mt-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Teljes név"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Tárgy
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Miben segíthetünk?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Üzenet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Írd le részletesen, miben segíthetünk..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Üzenet küldése
              </Button>
            </form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">v0.dev</div>
              <p className="text-sm text-slate-400 mt-1">
                © {new Date().getFullYear()} Vercel, Inc. Minden jog fenntartva.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-slate-400 hover:text-white">
                Adatvédelem
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white">
                Feltételek
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white">
                Dokumentáció
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

