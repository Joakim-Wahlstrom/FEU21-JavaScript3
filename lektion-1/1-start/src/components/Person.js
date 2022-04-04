
const Person = ({ name, age }) => {

    // console.log(props)

  return (
    <div className="border">
        <h1>Name: { name }</h1>
        <p>age: { age }</p>
    </div>
  )
}

export default Person