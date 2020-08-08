import React from 'react';

function App() {
  return (
    <div>
      <h1 className="site-heading text-center text-white d-none d-lg-block">  
          <img src='img/logo.png' />
      </h1>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Asilo Melhor Idade</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active px-lg-4">
                <a className="nav-link text-uppercase text-expanded" href="index.html">Início
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase text-expanded" href="about.html">Sobre</a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase text-expanded" href="products.html">Campanhas</a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase text-expanded" href="store.html">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="page-section about-heading">
        <div className="container">
          <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/about-menor.jpg" alt="" />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Respeito e Dignidade</span>
                    <span className="section-heading-lower">Morada da Melhor Idade</span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor sapien, tincidunt vitae leo sed, vestibulum varius velit. Pellentesque in nulla augue. Curabitur tincidunt quam lacus, vel sollicitudin odio euismod non. Phasellus imperdiet arcu nec tincidunt pretium. Suspendisse interdum risus at risus imperdiet, et egestas purus facilisis. Nullam vehicula nisi at commodo aliquam. Etiam eu pellentesque purus, ut ultricies lectus. Nulla facilisi. Morbi id pellentesque est, quis pretium libero. Praesent pulvinar nulla ut metus efficitur lacinia. Phasellus lacus urna, aliquet non vulputate et, rutrum at sem.</p>
                  <p>Nunc blandit eros vitae leo sodales, eu lobortis urna porttitor. Sed laoreet mauris neque, ac laoreet augue consequat nec. Aliquam tristique venenatis maximus. In nec dui bibendum, suscipit odio interdum, mollis libero. Fusce hendrerit est leo, id finibus quam tempor nec. Vestibulum convallis vulputate tortor. Sed elementum fermentum sem et accumsan. In tempor facilisis lacus nec faucibus. Pellentesque nec nisi eget ipsum lacinia dictum a sodales arcu. In vitae nisl turpis. Nunc ullamcorper, erat et ultricies tincidunt, felis enim semper augue, a pretium orci nibh ut augue. Etiam at ligula leo. Nullam auctor risus nisi, at euismod libero mattis consectetur. Cras vulputate nisl in est ornare finibus. Curabitur feugiat at elit nec scelerisque. Donec placerat mauris vel ex aliquet gravida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">
            <a href='https://www.devpleno.com/software-do-bem'><img src='img/software-do-bem-logo-320x128.png' /></a><br />
            Desenvolvido durante o Hands-on ReactJS do DevPleno por Tulio Faria. Saiba mais.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
