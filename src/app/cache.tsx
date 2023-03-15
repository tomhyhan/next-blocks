
export default async function Cache() {
    let num = await getData()
    return (
    <div>Cache { num}</div>
  )
}

// {next: {revalidate: 60}}
async function getData() {
    let num = await fetch("http://localhost:3000/api/hello2")
    return num.text();
  }