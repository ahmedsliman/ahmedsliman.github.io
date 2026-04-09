---
title: 'Setting up Claude Code with Gemini'
date: '2026-03-31'
---

**Overview**

Claude Code can be configured to use Google's Gemini models by pointing it to a Gemini API key.

**Step 1 — Get a Gemini API Key**

Visit [Google AI Studio](https://aistudio.google.com/), sign in, and generate an API key from the "Get API key" section.

**Step 2 — Set the Environment Variable**

Export your key in the terminal:

```bash
export GOOGLE_API_KEY="YOUR_GEMINI_API_KEY"
```

For a permanent setup, add this line to your `~/.zshrc` or `~/.bashrc`.

**Step 3 — Discover Available Models**

Run `/model` inside Claude Code to see the list of available Gemini models for your setup. The available model names depend on whether you're using Google AI Studio or Vertex AI.

**Step 4 — Run Claude Code with a Gemini Model**

Use the `--model` flag with a model name from the list above:

```bash
claude --model <model-name> "Your prompt here"
```

Claude Code will pick up the `GOOGLE_API_KEY` from the environment and route requests through Gemini.
