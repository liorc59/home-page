# Top 5 Feature Requests — Based on 49 Reddit & Community Posts

---

## 1. Salesforce / CRM-Embedded Integration
**Mentions:** 6 | **Avg Urgency:** 9.2/10 | **Willingness to Pay:** High

**What users want:**
- Surface battlecards inside Salesforce opportunity/deal view (no context-switching)
- Push competitive signals into CRM deals automatically (e.g., "Competitor X raised Series B" appears on the deal record)
- Embedded widget that shows the relevant competitor card based on the tagged competitor in the opportunity
- Bi-directional: also pull win/loss data from CRM back into MiAmar

**Why it matters:**
Sales reps live in Salesforce. If intel isn't in SFDC, it doesn't exist to them. Multiple posts specifically called out "reps won't leave Salesforce" and "Klue's SFDC integration was slow." This is the #1 blocker for sales team adoption and the biggest enterprise upsell lever.

**Difficulty: MEDIUM-HARD**
- We already have HubSpot, Slack, and Monday.com integrations — so the integration pattern and architecture exist
- Salesforce is more complex: requires building a managed package or Connected App, handling OAuth flows, Apex triggers for deal-based surfacing
- AppExchange listing (optional but high-value) adds review/compliance overhead
- Estimated effort: 4-6 weeks for core integration, +2-3 weeks for AppExchange listing
- Risk: Salesforce API rate limits and sandbox testing can slow development

---

## 2. Website & Feature-Level Change Detection
**Mentions:** 5 | **Avg Urgency:** 8.4/10 | **Willingness to Pay:** High

**What users want:**
- Auto-detect changes to competitor pricing pages, feature pages, and changelogs
- Monitor API docs and developer portals for updates
- Track G2/Capterra review trends and sentiment shifts
- Surface "Competitor X added a new pricing tier" or "Competitor Y deprecated Feature Z" as classified events

**Why it matters:**
LinkedIn and news monitoring catches announcements, but misses the quiet moves — a pricing page tweak, a new feature in a changelog, a sudden spike in negative G2 reviews. PMMs specifically said they want to know *what* competitors shipped, not just that they posted about it. This is the biggest gap in current signal coverage.

**Difficulty: HARD**
- This is an entirely new data source pipeline — web scraping, diff detection, change classification
- Requires: scheduled crawling infrastructure, intelligent diff engine (ignore CSS/layout changes, detect content changes), AI classification of what changed and why it matters
- G2/Capterra monitoring adds another scraping target with its own anti-bot challenges
- Changelog/release notes parsing varies wildly across competitors (some use GitHub releases, some use Notion, some use custom pages)
- Estimated effort: 6-10 weeks for MVP (pricing page + feature page monitoring), +4 weeks for G2/review site integration
- Risk: Anti-scraping measures, varying page structures, high false-positive rate on diffs (ads, timestamps, A/B tests)

---

## 3. Free Trial / Transparent Public Pricing
**Mentions:** 5 | **Avg Urgency:** 8.8/10 | **Willingness to Pay:** High (if they can try first)

**What users want:**
- A free tier or trial that lets PMMs monitor 2-3 competitors before committing
- Transparent pricing on the website (no "contact sales" wall)
- Self-serve signup without a demo call requirement
- Clear SMB-friendly tier that signals "this isn't $30K/year like Klue"

**Why it matters:**
Klue and Crayon's hidden enterprise pricing is their most-hated trait across every post we found. PMMs at startups and SMBs literally can't try CI tools — they're locked behind sales calls and $20-40K/year contracts. A visible, affordable price + free trial is the single biggest positioning differentiator we can offer. Multiple posts showed PMMs who *wanted* to pay but couldn't even evaluate the options. This is a conversion blocker, not just a feature request.

**Difficulty: EASY-MEDIUM**
- This is primarily a business/product decision, not a heavy engineering lift
- Requires: usage-based gating logic (limit to N competitors on free tier), self-serve signup flow, Stripe billing integration (if not already in place)
- Pricing page is a simple homepage addition (we can do it today)
- Free tier needs monitoring quota enforcement in the backend
- Estimated effort: 1-2 weeks for pricing page + self-serve signup, +2-3 weeks for free tier gating logic in backend
- Risk: Low technical risk. Main risk is business model — need to set limits that are useful enough to convert but not so generous that users never upgrade

