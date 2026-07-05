// PGVector RAG store – PetVerse
// Table: vet_embeddings (id, content, embedding vector(1536), metadata jsonb)
// Uses: pgvector extension on Postgres
export const PG_VECTOR_DDL = `
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE IF NOT EXISTS vet_embeddings (
  id SERIAL PRIMARY KEY,
  kb_id INT,
  content TEXT,
  content_fa TEXT,
  embedding VECTOR(1536),
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX ON vet_embeddings USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
`;
// Node pg usage:
// import { Client } from 'pg';
// await client.query('SELECT * FROM vet_embeddings ORDER BY embedding <=> $1 LIMIT 5', [queryEmbedding]);
export async function searchPGVector(queryEmbedding:number[], limit=5){
  // stub – in production query Postgres
  return {driver:'pgvector', hits: limit, note:'Set DATABASE_URL with pgvector enabled – see PG_VECTOR_DDL'};
}
