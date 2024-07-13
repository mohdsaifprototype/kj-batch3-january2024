let navigation = document.querySelector("#navigation");

let myNavigation = `
  <!-- Navbar -->
  <nav
    class="container-xxl bd-gutter flex-wrap flex-lg-nowrap"
    aria-label="Thirteenth navbar example"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample11"
        aria-controls="navbarsExample11"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
        <a class="navbar-brand col-lg-3 me-0" href="#">Centered nav</a>
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/about.html"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/contact.html"
              >Contact Us</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
          <a href="/login.html"
            ><button class="btn btn-primary">Login</button></a
          >
        </div>
      </div>
    </div>
  </nav>`;

navigation.innerHTML = myNavigation;

let header = document.createElement("header");

header.classList.add(
  "navbar",
  "navbar-expand-lg",
  "bd-navbar",
  "sticky-top",
  "bg-body-tertiary"
);

header.innerHTML = myNavigation;

header.replaceWith(navigation)

// navigation