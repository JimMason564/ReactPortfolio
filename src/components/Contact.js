import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact Me
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Please feel free to reach out to me for any work inquiries or further
          information!
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    ></input>
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    ></input>
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    ></input>
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <a
                class="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Seattle, WA 98101</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>    
        <a
          class="info"
          href="mailto: 85d9a63e-714a-4a9f-8417-98968ee5b400@jm1906.anonaddy.com"
          target="_blank"
        >E-mail</a>
        <br></br>
        <a class= "info" href="https://github.com/JimMason564">
          Github
        </a>
        <br></br>
        <a
          class="info"
          href="https://www.linkedin.com/in/james-mason-451b39ab/"
        >
          LinkedIn
        </a>
          </div>
        </div>
      </section>
    </div>
  );
}