import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const Context = ({ children }) => {
  let [salvarProduto, setSalvarProduto] = useState([]);
  let [nomeComercio, setNomeComercio] = useState("");
  let [nomeCategoria, setNomeCategoria] = useState("");
  let [nomeProduto, setNomeProduto] = useState("");
  let [nomeMarca, setNomeMarca] = useState("");
  let [nomeMedida, setNomeMedida] = useState("");
  let [valorProduto, setValorProduto] = useState("");
  let [camposPreenchidos, setCamposPreenchidos] = useState(false);

  return (
    <DataContext.Provider value={{ salvarProduto, setSalvarProduto, nomeComercio, setNomeComercio, nomeCategoria, setNomeCategoria, nomeProduto, setNomeProduto, nomeMarca, setNomeMarca, nomeMedida, setNomeMedida, valorProduto, setValorProduto, camposPreenchidos, setCamposPreenchidos}}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;