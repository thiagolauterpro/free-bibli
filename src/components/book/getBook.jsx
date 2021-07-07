import ListBook from "./ListBook";

export default function getBook(id){
  console.log(id)
  return(
    <ListBook codBook={id}/>
  )
}