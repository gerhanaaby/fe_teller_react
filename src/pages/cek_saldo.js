import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

export default function CekSaldo() {
  return (
    <Container class="bodyHome">
      <Form>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Form.Group controlId="formText" className="mb-3">
              <Form.Label>
                <Row style={{ width: "1050px" }}>
                  <Col>
                    <h5>
                      <i>Setoran Kriling</i>
                    </h5>
                  </Col>
                  <Col>
                    <h5>
                      <i>Case-ID : SK-202302150001</i>
                    </h5>
                  </Col>
                </Row>
              </Form.Label>
              <hr />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Label>
                <b>Nomor Rekening</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nomor Rekening"
                // onChange={(u) =>
                //   setValues({ ...values, nomorRek: u.target.value })
                // }
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Nama Produk</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nama Produk"
                disabled
                // onChange={(u) =>
                //   setValues({ ...values, namaProduk: u.target.value })
                // }
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}
