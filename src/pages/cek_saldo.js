import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";
import "./../css/main.css";

export default function CekSaldo() {
  const [values, setValues] = useState({
    nomorRek: "",
    branch: "",
    nomorCabang: "",
    tanggal: "",
    accountNo: "",
    accountName: "",
    custNo: "",
    limit: "",
    category: "",
    ccy: "",
    onlineBal: "",
    workingBal: "",
    clearedBal: "",
    openDate: "",
  });

  const search = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    // console.log(localStorage.getItem("token")); ${localStorage.getItem("token")}
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postgetdetail",
        {
          transactionID: "3546245666000",
          accountNumber: values.nomorRek,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
        }
      )
      .then((res) => {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        console.log(`Request took ${responseTime} milliseconds`);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Container
        className="bodyHome"
        style={{ marginLeft: "4%", width: "80%" }}
      >
        <Form onSubmit={search}>
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
                <Form.Control
                  type="text"
                  placeholder="Nomor Rekening"
                  onChange={(u) =>
                    setValues({ ...values, nomorRek: u.target.value })
                  }
                />
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
                  onChange={(u) =>
                    setValues({ ...values, nomorCabang: u.target.value })
                  }
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
              <Button
                variant="outline-danger"
                style={{ marginLeft: "4px" }}
                onClick={search}
              >
                Print
              </Button>{" "}
            </Col>
          </Row>
        </Form>
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
                onChange={(u) =>
                  setValues({ ...values, tanggal: u.target.value })
                }
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
              <Form.Control
                type="text"
                placeholder="Nomor Rekening"
                disabled
                onChange={(u) =>
                  setValues({ ...values, nomorRek: u.target.value })
                }
              />
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
                onChange={(u) =>
                  setValues({ ...values, branch: u.target.value })
                }
              />
            </Col>
          </Row>
        </Form.Group>
      </Container>

      <Table striped style={{ marginLeft: "4%", width: "80%" }}>
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

      <Form.Group
        controlId="formText"
        className="mb-3"
        style={{ marginLeft: "4%", width: "80%" }}
      >
        <Form.Label>
          <Row style={{ width: "900px" }}>
            <Col>
              <h5>
                <i>Total Value</i>
              </h5>
            </Col>
          </Row>
        </Form.Label>

        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Online Balance</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Online Balance"
                disabled
                onChange={(u) =>
                  setValues({ ...values, onlineBal: u.target.value })
                }
              />
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
                onChange={(u) =>
                  setValues({ ...values, workingBal: u.target.value })
                }
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
                onChange={(u) =>
                  setValues({ ...values, workingBal: u.target.value })
                }
              />
            </Col>
          </Row>
        </Form.Group>
      </Form.Group>
    </div>
  );
}
