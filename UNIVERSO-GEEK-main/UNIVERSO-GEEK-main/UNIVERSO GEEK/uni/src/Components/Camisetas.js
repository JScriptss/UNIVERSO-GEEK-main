import React from "react";
import { Link } from "react-router-dom";

const Camisetas = () => {
  return (
    <body className="body-Camisetas">
      <br></br>
      
      {/* Comeco da Section de produtos lancamentos */}
      <div class="product-container">

<div class="product-card">
  <img src="Imagens/Imagem1.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta Darth Vader - Use The Force</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">R$64.99</div>
  <Link exact to="/produto"><button class="add-to-cart-button">Comprar</button></Link>
</div>

<div class="product-card">
  <img src="Imagens/Imagem2.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - Sylvester Stallone</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">
    <span class="original-price">R$69.99</span>
    <span class="discount-price">$45.99</span>
  </div>
  <button class="add-to-cart-button">Comprar</button>
</div>


<div class="product-card">
  <img src="Imagens/Imagem3.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - Friends dont Lie</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">R$45.99</div>
  <button class="add-to-cart-button">Comprar</button>
</div>


<div class="product-card">
  <img src="Imagens/Imagem4.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - Homem de Ferro</h3>
  <p class="product-description">Camiseta - Homem de Ferro</p>
  <div class="product-price">
    <span class="original-price">R$59.99</span>
    <span class="discount-price">R$45.99</span>
  </div>  <button class="add-to-cart-button">Comprar</button>
</div>

<div class="product-card">
  <img src="Imagens/Imagem5.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - Heisenberg Breaking Bad</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">R$45.99</div>
  <button class="add-to-cart-button">Comprar</button>
</div>


<div class="product-card">
  <img src="Imagens/Imagem6.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - I'm Groot</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">
    <span class="original-price">R$99.99</span>
    <span class="discount-price">R$79.99</span>
  </div>  <button class="add-to-cart-button">Comprar</button>
</div>

<div class="product-card">
  <img src="Imagens/Imagem7.png" alt="Product Name" class="product-image" />
  <h3 class="product-name">Camiseta - Street Fighter</h3>
  <p class="product-description">Product Description</p>
  <div class="product-price">R$99.99</div>
  <button class="add-to-cart-button">Comprar</button>
</div>

</div>
{/* Fim da Section de produtos lancamentos */}
      <br></br>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">

          <section class="mb-4">
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>


            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
          </section>
        </div>


        <div class="text-center p-3">
          © 2023 Copyright:
          <a class="text-white" href="#">UniversoGeek.INC Todos os direitos reservados.</a>
        </div>

      </footer>


    </body >

  );
}
export default Camisetas;