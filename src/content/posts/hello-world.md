---
title: "On the Misuse of the Word 'Alignment'"
date: 2026-03-26
description: "The AI safety community borrowed a term from mechanical engineering and stripped it of its most useful connotation: that alignment is always relative to something specific."
tags: ["ai", "language", "engineering"]
---

> The question is not whether a machine can think, but whether humans do.
> — B.F. Skinner (apocryphal)

The AI safety community borrowed a term from mechanical engineering and stripped it of its most useful connotation: that alignment is always relative to something specific.[^1] In mechanical engineering, you align a shaft to a bearing, a wheel to an axle. The word implies two things: a reference frame and a tolerance. When safety researchers say "aligned AI," they rarely specify either.

[^1]: The earliest usage I can find in the AI context is Stuart Russell's 2014 Edge essay, which was actually quite careful about specifying "aligned with human values" — the slippage happened downstream.

This matters because the vagueness serves a rhetorical purpose. "Aligned" sounds like a property a system either has or doesn't — like "balanced" or "calibrated." But alignment is a relation, not a property. A system can be aligned with one set of values while being deeply misaligned with another. The word obscures the question: aligned with *whose* values? To *what* tolerance?

> !pull
> Alignment is a relation, not a property.

The mechanical metaphor is instructive. When you align a motor shaft, you accept that perfect alignment is impossible — the goal is to reduce misalignment below a threshold where it causes damage.[^2] You measure it continuously, because thermal expansion and vibration change it over time. And critically, alignment in one plane doesn't guarantee alignment in another.

[^2]: In rotating machinery, misalignment is the leading cause of premature bearing failure. The acceptable tolerance depends on the operating speed, the coupling type, and the consequences of failure. There is no universal "aligned" state.

The AI safety discourse would benefit from this engineering humility. Instead of asking "is this AI aligned?" — a question that invites a binary answer — we should ask: "aligned with what? measured how? to what tolerance? and who decides when it's out of spec?"

These are harder questions. That's why they're the right ones.
