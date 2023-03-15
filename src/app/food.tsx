
export default async function Food() {
  let res = await fetch("http://localhost:3000/api/hello", { cache : 'no-store'})
  return (
    <div>food1</div>
  )
}
