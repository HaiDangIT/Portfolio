import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Bạn có dự án trong đầu? <br className="sm:block hidden" />
        Hãy cùng nhau xây dựng điều gì đó tuyệt vời!
      </p>
      <Link to="/contact" className="btn">
        Liên Hệ
      </Link>
    </section>
  );
};

export default CTA;
