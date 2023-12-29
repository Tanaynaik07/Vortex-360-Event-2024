import { useParams } from "react-router-dom";
import { domains } from "./Constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const DomainInfo = () => {
  const { domainId } = useParams();
  const [title, setTitle] = useState("default");
  const [desp, setDesp] = useState("default");
  const [content, setContent] = useState([]);
  const [img, setImg] = useState("default");

  useEffect(() => {
    const newd = domains.find((d) => parseInt(domainId) === d.id);
    setTitle(newd.dom);
    setDesp(newd.desp);
    setContent(newd.content);
    setImg(newd.icon);
  }, [domainId]);
  return (
    <div class="domain-info">
      <header class="mb-5">
        <div className="head">
          <img src={img} alt="" width="40px" />
          <h1 class=" fw-bold">{title}</h1>
        </div>
        <p>{desp}</p>
      </header>
      <div class="domain-sections">
        {content.map((c, key) => (
          <section key={key}>
            <h2>{c[0]}</h2>
            <p>{c[1]}</p>
          </section>
        ))}
      </div>
      <div class="d-grid gap-2 d-flex justify-content-center pb-5 pt-4">
        <Link to={`/`}>
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
            style={{
              backgroundColor: "#212529",
              border: "none",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default DomainInfo;
