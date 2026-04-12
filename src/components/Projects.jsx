import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project from './Data/projects.json'
const Projects = () => {
  return (
    <>
     <div className='container project my-3 '>
     <h1>PROJECTS</h1>
      <div className='row d-flex justify-content-center align-item-center '>
{
  project.map((data)=>(
    <>
    <div key={data.id} className='col my-3 ' >
    <Card className=' text-light bg-dark ' 
    style={{ width: '18rem',border:"1px solid yellow",borderRadius:"10px",boxShadow:"5px 5px 10px 5px rgba(101,175,10,0.5)" }}
     data-aos="flip-right"
      data-aos-duration="1000"
    >
      <Card.Img variant="top" src={`assets/${data.imageSrc}`}
       style={{width:"20vh",border:"1px solid yellow",borderRadius:"10px"}} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button href={data.demo}  variant="primary mx-3">
          Demo
        </Button>
        {" "}
        <Button href={data.source}  variant="warning">
         Code
        </Button>
      </Card.Body>
    </Card>
    </div>
    </>
  ))
}

      </div>
     </div>
    </>
  )
}

export default Projects
