const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<nav class="navbar navbar-dark bg-dark m-0 ">
<div class="container-fluid" bis_skin_checked="1" >
  <a class="navbar-brand" href="/index" id="tituloPag">NEEKOPEDIA</a>
  <button class="navbar-toggler" style="margin-right: 10px;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" bis_skin_checked="1">
    <div class="offcanvas-header" bis_skin_checked="1">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">NEEKOPEDIA</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" bis_skin_checked="1">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/index" 
              >Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/regions" 
              >Regiones</a>
          </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/fanArt" 
            >FanArts</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/champs">Campeones</a>
        </li>
        <hr class="dropdown-divider">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-user" style="margin-right: 3px;"></i>  Perfil
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/register">REGISTRO</a></li>
            <li><a class="dropdown-item" href="/login">LOGIN</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
`;

footer.innerHTML = `
<h3 class="footerText">CONTACTANOS</h3>
<div class="footer">
    <a href="https://web.facebook.com/LeagueofLegendsLatino?locale=es_LA" class="icono1">
    <i class="fa-brands fa-square-facebook"></i>
    </a>
    <a href="#" class="icono2">
    <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="#" class="icono3">
    <i class="fa-regular fa-envelope"></i>
    </a>
</div>
<div>
    <h2 class="footerText">© NeekoPedia 2024</h2> 
</div>
`;