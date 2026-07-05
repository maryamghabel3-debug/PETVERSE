# Push to GitHub – PETVERSE

Repo: https://github.com/maryamghabel3-debug/PETVERSE

```bash
cd petverse
git remote -v
# origin already: https://github.com/maryamghabel3-debug/PETVERSE.git

# روش 1 – با PAT
git remote set-url origin https://YOUR_GITHUB_TOKEN@github.com/maryamghabel3-debug/PETVERSE.git
git push -u origin main --force

# روش 2 – SSH
git remote set-url origin git@github.com:maryamghabel3-debug/PETVERSE.git
git push -u origin main
```

Current commit:
- be0b957 feat: PetVerse monorepo initial – Social+AI+VetCare+Commerce – 7 agents scaffold

بعد از push:
- Settings → Actions → Allow all
- Branch protection main
- Add secrets:
  OPENAI_API_KEY
  ANTHROPIC_API_KEY
  DATABASE_URL
  STRIPE_SECRET_KEY
  NEXTAUTH_SECRET
```
