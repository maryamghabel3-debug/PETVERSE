#!/bin/bash
# OpenAI Fine-tune – PetPal FA
# export OPENAI_API_KEY=sk-...
# 1. Upload file
# curl https://api.openai.com/v1/files \
#  -H "Authorization: Bearer $OPENAI_API_KEY" \
#  -F purpose="fine-tune" \
#  -F file="@fine_tune_petpal_fa.jsonl"
# Response: file-abc123
# 2. Create fine-tune job
# curl https://api.openai.com/v1/fine_tuning/jobs \
#  -H "Authorization: Bearer $OPENAI_API_KEY" \
#  -H "Content-Type: application/json" \
#  -d '{"training_file":"file-abc123","model":"gpt-4o-mini-2024-07-18","suffix":"petpal-fa-v1"}'
echo "Fine-tune dataset ready: services/ai-pal/fine_tune_petpal_fa.jsonl"
echo "Lines: $(wc -l < services/ai-pal/fine_tune_petpal_fa.jsonl)"
echo "Size: $(du -h services/ai-pal/fine_tune_petpal_fa.jsonl | cut -f1)"
echo "Next: export OPENAI_API_KEY && bash services/ai-pal/fine_tune_upload.sh"
