// PetVerse PM Orchestrator
// Runs 7 specialist agents in parallel
const agents = [
  'pm-agent',
  'frontend-agent',
  'backend-agent',
  'ai-agent',
  'vetcare-agent',
  'commerce-agent',
  'qa-agent'
];
console.log('🐾 PetVerse Agent Orchestrator v0.1');
console.log('Active agents:', agents.join(', '));
console.log('\nRun: node agents/[name]/run.js --task="..."');
console.log('Example: npm run agents:run -- --sprint=w1');
