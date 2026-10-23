import {useState, useEffect} from "react"

export default  function Lista( ){
        const [usuarios, setUsuarios] = useState([])
        const [carregando, setCarregando] = useState(true)
   
        useEffect(() => {
            //simular meus dados que seriam puxados da api

            setTimeout(() => {
                 const listaUsuarios = [
                       {
                        id: 1,
                        nome: "nicolly",
                        email: "nicollylinda@email.com"
                       } ,
                       {
                        id: 2,
                        nome: "yasmin sem passos",
                        email: "yasmin@email.com"
                       },
                       {
                        id: 3,
                        nome: "danubia",
                        email: "danubia@email.com"
                       },
                       {
                        id: 4,
                        nome:"laura mullher",
                        email:"laura@email.com"
                       }
                 ]
                 setUsuarios(listaUsuarios)
                 setCarregando(false)
                        }, 4000) //depois de 4 segundos vão aparecer os usuarios
        })
   
        return(
                <div>
                    <h1>Lista de usuários</h1>
                    {carregando? (
                        <p>Carregando dados....</p>
                    ) : (
                        <ul>
                            {usuarios.map((usuario) => (
                                <li key={usuario.id}>{usuario.nome}, {usuario.email}</li>
                            ))}
                        </ul>
                    )
                    
                }

                </div>
   )
}
