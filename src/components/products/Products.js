import React from "react";
import Nav from "../nav/Nav";
import "./product.css";
import Footer from "../footer/Footer";

const Product = () => {
  return (
    <div>
      <Nav />
      <div>
        <section className="razo-blog-area section-padding-80-0">
          <div style={{}} className="container pt-5">
            <div className="row">
              {/* <!-- Weekly News Area --> */}
              <div className="col-12 col-md-8">
                <div className="weekly-news-area mb-50">
                  {/* <!-- Section Heading --> */}
                  <div className="section-heading">
                    <h2>Latest News</h2>
                  </div>

                  {/* <!-- Featured Post Area --> */}
                  <div
                    className="featured-post-area bg-img bg-overlay mb-30"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1434310/pexels-photo-1434310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
                    }}
                  >
                    {/* <!-- Post Overlay --> */}
                    <div className="post-overlay">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        The light and music exposition hits los angeles in the
                        fashion week
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    {/* <!-- Single Post Area --> */}
                    <div className="col-12 col-md-6">
                      <div
                        className="razo-single-post d-flex mb-30"
                        style={{ margin: "12px 0" }}
                      >
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <a href="single-blog.html">
                            <img
                              src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              width="100;"
                              height="100;"
                            />
                          </a>
                        </div>
                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <div className="post-meta">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              2.1k
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              3.6k
                            </a>
                          </div>
                          <a href="single-blog.html" className="post-title">
                            Drug bust leads police to underground tunnel
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="col-12 col-md-6">
                      <div
                        className="razo-single-post d-flex mb-30"
                        style={{ margin: "12px 0" }}
                      >
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <a href="single-blog.html">
                            <img
                              src="https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              width="100;"
                              height="100;"
                            />
                          </a>
                        </div>
                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <div className="post-meta">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              2.1k
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              3.6k
                            </a>
                          </div>
                          <a href="single-blog.html" className="post-title">
                            Hear abuse victims' messages for the Pope
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="col-12 col-md-6">
                      <div
                        className="razo-single-post d-flex"
                        style={{ margin: "12px 0" }}
                      >
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <a href="single-blog.html">
                            <img
                              src="https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              width="100;"
                              height="100;"
                            />
                          </a>
                        </div>
                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <div className="post-meta">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              2.1k
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              3.6k
                            </a>
                          </div>
                          <a href="single-blog.html" className="post-title">
                            New Mexico uspects' attorneys file to have all
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="col-12 col-md-6">
                      <div
                        className="razo-single-post d-flex mb-30"
                        style={{ margin: "12px 0" }}
                      >
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <a href="single-blog.html">
                            <img
                              src="https://images.unsplash.com/photo-1464495131956-142fe25dd50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              height="100px"
                              width="100px"
                            />
                          </a>
                        </div>
                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <div className="post-meta">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              2.1k
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              3.6k
                            </a>
                          </div>
                          <a href="single-blog.html" className="post-title">
                            Trump tweets false white supremacist talking
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Trending News Area --> */}
              <div className="col-12 col-md-4">
                <div className="trending-news-area mb-50">
                  {/* <!-- Section Heading --> */}
                  <div className="section-heading">
                    <h2>Trending</h2>
                  </div>

                  {/* <!-- Featured Post Area --> */}
                  <div
                    className="featured-post-area small-featured-post bg-img bg-overlay mb-30"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
                    }}
                  >
                    {/* <!-- Post Overlay --> */}
                    <div className="post-overlay">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        Hawaii braces for Hurricane Lane
                      </a>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div
                    className="razo-single-post d-flex mb-30"
                    style={{ margin: "24px 0" }}
                  >
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                      <a href="single-blog.html">
                        <img
                          src="https://images.unsplash.com/photo-1553468294-61086700acaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          height="100px"
                          width="100px"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        Hurricane Lane brings 19 inches of rain
                      </a>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div
                    className="razo-single-post d-flex mb-30"
                    style={{ margin: "24px 0" }}
                  >
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                      <a href="single-blog.html">
                        <img
                          src="https://images.unsplash.com/photo-1447755086558-cb9e3830d677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          height="100px"
                          width="100px"
                        />
                      </a>
                    </div>
                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        What these victims want the Pope to know
                      </a>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div
                    className="razo-single-post d-flex mb-30"
                    style={{ margin: "24px 0" }}
                  >
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                      <a href="single-blog.html">
                        <img
                          src="https://images.unsplash.com/photo-1534682296016-a6e42a75156e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          height="100px"
                          width="100px"
                        />
                      </a>
                    </div>
                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        What happens if you don't have a will?
                      </a>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div
                    className="razo-single-post d-flex mb-30"
                    style={{ margin: "24px 0" }}
                  >
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                      <a href="single-blog.html">
                        <img
                          src="https://images.unsplash.com/photo-1523479811578-cca53ad93441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          2.1k
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 3.6k
                        </a>
                      </div>
                      <a href="single-blog.html" className="post-title">
                        Giuliani: No reason for Trump impeachment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
