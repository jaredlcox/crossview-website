"use client"

import type React from "react"
import Link from "next/link"
import {
  statementOfFaith,
  sofClosingNote,
  type SofArticle,
  type SofSection,
  type SofItem,
} from "@/lib/statement-of-faith"
import { bibleGatewayUrl } from "@/lib/scripture"

/**
 * NOTE: The anti-copy measures below (CSS + event handlers) discourage casual
 * copy/paste, drag, right-click, and common keyboard shortcuts only. Determined
 * users can still bypass via View Source, devtools, or screenshots. This page
 * is "soft-protected" by design — it is not a secure document store.
 */

function ScriptureLinks({ refs }: { refs: string[] }) {
  return (
    <span>
      {refs.map((ref, i) => (
        <span key={`${ref}-${i}`}>
          <Link
            href={bibleGatewayUrl(ref)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#378AA4] hover:text-[#1E3D42] underline transition-colors"
          >
            {ref}
          </Link>
          {i < refs.length - 1 && "; "}
        </span>
      ))}
    </span>
  )
}

function renderItemText(text: string, shouldBoldLeadText: boolean) {
  if (!shouldBoldLeadText) return text

  const firstPeriodIndex = text.indexOf(".")
  if (firstPeriodIndex <= 0) {
    return <strong className="font-semibold text-[#1E3D42]">{text}</strong>
  }

  const leadTitle = text.slice(0, firstPeriodIndex + 1)
  const remainder = text.slice(firstPeriodIndex + 1).trimStart()

  return (
    <>
      <strong className="font-semibold text-[#1E3D42]">{leadTitle}</strong>
      {remainder ? <> {remainder}</> : null}
    </>
  )
}

function isLetterLabel(label?: string) {
  return typeof label === "string" && /^\([A-Z]\)$/.test(label.trim())
}

function ItemNode({
  item,
  depth = 0,
  isArticleTwo = false,
}: {
  item: SofItem
  depth?: number
  isArticleTwo?: boolean
}) {
  const hasLabel = Boolean(item.label)
  const shouldBoldLeadText = isArticleTwo && isLetterLabel(item.label)
  return (
    <li className="leading-relaxed">
      <div className="flex gap-2">
        {hasLabel && (
          <span className="font-semibold text-[#1E3D42] shrink-0">{item.label}</span>
        )}
        <div className="flex-1 space-y-2">
          <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
            {renderItemText(item.text, shouldBoldLeadText)}
            {item.scriptures && item.scriptures.length > 0 && (
              <>
                {" "}
                <span className="text-slate-500">(</span>
                <ScriptureLinks refs={item.scriptures} />
                <span className="text-slate-500">)</span>
              </>
            )}
          </p>
          {item.children && item.children.length > 0 && (
            <ol className="space-y-2 pl-2 md:pl-4">
              {item.children.map((child, i) => (
                <ItemNode
                  key={`${depth}-${i}`}
                  item={child}
                  depth={depth + 1}
                  isArticleTwo={isArticleTwo}
                />
              ))}
            </ol>
          )}
        </div>
      </div>
    </li>
  )
}

function SectionBlock({
  section,
  isArticleTwo = false,
}: {
  section: SofSection
  isArticleTwo?: boolean
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg md:text-xl font-bold text-[#1E3D42]">
        <span className="text-[#F1802C] mr-2">{section.number}</span>
        {section.title}
      </h3>
      {section.paragraphs?.map((para, i) => (
        <p key={i} className="text-[15px] md:text-base text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      {section.items && section.items.length > 0 && (
        <ol className="space-y-3 pl-2 md:pl-4">
          {section.items.map((item, i) => (
            <ItemNode key={i} item={item} isArticleTwo={isArticleTwo} />
          ))}
        </ol>
      )}
    </div>
  )
}

function ArticleBlock({ article }: { article: SofArticle }) {
  return (
    <section
      id={article.id}
      className="scroll-mt-24 space-y-5 pt-6 md:pt-8 first:pt-0 border-t first:border-t-0 border-slate-200/70"
    >
      <header>
        <p className="text-xs md:text-sm font-medium text-[#F1802C] uppercase tracking-wider">
          {article.number}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mt-1">
          {article.title}
        </h2>
        {article.intro && (
          <p className="mt-3 text-[15px] md:text-base text-slate-700 leading-relaxed">
            {article.intro}
          </p>
        )}
      </header>
      <div className="space-y-6">
        {article.sections.map((section) => (
          <SectionBlock
            key={section.id}
            section={section}
            isArticleTwo={article.number === "Article 2"}
          />
        ))}
      </div>
    </section>
  )
}

function preventCopy(e: React.SyntheticEvent) {
  e.preventDefault()
}

function preventCopyKeys(e: React.KeyboardEvent) {
  const isMod = e.ctrlKey || e.metaKey
  if (!isMod) return
  const blocked = ["c", "x", "a", "p", "s"]
  if (blocked.includes(e.key.toLowerCase())) {
    e.preventDefault()
  }
}

export function ProtectedContent() {
  return (
    <>
      {/* Page header */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">
              Statement of Faith, Policies & Procedures
            </h1>
            <div className="h-1 w-16 bg-[#F1802C] mx-auto mb-4"></div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="pb-4 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav
              aria-label="Table of contents"
              className="rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 md:p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3D42] mb-2">
                Contents
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
                {statementOfFaith.map((article) => (
                  <li key={article.id}>
                    <a
                      href={`#${article.id}`}
                      className="text-[#378AA4] hover:text-[#1E3D42] hover:underline transition-colors"
                    >
                      <span className="font-medium text-[#1E3D42]">{article.number}.</span>{" "}
                      {article.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Protected content */}
      <section className="pb-12 md:pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="sof-no-copy max-w-4xl mx-auto space-y-2"
            onCopy={preventCopy}
            onCut={preventCopy}
            onPaste={preventCopy}
            onDragStart={preventCopy}
            onContextMenu={preventCopy}
            onKeyDown={preventCopyKeys}
            tabIndex={-1}
          >
            {statementOfFaith.map((article) => (
              <ArticleBlock key={article.id} article={article} />
            ))}

            <p className="pt-8 text-sm md:text-base text-slate-600 italic leading-relaxed border-t border-slate-200/70 mt-8">
              {sofClosingNote}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
