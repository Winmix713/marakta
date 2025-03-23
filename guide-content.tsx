"use client"

import { useState } from "react"
import { DetailedRequirements } from "@/components/guide/detailed-requirements"
import { VisualReferences } from "@/components/guide/visual-references"
import { StyleSystems } from "@/components/guide/style-systems"
import { AlternativeDesign } from "@/components/guide/alternative-design"
import { FeedbackModifications } from "@/components/guide/feedback-modifications"
import { UserFlows } from "@/components/guide/user-flows"
import { ComponentBasedApproach } from "@/components/guide/component-based-approach"
import { CodeExport } from "@/components/guide/code-export"

export function GuideContent() {
  const [activeTab, setActiveTab] = useState("detailed-requirements")

  const guides = [
    { id: "detailed-requirements", name: "Részletes követelmények", component: <DetailedRequirements /> },
    { id: "visual-references", name: "Vizuális referenciák", component: <VisualReferences /> },
    { id: "style-systems", name: "Stílus rendszerek", component: <StyleSystems /> },
    { id: "alternative-design", name: "Alternatív tervezés", component: <AlternativeDesign /> },
    { id: "feedback-modifications", name: "Visszajelzés és módosítások", component: <FeedbackModifications /> },
    { id: "user-flows", name: "Felhasználói folyamatok", component: <UserFlows /> },
    { id: "component-based-approach", name: "Komponens-alapú megközelítés", component: <ComponentBasedApproach /> },
    { id: "code-export", name: "Kód exportálás", component: <CodeExport /> },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-64 shrink-0">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold mb-4">Tippek és trükkök az AI prototípus-készítéshez</h2>
          <div className="space-y-1">
            {guides.map((guide, index) => (
              <button
                key={guide.id}
                onClick={() => setActiveTab(guide.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 ${
                  activeTab === guide.id ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs">
                  {index + 1}
                </span>
                <span>{guide.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">{guides.find((guide) => guide.id === activeTab)?.component}</div>
    </div>
  )
}

