
function UsersPage({data}) {
  
  return (
    <div className= "user">
      <div> <img src={data.picture.medium} /> </div>
      <div>{data.name.first} </div>  
    </div>
  )
}
export default UsersPage;