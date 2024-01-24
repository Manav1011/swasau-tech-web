import './style.css'
function page() {
  return (
    <>
  <header>
    <nav className="navbar">
      <h2> Gavacy. </h2>
      <ul id="list">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#"> Our Pricing </a>
        </li>
        <li>
          <a href="#"> About Us </a>
        </li>
        <li>
          <a href="#"> Services </a>
        </li>
        <li>
          <a href="#"> News </a>
        </li>
        <li>
          <a href="#"> Page </a>
        </li>
        <li>
          <a href="#" className="button">
            {" "}
            Free Trial{" "}
          </a>
        </li>
      </ul>
      <ul id="hamBurger">
        <li>
          <i className="fa-solid fa-bars" />
        </li>
      </ul>
      <ul className="responsive">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#"> Our Pricing </a>
        </li>
        <li>
          <a href="#"> About Us </a>
        </li>
        <li>
          <a href="#"> Services </a>
        </li>
        <li>
          <a href="#"> News </a>
        </li>
        <li>
          <a href="#"> Page </a>
        </li>
        <li>
          <a href="#" className="button">
            {" "}
            Free Trial{" "}
          </a>
        </li>
      </ul>
    </nav>
  </header>
  {/*================== Header Section Ends Here */}
  {/*================== Home Section Starts from Here ==================*/}
  <section id="home">
    <div className="home-left">
      <img src="/images/aboutus/user.jpg" alt="" />
    </div>
    <div className="home-right">
      <h2 className="home-heading"> Grow Up Your Workflow Speed </h2>
      <p className="home-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        quibusdam blanditiis quas assumenda nam error vel dolores suscipit ad,
        sapiente deleniti ipsum, obcaecati perspiciatis.
      </p>
      <a href="" className="btn">
        {" "}
        Our Work
      </a>
    </div>
  </section>
  {/*================== Home Section Ends Here */}
  {/*================== Workflow Section Starts from Here ==================*/}
  <section id="workFlow">
    <h2 className="heading"> Grow Up Your Workflow Speed. </h2>
    <p className="para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi sint.{" "}
      <br />
      Ipsam molestias nemovel laboriosam consequatur, perferendis
      <br /> minima soluta? Natus necessitatibus autem suscipit!
    </p>
    <div className="num-container">
      <div className="num-item">
        <span>
          27,882 <br />
          Customers
        </span>
      </div>
      <div className="num-item">
        <span>
          90% <br />
          Action Plans
        </span>
      </div>
      <div className="num-item">
        <span>
          70,592 <br />
          Downloads
        </span>
      </div>
    </div>
  </section>
  {/*================== Workflow Section Ends Here */}
  {/*================== Goal Section Starts from Here ==================*/}
  <section id="goal">
    <div className="goal-left">
      <h2>Our Goal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis
        obcaecati incidunt asperiores, mollitia quibusdam velit at itaque sunt,
        culpa in pariatur quas, temporibus repellendus vitae! Vitae, illum
        asperiores.
      </p>
      <ul>
        <li>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          atque!
        </li>
        <li>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          atque!
        </li>
        <li>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          atque!
        </li>
      </ul>
      <a href="" className="btn">
        {" "}
        Contact Us
      </a>
    </div>
    <div className="goal-right">
      <img src="/images/aboutus/our goal.jpg" alt="" />
    </div>
  </section>
  {/*================== Goal Section Ends Here */}
  {/*================== Our Team Section Starts from Here ==================*/}
  <section id="our-Team">
    <h2>Our Member</h2>
    <div className="teamContainer">
      <div className="team-item">
        <img src="/images/aboutus/teamMember.png" alt="" />
        <h5 className="member-name">John Smith</h5>
        <span className="role">seo expert</span>
      </div>
      <div className="team-item">
        <img src="/images/aboutus/teamMember.png" alt="" />
        <h5 className="member-name">John Smith</h5>
        <span className="role">seo expert</span>
      </div>
      <div className="team-item">
        <img src="/images/aboutus/teamMember.png" alt="" />
        <h5 className="member-name">John Smith</h5>
        <span className="role">seo expert</span>
      </div>
      <div className="team-item">
        <img src="/images/aboutus/teamMember.png" alt="" />
        <h5 className="member-name">John Smith</h5>
        <span className="role">seo expert</span>
      </div>
    </div>
  </section>
  {/*================== Our Team Section Ends Here */}
  {/*================== Footer Starts from Here ==================*/}
  <footer>
    <p> © 2022 - All rights reserved - geekshelp.in</p>
  </footer>
</>
  )
}

export default page