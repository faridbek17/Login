import React from "react";

function Header() {
  return (
    <body>
      <header className="header">
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>

        <div className="search">
          <input type="text" placeholder="Search..." />
          <a>
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </header>

      <div className="bacground"></div>

      <section className="home">
        <div className="content">
            <a href="#" className="logo">Login</a>
            <h2>Welcome !</h2>
            <h3>To Our New Website</h3>
            <pre>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus?</pre>

            <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-github"></i>
            </div>
        </div>

        <div className="login">
            <h2>Sign In</h2>
            <div className="input">
                <input type="text" className="input1" placeholder="Email" required />
                <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="input">
                <input type="password" className="input1" placeholder="Password" required />
                <i className="fa-solid fa-lock"></i>
            </div>

            <div className="check">
                <label> <input type="checkbox"/> Rember Me</label>
                <a href="#">Forgot Password ?</a>
            </div>

            <div className="button">
                <button className="btn">Sign In</button>
            </div>

            <div className="sign-up">
                <p>Dont have an account ?</p>
                <a href="#"> Sign Up</a>
            </div>
        </div>
      </section>
    </body>
  );
}

export default Header;
