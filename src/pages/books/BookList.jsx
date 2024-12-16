import { Link } from 'react-router-dom'

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookList() {
  return (
    <div>
      
      <h1>Book List</h1>

      <div>

        <Card style={{ width: '200px' }}>
          <Card.Img variant="top" src={img1} alt="cover" width={120} height={200}/>
          <Card.Body>
            <Card.Title>Book1</Card.Title>
            <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
            <Link to="/book/details/1">
              <Button>
                See Book 1
              </Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img src={img2} alt="cover" width={120} height={200}/>
          <h3>Book2</h3>
          <p>Lorem ipsum, dolor sit amet</p>
          <Link to="/book/details/2">See Book 2</Link>
        </Card>

        <Card>
          <Card.Img src={img3} alt="cover" width={120} height={200}/>
          <h3>Book3</h3>
          <p>Lorem ipsum, dolor sit amet</p>
          <Link to="/book/details/3">See Book 3</Link>
        </Card>

      </div>


    </div>
  )
}

export default BookList