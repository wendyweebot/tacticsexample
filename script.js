let counter ;

const incrementBy1 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy1 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/76145cab-6a6a-413f-967b-6c4d05c65a8a/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "171f815b-58e1-4e21-a3ce-5f962e6ed2b7" }) ,
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const incrementBy2 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy2 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/76145cab-6a6a-413f-967b-6c4d05c65a8a/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "5f15fce4-3949-4c84-873d-1967f6444da8" }) , 
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const fetchCounter = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the fetchCounter tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/76145cab-6a6a-413f-967b-6c4d05c65a8a/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "fef9c943-fa66-4e46-b22a-46031519a26c" }) ,
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

document.addEventListener('DOMContentLoaded', async () => {
  fetchCounter() ;
}) ;
