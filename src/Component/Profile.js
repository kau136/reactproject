import { Component } from "react";
// import "./Profile.css";
class Profile extends Component {
  render() {
    return (
        <div>


<header>

    <div class="user">
    <img/>
        <h3 class="name">Hemant Kaushik</h3>
        <p class="post">front end developer</p>
    </div>

    <nav class="navbar">
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#portfolio">Category</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>

</header>



<div id="menu" class="fas fa-bars"></div>



<section class="home" id="home">

    <h3>HI THERE !</h3>
    <h1>I'M <span>Hemant Kaushik</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
    </p>
    <a href="#about"><button class="btn">about me <i class="fas fa-user"></i></button></a>

</section>



<section class="about" id="about">

<h1 class="heading"> <span>about</span> me </h1>

<div class="row">

    <div class="info">
        <h3> <span> name : </span> Hemant Kaushik </h3>
        <h3> <span> age : </span> 20 </h3>
        <h3> <span> qualification : </span> B.tech </h3>
        <h3> <span> post : </span> front end developer </h3>
        <h3> <span> language : </span> English</h3>
        <a href="#"><button class="btn"> download CV <i class="fas fa-download"></i> </button></a>
    </div>

    <div class="counter">

        <div class="box">
            <span>2+</span>
            <h3>years of experience</h3>
        </div>

        <div class="box">
            <span>100+</span>
            <h3>porject completed</h3>
        </div>

        <div class="box">
            <span>430+</span>
            <h3>happy clients</h3>
        </div>

        <div class="box">
            <span>12+</span>
            <h3>awards won</h3>
        </div>

    </div>

</div>

</section>



<section class="education" id="education">

<h1 class="heading"> my <span>education</span> </h1>

<div class="box-container">

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2016</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2017</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2018</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2019</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2020</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2021</span>
        <h3>front end development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>

</div>

</section>



<section class="portfolio" id="portfolio">

<h1 class="heading"> my <span>portfolio</span> </h1>

<div class="box-container">

    <div class="box">
        <img src="img/male-photo1.jpg" alt=""/>
    </div>

    <div class="box">
        <img src="images/img2.jpg" alt=""/>
    </div>

    <div class="box">
        <img src="images/img3.jpg" alt=""/>
    </div>

    <div class="box">
        <img src="images/img4.jpg" alt=""/>
    </div>

    <div class="box">
        <img src="images/img5.jpg" alt=""/>
    </div>

    <div class="box">
        <img src="images/img6.jpg" alt=""/>
    </div>

</div>

</section>


<section class="contact" id="contact">

<h1 class="heading"> <span>contact</span> me </h1>

<div class="row">

    <div class="content">

        <h3 class="title">contact info</h3>

        <div class="info">
            <h3> <i class="fas fa-envelope"></i>hkkaushik136@gmail.com </h3>
            <h3> <i class="fas fa-phone"></i> +918954745517 </h3>
            <h3> <i class="fas fa-phone"></i>+918954745517 </h3>
            <h3> <i class="fas fa-map-marker-alt"></i> Agra, india - 282007. </h3>
        </div>

    </div>

    <form action="">

        <input type="text" placeholder="name" class="box"/>
        <input type="email" placeholder="email" class="box"/>
        <input type="text" placeholder="project" class="box"/>
        <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
        <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

    </form>

</div>

</section>



<a href="#home" class="top">
    <img src="images/scroll-top-img.png" alt=""/>
</a>


        </div>
    );
  }
}
export default Profile;