---

## 4. Executive ROI Reporting
**Mentions:** 5 | **Avg Urgency:** 7.4/10 | **Willingness to Pay:** Medium

**What users want:**
- Auto-generated monthly report: competitor moves detected, battlecards updated, events classified, estimated time saved
- QBR-ready competitive summary deck (key moves, market shifts, win/loss trends)
- ROI calculator showing "your team saved X hours this month"
- Exportable format (PDF, slides) that PMMs can forward to leadership

**Why it matters:**
The #1 reason CI programs die is lack of executive sponsorship (52% have no sales exec sponsor per Crayon's survey). PMMs who champion MiAmar internally need ammunition to justify the spend. Without a "here's what you would have missed" report, the tool stays a solo PMM secret that gets cut in the next budget review. This feature directly impacts retention and expansion.

**Difficulty: EASY-MEDIUM**
- We already have all the underlying data — events detected, battlecards generated, companies monitored, newsletter opens
- This is primarily an aggregation + presentation layer on top of existing data
- Requires: monthly aggregation job, report template (HTML/PDF), email delivery or in-app dashboard
- PDF export adds some complexity (headless rendering or server-side PDF generation)
- Estimated effort: 2-3 weeks for in-app dashboard + email report, +1 week for PDF/slide export
- Risk: Very low technical risk. The challenge is making the metrics compelling — "47 events detected" means nothing; "3 competitor moves your team would have missed" tells a story

---

## 5. Real-Time Alerts with Customizable Thresholds
**Mentions:** 3 | **Avg Urgency:** 8.7/10 | **Willingness to Pay:** High

**What users want:**
- Immediate push notification for high-priority events (funding rounds, product launches, major hires, acquisitions)
- Customizable rules: choose which event types trigger instant alerts vs. weekly digest
- Channel flexibility: Slack DM, email, mobile push
- Per-competitor priority levels (Competitor A = alert everything, Competitor D = digest only)

**Why it matters:**
The weekly digest is great for staying informed, but learning about a competitor's Series B 5 days late is embarrassing. Multiple posts described finding out about major competitor moves from prospects during sales calls. Real-time alerts for high-impact events turn MiAmar from a "nice to review weekly" tool into a "can't live without it" daily essential. This directly increases stickiness and perceived value.

**Difficulty: MEDIUM**
- We already have the monitoring pipeline and event classification — the data and triggers exist
- Requires: user-facing alert configuration UI, threshold/rule engine, push notification infrastructure (Slack webhooks exist, need email instant delivery + optional mobile push)
- Per-competitor and per-event-type settings add UI complexity but are straightforward in the backend
- Estimated effort: 3-4 weeks for alert configuration UI + rule engine + multi-channel delivery
- Risk: Low-medium. Main risk is notification fatigue — if thresholds are too loose, users get overwhelmed and disable alerts entirely. Smart defaults are critical.

---

## Summary

| # | Feature | Difficulty | Effort | Impact |
|---|---------|-----------|--------|--------|
| 1 | Salesforce/CRM Integration | Medium-Hard | 6-9 weeks | Unlocks enterprise sales adoption |
| 2 | Website/Feature Change Detection | Hard | 6-14 weeks | Fills biggest signal gap |
| 3 | Free Trial / Public Pricing | Easy-Medium | 3-5 weeks | Biggest conversion lever |
| 4 | Executive ROI Reporting | Easy-Medium | 3-4 weeks | Drives retention & expansion |
| 5 | Real-Time Customizable Alerts | Medium | 3-4 weeks | Increases daily stickiness |

**Recommended priority order (effort vs. impact):**
1. **Free Trial / Public Pricing** — Lowest effort, highest conversion impact. Do this first.
2. **Executive ROI Reporting** — Low effort, directly prevents churn. Easy win.
3. **Real-Time Alerts** — Medium effort, big stickiness boost. Builds on existing infra.
4. **Salesforce Integration** — Higher effort but unlocks enterprise revenue.
5. **Website Change Detection** — Hardest to build, but strongest long-term differentiator.
