import React from "react"

const Card = ({
  photo,
  title = "Virtuoso",
  description,
  buttonText = "Go Practice",
}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-success">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
