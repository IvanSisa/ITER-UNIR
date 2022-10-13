const App = () => {

  function openSection() {
    let secondSection = document.getElementById("second-section");
    let buttonOpen = document.getElementById("first-button");
    let buttonClose = document.getElementById("second-button");
    secondSection.classList.replace("none","flex");
    buttonOpen.classList.replace("block","none");
    buttonClose.classList.replace("none","block")
    console.log("pulsado");
  }
  function closeSection() {
    let secondSection = document.getElementById("second-section");
    let buttonOpen = document.getElementById("first-button");
    let buttonClose = document.getElementById("second-button");
    secondSection.classList.replace("flex","none");
    buttonOpen.classList.replace("none","block");
    buttonClose.classList.replace("block","none");
    
  }

  return (
    <>
      <div id="app">
        <header class="header">
          <h2>También te puede interesar</h2>
        </header>
        <main>
          <section>
            <article class="article purple">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">Marketing Digital</h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2883)">
                        <path
                          d="M30.9756 19.2744C29.9477 21.2361 28.4026 22.8791 26.5077 24.0255C24.6128 25.1719 22.4403 25.778 20.2256 25.778C18.0109 25.778 15.8384 25.1719 13.9435 24.0255C12.0486 22.8791 10.5035 21.2361 9.47559 19.2744C10.5035 17.3126 12.0486 15.6696 13.9435 14.5232C15.8384 13.3768 18.0109 12.7708 20.2256 12.7708C22.4403 12.7708 24.6128 13.3768 26.5077 14.5232C28.4026 15.6696 29.9477 17.3126 30.9756 19.2744V19.2744Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M20.2273 25.7309C23.7943 25.7309 26.686 22.8392 26.686 19.2722C26.686 15.7051 23.7943 12.8135 20.2273 12.8135C16.6602 12.8135 13.7686 15.7051 13.7686 19.2722C13.7686 22.8392 16.6602 25.7309 20.2273 25.7309Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M23.4455 19.2721L20.8604 20.7649L18.2754 22.2577V19.2721V16.2866L20.8604 17.7794L23.4455 19.2721Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#918BFF"
                      />
                      <defs>
                        <clipPath id="clip0_601_2883">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Aprende a diseñar, implementar y analizar una estrategia de
                    marketing digital completa y a medida para cualquier negocio
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      BOOTCAMP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article green">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">
                    Inteligencia Artificial y Big Data
                  </h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2934)">
                        <path
                          d="M13.7389 17.3912C16.0935 17.3912 18.0023 15.4824 18.0023 13.1278C18.0023 10.7733 16.0935 8.8645 13.7389 8.8645C11.3843 8.8645 9.47559 10.7733 9.47559 13.1278C9.47559 15.4824 11.3843 17.3912 13.7389 17.3912Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.7126 17.3912C29.0671 17.3912 30.9759 15.4824 30.9759 13.1278C30.9759 10.7733 29.0671 8.8645 26.7126 8.8645C24.358 8.8645 22.4492 10.7733 22.4492 13.1278C22.4492 15.4824 24.358 17.3912 26.7126 17.3912Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.7389 29.6844C16.0935 29.6844 18.0023 27.7756 18.0023 25.4211C18.0023 23.0665 16.0935 21.1577 13.7389 21.1577C11.3843 21.1577 9.47559 23.0665 9.47559 25.4211C9.47559 27.7756 11.3843 29.6844 13.7389 29.6844Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.7126 29.6844C29.0671 29.6844 30.9759 27.7756 30.9759 25.4211C30.9759 23.0665 29.0671 21.1577 26.7126 21.1577C24.358 21.1577 22.4492 23.0665 22.4492 25.4211C22.4492 27.7756 24.358 29.6844 26.7126 29.6844Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#7CD1B0"
                      />
                      <defs>
                        <clipPath id="clip0_601_2934">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Programa sistemas inteligentes y optimiza la gestión de
                    grandes volúmenes de información.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      MASTER FP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article yellow">
              <div class="article__body">
                <div class="article__body__title">
                  <div class="article__body__title__text">
                    <h3 class="article__body__title__title">ASIR</h3>
                    <h5>Administración de Sistemas Informáticos en Red</h5>
                  </div>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2906)">
                        <path
                          d="M20.2251 25.8881C23.8778 25.8881 26.8389 22.927 26.8389 19.2743C26.8389 15.6216 23.8778 12.6605 20.2251 12.6605C16.5724 12.6605 13.6113 15.6216 13.6113 19.2743C13.6113 22.927 16.5724 25.8881 20.2251 25.8881Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M28.3402 13.369C29.678 13.369 30.7625 12.2845 30.7625 10.9467C30.7625 9.6089 29.678 8.52441 28.3402 8.52441C27.0025 8.52441 25.918 9.6089 25.918 10.9467C25.918 12.2845 27.0025 13.369 28.3402 13.369Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M11.8979 13.5836C13.2356 13.5836 14.3201 12.4991 14.3201 11.1613C14.3201 9.8235 13.2356 8.73901 11.8979 8.73901C10.5601 8.73901 9.47559 9.8235 9.47559 11.1613C9.47559 12.4991 10.5601 13.5836 11.8979 13.5836Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M12.1127 30.0244C13.4505 30.0244 14.535 28.9399 14.535 27.6021C14.535 26.2643 13.4505 25.1798 12.1127 25.1798C10.7749 25.1798 9.69043 26.2643 9.69043 27.6021C9.69043 28.9399 10.7749 30.0244 12.1127 30.0244Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M28.5531 29.8107C29.8909 29.8107 30.9754 28.7262 30.9754 27.3885C30.9754 26.0507 29.8909 24.9662 28.5531 24.9662C27.2153 24.9662 26.1309 26.0507 26.1309 27.3885C26.1309 28.7262 27.2153 29.8107 28.5531 29.8107Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.6318 12.8513L15.4881 14.659"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.627 12.6605L24.8408 14.5371"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.8027 25.8678L15.6104 24.0116"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.8191 25.6983L24.9629 23.8895"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#F1B270"
                      />
                      <defs>
                        <clipPath id="clip0_601_2906">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Configura, administra y mantiene sistemas informáticos. Con
                    perfil en ciberseguridad.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      GRADO FP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article purple">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">eCommerce</h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2957)">
                        <path
                          d="M28.4315 13.6124H12.0195V30.0244H28.4315V13.6124Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M14.873 13.6124C14.9426 12.2397 15.5368 10.9463 16.5329 9.99938C17.529 9.05245 18.8509 8.52441 20.2252 8.52441C21.5996 8.52441 22.9215 9.05245 23.9176 9.99938C24.9137 10.9463 25.5079 12.2397 25.5774 13.6124"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#918BFF"
                      />
                      <defs>
                        <clipPath id="clip0_601_2957">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Descubre cómo montar tu propio ecommerce y especialízate en
                    habilidades como Shopify, logística o gestión del surtido
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      BOOTCAMP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="none" id="second-section">
            <article class="article purple">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">
                    Gestor de Tiendas Online con Shopify
                  </h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2957)">
                        <path
                          d="M28.4315 13.6124H12.0195V30.0244H28.4315V13.6124Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M14.873 13.6124C14.9426 12.2397 15.5368 10.9463 16.5329 9.99938C17.529 9.05245 18.8509 8.52441 20.2252 8.52441C21.5996 8.52441 22.9215 9.05245 23.9176 9.99938C24.9137 10.9463 25.5079 12.2397 25.5774 13.6124"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#918BFF"
                      />
                      <defs>
                        <clipPath id="clip0_601_2957">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Construye y gestiona una tienda online desde cero con
                    Shopify, la plataforma líder en el sector, y diferentes
                    pasarelas de pago.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      BOOTCAMP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article yellow">
              <div class="article__body">
                <div class="article__body__title">
                  <div class="article__body__title__text">
                    <h3 class="article__body__title__title">
                      Marketing y Publicidad
                    </h3>
                  </div>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2906)">
                        <path
                          d="M20.2251 25.8881C23.8778 25.8881 26.8389 22.927 26.8389 19.2743C26.8389 15.6216 23.8778 12.6605 20.2251 12.6605C16.5724 12.6605 13.6113 15.6216 13.6113 19.2743C13.6113 22.927 16.5724 25.8881 20.2251 25.8881Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M28.3402 13.369C29.678 13.369 30.7625 12.2845 30.7625 10.9467C30.7625 9.6089 29.678 8.52441 28.3402 8.52441C27.0025 8.52441 25.918 9.6089 25.918 10.9467C25.918 12.2845 27.0025 13.369 28.3402 13.369Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M11.8979 13.5836C13.2356 13.5836 14.3201 12.4991 14.3201 11.1613C14.3201 9.8235 13.2356 8.73901 11.8979 8.73901C10.5601 8.73901 9.47559 9.8235 9.47559 11.1613C9.47559 12.4991 10.5601 13.5836 11.8979 13.5836Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M12.1127 30.0244C13.4505 30.0244 14.535 28.9399 14.535 27.6021C14.535 26.2643 13.4505 25.1798 12.1127 25.1798C10.7749 25.1798 9.69043 26.2643 9.69043 27.6021C9.69043 28.9399 10.7749 30.0244 12.1127 30.0244Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M28.5531 29.8107C29.8909 29.8107 30.9754 28.7262 30.9754 27.3885C30.9754 26.0507 29.8909 24.9662 28.5531 24.9662C27.2153 24.9662 26.1309 26.0507 26.1309 27.3885C26.1309 28.7262 27.2153 29.8107 28.5531 29.8107Z"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.6318 12.8513L15.4881 14.659"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.627 12.6605L24.8408 14.5371"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.8027 25.8678L15.6104 24.0116"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.8191 25.6983L24.9629 23.8895"
                          stroke="#F1B270"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#F1B270"
                      />
                      <defs>
                        <clipPath id="clip0_601_2906">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Diseña e implementa estrategias de marketing para todo tipo
                    de empresas. Con perfil en Growth Marketing.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      GRADO FP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article purple">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">Growth Marketing</h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2883)">
                        <path
                          d="M30.9756 19.2744C29.9477 21.2361 28.4026 22.8791 26.5077 24.0255C24.6128 25.1719 22.4403 25.778 20.2256 25.778C18.0109 25.778 15.8384 25.1719 13.9435 24.0255C12.0486 22.8791 10.5035 21.2361 9.47559 19.2744C10.5035 17.3126 12.0486 15.6696 13.9435 14.5232C15.8384 13.3768 18.0109 12.7708 20.2256 12.7708C22.4403 12.7708 24.6128 13.3768 26.5077 14.5232C28.4026 15.6696 29.9477 17.3126 30.9756 19.2744V19.2744Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M20.2273 25.7309C23.7943 25.7309 26.686 22.8392 26.686 19.2722C26.686 15.7051 23.7943 12.8135 20.2273 12.8135C16.6602 12.8135 13.7686 15.7051 13.7686 19.2722C13.7686 22.8392 16.6602 25.7309 20.2273 25.7309Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M23.4455 19.2721L20.8604 20.7649L18.2754 22.2577V19.2721V16.2866L20.8604 17.7794L23.4455 19.2721Z"
                          stroke="#918BFF"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#918BFF"
                      />
                      <defs>
                        <clipPath id="clip0_601_2883">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Fórmate con el curso de Growth Marketing para mejorar el
                    rendimiento digital de una marca o producto en tiempo
                    récord.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      BOOTCAMP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article class="article green">
              <div class="article__body">
                <div class="article__body__title">
                  <h3 class="article__body__title__title">Ciberseguridad</h3>
                  <div class="article__body__title__icon">
                    <svg
                      width="40"
                      height="39"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_601_2934)">
                        <path
                          d="M13.7389 17.3912C16.0935 17.3912 18.0023 15.4824 18.0023 13.1278C18.0023 10.7733 16.0935 8.8645 13.7389 8.8645C11.3843 8.8645 9.47559 10.7733 9.47559 13.1278C9.47559 15.4824 11.3843 17.3912 13.7389 17.3912Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.7126 17.3912C29.0671 17.3912 30.9759 15.4824 30.9759 13.1278C30.9759 10.7733 29.0671 8.8645 26.7126 8.8645C24.358 8.8645 22.4492 10.7733 22.4492 13.1278C22.4492 15.4824 24.358 17.3912 26.7126 17.3912Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.7389 29.6844C16.0935 29.6844 18.0023 27.7756 18.0023 25.4211C18.0023 23.0665 16.0935 21.1577 13.7389 21.1577C11.3843 21.1577 9.47559 23.0665 9.47559 25.4211C9.47559 27.7756 11.3843 29.6844 13.7389 29.6844Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M26.7126 29.6844C29.0671 29.6844 30.9759 27.7756 30.9759 25.4211C30.9759 23.0665 29.0671 21.1577 26.7126 21.1577C24.358 21.1577 22.4492 23.0665 22.4492 25.4211C22.4492 27.7756 24.358 29.6844 26.7126 29.6844Z"
                          stroke="#7CD1B0"
                          stroke-miterlimit="10"
                        />
                      </g>
                      <rect
                        x="1.45117"
                        y="0.5"
                        width="37.5488"
                        height="37.5488"
                        stroke="#7CD1B0"
                      />
                      <defs>
                        <clipPath id="clip0_601_2934">
                          <rect
                            width="22.5488"
                            height="22.5488"
                            fill="white"
                            transform="translate(8.95117 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="article__body__text">
                  <p class="article__body__text__text">
                    Diseña estrategias con las que hacer frente a cualquier
                    ataque informático.
                  </p>
                </div>
              </div>
              <div class="article__footer">
                <div class="article__footer__items">
                  <div class="article__footer__items__text">
                    <h4 class="article__footer__items__text__title">
                      MASTER FP
                    </h4>
                    <p class="article__footer__items__text__time">6 meses</p>
                    <p class="article__footer__items__text__data">
                      Inicio: OCT
                    </p>
                  </div>
                  <div class="article__footer__items__icon">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.293945 6.50004C0.293945 6.30867 0.369969 6.12513 0.505292 5.98981C0.640615 5.85448 0.824153 5.77846 1.01553 5.77846H18.0348L13.4931 1.23826C13.3576 1.10276 13.2815 0.918995 13.2815 0.727377C13.2815 0.53576 13.3576 0.35199 13.4931 0.216496C13.6286 0.0810024 13.8124 0.00488282 14.004 0.00488281C14.1956 0.00488281 14.3794 0.0810024 14.5149 0.216496L20.2876 5.98916C20.3548 6.05619 20.4081 6.13582 20.4445 6.22348C20.4808 6.31115 20.4996 6.40513 20.4996 6.50004C20.4996 6.59496 20.4808 6.68894 20.4445 6.7766C20.4081 6.86427 20.3548 6.94389 20.2876 7.01092L14.5149 12.7836C14.3794 12.9191 14.1956 12.9952 14.004 12.9952C13.8124 12.9952 13.6286 12.9191 13.4931 12.7836C13.3576 12.6481 13.2815 12.4643 13.2815 12.2727C13.2815 12.0811 13.3576 11.8973 13.4931 11.7618L18.0348 7.22163H1.01553C0.824153 7.22163 0.640615 7.1456 0.505292 7.01028C0.369969 6.87496 0.293945 6.69142 0.293945 6.50004V6.50004Z"
                        fill="#918BFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <button className="block" id="first-button" onClick={openSection}>
            Ver más
          </button>
          <button className="none" id="second-button" onClick={closeSection}>
            Ver menos
          </button>
        </main>
      </div>
    </>
  );
};
export default App;
