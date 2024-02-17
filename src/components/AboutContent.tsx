import React from "react";

interface AboutContentProps {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}

const AboutContent: React.FC<AboutContentProps> = ({
  title,
  first_content,
  second_content,
  third_content,
  first_image,
  second_image,
  second_title,
  fourth_content,
  fifth_content,
  author,
}) => {
  return (
    <section className="bg0 p-t-75 p-b-120">
      <div className="container">
        <div className="row p-b-148">
          <div className="col-md-7 col-lg-8">
            <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
              <h3 className="mtext-111 cl2 p-b-16">{title}</h3>

              <p className="stext-113 cl6 p-b-26">{fifth_content}</p>

              <p className="stext-113 cl6 p-b-26">{second_content}</p>

              <p className="stext-113 cl6 p-b-26">{third_content}</p>
            </div>
          </div>

          <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
            <div className="how-bor1">
              <div className="hov-img0">
                <img src={first_image} alt="IMG" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
            <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
              <h3 className="mtext-111 cl2 p-b-16">{second_title}</h3>

              <p className="stext-113 cl6 p-b-26">{fourth_content}</p>

              <div className="bor16 p-l-29 p-b-9 m-t-22">
                <p className="stext-114 cl6 p-r-40 p-b-11">{fifth_content}</p>

                <span className="stext-111 cl8">{author}</span>
              </div>
            </div>
          </div>

          <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
            <div className="how-bor2">
              <div className="hov-img0">
                <img src={second_image} alt="IMG" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
