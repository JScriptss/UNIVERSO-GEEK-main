import React from "react";
import { Link } from "react-router-dom";


const Canecas = () => {
    return (
        <body className="body-Canecas">
            <br></br>
            
            {/* Comeco da Section de produtos lancamentos */}
            <div class="product-container">

                <div class="product-card">
                    <img src="Imagens/Imagem15.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - Game of Thrones</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$64.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem16.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - Programador</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$69.99</span>
                        <span class="discount-price">$45.99</span>
                    </div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem17.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - I'll Be There For You</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem18.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - Loki</h3>
                    <p class="product-description"></p>
                    <div class="product-price">
                        <span class="original-price">R$59.99</span>
                        <span class="discount-price">R$45.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem19.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca Baby Yoda - Star Wars</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem20.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - The Witcher</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$99.99</span>
                        <span class="discount-price">R$79.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem21.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Caneca - The Last Of Us Part II</h3>
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
    )
}

export default Canecas;