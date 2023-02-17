import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

export default function InternalTransfer() {
  const [values, setValues] = useState({
    nomorRekDebet: "",
    nomorRekKredit: "",
    namaProdukDebet: "",
    namaProdukKredit: "",
    mataUangRek: "Jenis Mata Uang",
    namaPemilikDebet: "",
    namaPemilikKredit: "",
    kodeCabangDebet: "",
    kodeCabangKredit: "",
    namaCabangDebet: "",
    namaCabangKredit: "",
    jumlah: "",
    charge: "",
    jumlahTotal: "",
    kodeopt: "",
    message: "",
    ftopt: "",
    tanggalTransaksi: "",
  });

  const handleSelectMataUang = (evt) => {
    setValues({ ...values, mataUangRek: evt });
  };

  const hostInquiry = (e) => {
    e.preventDefault();
    // console.log(localStorage.getItem("token")); ${localStorage.getItem("token")}
    axios
      .post(
        "http://localhost:5000/user/transac/postinternaltransfer",
        {
          referenceId: "MDLN-125123213129",
          debitAccountNo: values.nomorRekDebet,
          creditAccountNo: values.nomorRekKredit,
          creditAmount: values.jumlah,
          creditCurrency: values.mataUangRek,
          transactionDate: values.tanggalTransaksi,
          remark: values.pesan,
          beneficiaryName: values.namaProdukKredit,
          debitAccountName: values.namaPemilikDebet,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Acess-Control-Allow-Origin": "*",
            aw: "xxx",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log();
        // localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        top: "18%",
        left: "20%",
        width: "1000px",
        zIndex: "-2",
      }}
    >
      <Container class="bodyHome">
        <Form onSubmit={hostInquiry}>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Form.Group controlId="formText" className="mb-3">
                <Form.Label>
                  <Row style={{ width: "900px" }}>
                    <Col>
                      <h5>
                        <i>Internal Transfer</i>
                      </h5>
                      <span>Transfer Antar Bank Sinarmas</span>
                    </Col>
                    <Col>
                      <h5>
                        <i>Case-ID : IT-202302150001</i>
                      </h5>
                    </Col>
                  </Row>
                </Form.Label>
                <hr />
              </Form.Group>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b style={{ color: "red" }}>Rekening Debet</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Label>
                  <b style={{ color: "red" }}>Rekening Kredit</b>
                </Form.Label>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>
                  <b>Nomor Rekening</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nomor Rekening"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>
                  <b>Nomor Rekening</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nomor Rekening"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
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
                  placeholder="Nama Produk"
                  onChange={(u) =>
                    setValues({ ...values, namaProdukDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Nama Produk</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nama Produk"
                  onChange={(u) =>
                    setValues({ ...values, namaProdukKredit: u.target.value })
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
                <DropdownButton
                  variant="danger"
                  id="dropdown-basic"
                  title={values.mataUangRek}
                  onSelect={handleSelectMataUang}
                >
                  <Dropdown.Item eventKey="IDR">IDR</Dropdown.Item>
                  <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                  <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col></Col>
              <Col></Col>
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
                  placeholder="Nama Pemilik"
                  onChange={(u) =>
                    setValues({ ...values, namaPemilikDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Nama Pemilik</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nama Pemilik"
                  onChange={(u) =>
                    setValues({ ...values, namaPemilikKredit: u.target.value })
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
                  //disabled
                  onChange={(u) =>
                    setValues({ ...values, kodeCabangDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nama Cabang" //disabled
                  onChange={(u) =>
                    setValues({ ...values, namaCabangDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Kode Cabang</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Kode"
                  //disabled
                  onChange={(u) =>
                    setValues({ ...values, kodeCabangKredit: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nama Cabang" //disabled
                  onChange={(u) =>
                    setValues({ ...values, namaCabangKredit: u.target.value })
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
                  //disabled
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
                  placeholder="Jumlah Total"
                  onChange={(u) =>
                    setValues({ ...values, jumlahTotal: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>FT OPT</Form.Label>
              </Col>
              <Col>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Input FT-OPT`}
                      />
                    </div>
                  ))}
                </Form>
                <Form.Control
                  placeholder="Kode OPT"
                  //disabled
                  onChange={(u) =>
                    setValues({ ...values, kodeOpt: u.target.value })
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
              <Col></Col>
              <Col></Col>
            </Row>
          </Form.Group>
          <Row>
            <hr />
            <Col>
              <Button variant="danger" type="submit" onClick={hostInquiry}>
                Host Inquiry
              </Button>
              <Button
                variant="outline-danger"
                href="/home"
                style={{ marginLeft: "8px" }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Container>
    </div>
  );
}
