import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Card from './Components/Card';
interface Users{
  name: string;
  age: number;
  hobby:string;

}
function App() {
  const [users,setUsers] = useState<Users[]>([])
  const [name,setName] = useState<string>("")
  const [age,setAge] = useState<number>(0)
  const [hobby,setHobby] = useState<string>("")

  const handleCadastro = (name:string,age:number,hobby:string) =>{
    if(name !== "" && age !== 0 && hobby !== ""){
      const data = {
        name,
        age,
        hobby,
      }
      console.log(data)
      setUsers([...users,data])
      setAge(0)
      setHobby("")
      setName("")
    }else{
      alert("Preencha todos campos!")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cadastro</h1>
        <div className="Cad-Main">
            <Input onChange={(e)=>setName(e.target.value)} value={name} placeholder="Digite seu nome" />
            <Input isNumber onChange={(e)=>setAge(e.target.valueAsNumber)} value={age} placeholder="Digite sua Idade" />
            <Input onChange={(e)=>setHobby(e.target.value)} value={hobby} placeholder="Digite seu Robbie"/>
            <button onClick={()=>handleCadastro(name,age,hobby)} className="Button">Enviar</button>
        </div>
        <div className="Cad-Main">
          {users[0] &&
          users.map((element,index)=> <Card key={index} name={element.name} age={element.age} hobby={element.hobby} />)
          }
        </div>
        {console.log(users)}
      </header>
    </div>
  );
}

export default App;
