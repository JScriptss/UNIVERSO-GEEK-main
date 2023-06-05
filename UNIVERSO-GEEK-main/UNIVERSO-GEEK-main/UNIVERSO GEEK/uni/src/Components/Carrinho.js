import React, { useState } from "react";
import "../App.css";

function App() {
  const [carrinhoItens, setCarrinhoItens] = useState([
    {
      id: 1,
      nome: "Camiseta Star Wars",
      descricao: "Ícone galáctico, o lado negro e a força em perfeita harmonia fashion.",
      preco: 29.99,
      quantidade: 2,
    },
    {
      id: 2,
      nome: "Camiseta Stranger Things",
      descricao: "Nostalgia dos anos 80, mistério sobrenatural e uma pitada de aventura eletrizante.",
      preco: 19.99,
      quantidade: 1,
    },
  ]);

  const aumentarQuantidade = (itemId) => {
    setCarrinhoItens((prevItens) =>
      prevItens.map((item) =>
        item.id === itemId ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuirQuantidade = (itemId) => {
    setCarrinhoItens((prevItens) =>
      prevItens.map((item) =>
        item.id === itemId && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  const excluirItem = (itemId) => {
    setCarrinhoItens((prevItens) => prevItens.filter((item) => item.id !== itemId));
  };

  const valorTotal = carrinhoItens.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  const finalizarCompra = () => {
    alert("Compra finalizada com sucesso!");
    setCarrinhoItens([]);
  };

  return (
    <>
      <main className="row">
        <h5 className="carrinho-compras text-white bg-dark">
          <i className="fas fa-shopping-cart"></i> Carrinho de compras ({carrinhoItens.length} itens)
        </h5>
      </main>

      <section className="bg-dark-subtle m-3 ms-5 col-5">
        {carrinhoItens.map((item) => (
          <div className="d-flex align-items-center justify-content-between mb-3" key={item.id}>
            <div className="d-flex">
              <img className="carrinho border border-1" src="Imagens/Imagem1.png" alt="Imagem do Produto" />
              <div className="ms-3">
                <h5>{item.nome}</h5>
                <p>{item.descricao}</p>
                <div>Quantidade: {item.quantidade}</div>
                <div>Valor Unitário: R${item.preco.toFixed(2)}</div>
                <div>Valor Total: R${(item.preco * item.quantidade).toFixed(2)}</div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-primary me-2" onClick={() => diminuirQuantidade(item.id)}>
                -
              </button>
              <button className="btn btn-primary me-2" onClick={() => aumentarQuantidade(item.id)}>
                +
              </button>
              <button className="btn btn-danger me-2" onClick={() => excluirItem(item.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))}

        {carrinhoItens.length > 0 && (
          <div className="d-flex justify-content-end">
            <button className="btn btn-success me-2" onClick={finalizarCompra}>
              Finalizar Compra
            </button>
            <div className="text-dark">Valor Total do Carrinho: R${valorTotal.toFixed(2)}</div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
