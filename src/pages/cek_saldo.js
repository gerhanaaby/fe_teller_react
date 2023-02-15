import React from "react";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";

export default function CekSaldo() {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        top: "18%",
        left: "20%",
      }}
    >
      <Container class="bodyHome">
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Form.Group controlId="formText" className="mb-3">
              <Form.Label>
                <Row style={{ width: "900px" }}>
                  <Col>
                    <h5>
                      <i>Account Enquiries</i>
                    </h5>
                    <span>Account Balance by Account Number</span>
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
              <Form.Control type="text" placeholder="Nomor Rekening" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Branch</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nomor Cabang"
                disabled
                // onChange={(u) =>
                //   setValues({ ...values, namaProduk: u.target.value })
                // }
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <Button variant="danger" type="submit">
              Search
            </Button>{" "}
            <Button variant="outline-danger">Print</Button>{" "}
          </Col>
        </Row>
        <br />
        <hr />
        <Form.Group controlId="formText" className="mb-3">
          <Form.Label>
            <Row style={{ width: "900px" }}>
              <Col>
                <h5>
                  <i>Hasil Pencarian</i>
                </h5>
              </Col>
            </Row>
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Tanggal</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Tanggal Hari Ini"
                disabled
                //   onChange={(u) =>
                //     setValues({ ...values, namaProduk: u.target.value })
                //   }
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Nomor Rekening</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Nomor Rekening" disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-5">
          <Row>
            <Col>
              <Form.Label>Nama Cabang</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nama Cabang"
                disabled
                //   onChange={(u) =>
                //     setValues({ ...values, namaProduk: u.target.value })
                //   }
              />
            </Col>
          </Row>
        </Form.Group>
      </Container>

      <Table striped>
        <thead>
          <tr>
            <th>Account No</th>
            <th>Account Name</th>
            <th>Cust No</th>
            <th>Limit</th>
            <th>Category</th>
            <th>CCY</th>
            <th>Online Bal</th>
            <th>Working Bal</th>
            <th>Cleared Bal</th>
            <th>Open Date</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />
      <hr />

      <Form.Group controlId="formText" className="mb-3">
        <Form.Label>
          <Row style={{ width: "900px" }}>
            <Col>
              <h5>
                <i>Total Value</i>
              </h5>
            </Col>
          </Row>
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="formText" className="mb-3">
        <Row>
          <Col>
            <Form.Label>Online Balance</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Online Balance" disabled />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formText" className="mb-3">
        <Row>
          <Col>
            <Form.Label>Working Balance</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Working Balance"
              disabled
              //   onChange={(u) =>
              //     setValues({ ...values, namaProduk: u.target.value })
              //   }
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formText" className="mb-5">
        <Row>
          <Col>
            <Form.Label>Cleared Balance</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Cleared Balance"
              disabled
              //   onChange={(u) =>
              //     setValues({ ...values, namaProduk: u.target.value })
              //   }
            />
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}
