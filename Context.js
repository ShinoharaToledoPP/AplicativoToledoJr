import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const Context = ({ children }) => {
  let [key, setKey] = useState("")
  let [salvarProduto, setSalvarProduto] = useState([]);
  let [nomeComercio, setNomeComercio] = useState("");
  let [nomeCategoria, setNomeCategoria] = useState("");
  let [nomeProduto, setNomeProduto] = useState("");
  let [nomeMarca, setNomeMarca] = useState("");
  let [nomeMedida, setNomeMedida] = useState("");
  let [valorProduto, setValorProduto] = useState("");
  let [dataRegistro, setDataRegistro] = useState("");
  let [camposPreenchidos, setCamposPreenchidos] = useState(false);
  let [autenticado, setAutenticado ] = useState(false);

  return (
    <DataContext.Provider value={{ key, setKey, salvarProduto, setSalvarProduto, nomeComercio, setNomeComercio, nomeCategoria, setNomeCategoria, nomeProduto, setNomeProduto, nomeMarca, setNomeMarca, nomeMedida, setNomeMedida, valorProduto, setValorProduto, dataRegistro, setDataRegistro, camposPreenchidos, setCamposPreenchidos, autenticado, setAutenticado}}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;