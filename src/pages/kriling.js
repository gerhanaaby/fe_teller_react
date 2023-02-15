import { CenterFocusStrong } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import SidebarComponent from "../components/sibebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Kriling() {
  const navigate = useNavigate();

  function handleCancel() {
    navigate("/home");
  }

  const [values, setValues] = useState({
    nomorRek: "",
    namaProduk: "",
    mataUangRek: "",
    namaPemilik: "",
    noIdPemilik: "",
    kodeCabang: "",
    namaCabang: "",
    noWarkat: "",
    namaBank: "",
    kodeTransaksi: "",
    memberCode: "",
    jumlah: "",
    charge: "",
    jumlahTotal: "",
    message: "",
    slipNum: "",
    tanggalKriling: "",
  });

  const hostInquiry = (e) => {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        creditAccountNo: values.noWarkat,
        amount: values.jumlahTotal,
        beneficiaryResidentStatus: "1",
        clearingCode: "BBBAIDJA",
        remark: values.message,
        transactionDate: values.tanggalKriling,
        transactionTime: "",
        clearingTransactionCode: "50",
        referenceId: "MDLN-803837197299",
        paymentDetails1: values.message,
        senderName: values.namaPemilik,
        paymentDetails2: "",
        paymentDetails3: "",
        debitAccountNo: values.nomorRek,
        beneficiaryNationStatus: "0",
        beneficiaryType: "1",
        beneficiaryName: "ALTO",
        chargeAmount: values.charge,
        currency: values.mataUangRek,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.error(err));
  };

  return (
    <body
      style={{
        backgroundColor: "white",
        width: "1120px",
        paddingTop: "2%",
        paddingLeft: "23%",
      }}
    >
      <Container class="bodyHome">
        <Form onSubmit={hostInquiry}>
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
                <Form.Label>Nama Produk</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Nama Produk"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, namaProduk: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Dropdown>
            <Row>
              <Col>
                <b>Mata Uang Rekening</b>
              </Col>
              <Col>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Jenis Mata Uang
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">IDR</Dropdown.Item>
                  <Dropdown.Item href="#">USD</Dropdown.Item>
                  <Dropdown.Item href="#">SGD</Dropdown.Item>
                </Dropdown.Menu>
              </Col>
            </Row>
          </Dropdown>
          <br />
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Nama Pemilik</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Nama Pemilik"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, namaPemilik: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>No. Identitas Pemilik</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="No. Identitas Pemilik"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, noIdPemilik: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Kode Cabang</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Kode"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, kodeCabang: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control placeholder="Nama Cabang" disabled />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>No. Warkat Rekening</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Jenis Warkat"
                  onChange={(u) =>
                    setValues({ ...values, jenisWarkat: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nomor Warkat"
                  onChange={(u) =>
                    setValues({ ...values, noWarkat: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Bank</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Nama Bank"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, namaBank: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Dropdown>
            <Row>
              <Col>
                <b>Kode Transaksi</b>
              </Col>
              <Col>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Transaction Code
                </Dropdown.Toggle>
                <Dropdown.Menu
                  onChange={(u) =>
                    setValues({ ...values, kodeTransaksi: u.target.value })
                  }
                >
                  <Dropdown.Item href="#">00 - Cheque </Dropdown.Item>
                  <Dropdown.Item href="#">01 - Bilyet Giro</Dropdown.Item>
                  <Dropdown.Item href="#">20 - Wesel</Dropdown.Item>
                </Dropdown.Menu>
              </Col>
            </Row>
          </Dropdown>
          <br />
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>Member Code</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Member Code"
                  onChange={(u) =>
                    setValues({ ...values, memberCode: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>Jumlah</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Jumlah"
                  onChange={(u) =>
                    setValues({ ...values, jumlah: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Charge</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Charge"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, charge: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Jumlah Total</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Jumlah Total"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, jumlahTotal: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>Message</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Pesan"
                  onChange={(u) =>
                    setValues({ ...values, pesan: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>Slip Number</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Slip Number"
                  onChange={(u) =>
                    setValues({ ...values, slipNum: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Tanggal Kriling</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Tanggal Kriling"
                  disabled
                  onChange={(u) =>
                    setValues({ ...values, tanggalKriling: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <hr />
            <Col>
              <Button variant="danger" type="submit">
                Host Inquiry
              </Button>{" "}
              <Button variant="outline-danger" onClick={handleCancel()}>
                Cancel
              </Button>{" "}
            </Col>
          </Row>
        </Form>
      </Container>
    </body>
  );
}
