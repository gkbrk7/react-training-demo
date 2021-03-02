import { hot } from "react-hot-loader/root";
import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "reactstrap";

function App() {
  const titleProduct = "Product List"
  const titleCategory = "Category List"

  return (
    <div className="App">
      <Container>
        <Row>
          <Navbar></Navbar>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title={titleProduct}></ProductList>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default hot(App);
