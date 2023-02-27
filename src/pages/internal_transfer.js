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
    namaPemilikDebet: "",
    namaPemilikKredit: "",
    kodeCabangDebet: "",
    kodeCabangKredit: "",
    namaCabangKredit: "",
    jumlah: "",
    charge: "",
    jumlahTotal: "",
    kodeopt: "",
    message: "",
    ftopt: "",
    tanggalTransaksi: "",
  });

  const [mataUangRek, setJenisMataUang] = useState({
    mataUangRek: "Jenis Mata Uang",
  });

  const [namaCabangDebet, setNamaCabangDebet] = useState({
    namaCabangDebet: "Nama Cabang",
  });

  const handleSelectMataUang = (getMataUang) => {
    setJenisMataUang({ mataUangRek: getMataUang });
  };

  function handleNamaPemilik(getNamaPemilik) {
    setValues({ ...values, namaPemilikDebet: getNamaPemilik });
  }

  function handleNamaCabang(getNamaCabang) {
    setNamaCabangDebet({ namaCabangDebet: getNamaCabang });
  }

  const hostInquiry = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postinquirytransfer",
        {
          accountNo: values.nomorRekDebet,
          referenceId: "154500902248",
        },
        {
          headers: {
            "Content-Type": "application/json",
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

        handleNamaCabang(res.data.data.branchName);
        handleNamaPemilik(res.data.data.accountName);
        handleSelectMataUang(res.data.data.currency);

        console.log(`Request took ${responseTime} milliseconds`);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const sendTransaction = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    // console.log(localStorage.getItem("token")); ${localStorage.getItem("token")}
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postinternaltransfer",
        {
          referenceId: "MDLN-125123213129",
          debitAccountNo: values.nomorRekDebet,
          creditAccountNo: values.nomorRekKredit,
          creditAmount: values.jumlah,
          creditCurrency: values.mataUangRek,
          transactionDate: values.tanggalTransaksi,
          remark: values.pesan,
          beneficiaryName: values.namaPemilikKredit,
          debitAccountName: values.namaPemilikDebet,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        console.log(`Request took ${responseTime} milliseconds`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container style={{ marginLeft: "4%", width: "80%" }}>
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
              disabled
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
              disabled
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
              title={mataUangRek.mataUangRek}
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
              placeholder={values.namaPemilikDebet}
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
              disabled
              onChange={(u) =>
                setValues({ ...values, kodeCabangDebet: u.target.value })
              }
            />
          </Col>
          <Col>
            <Form.Control
              placeholder={namaCabangDebet.namaCabangDebet}
              disabled
            />
          </Col>
          <Col>
            <Form.Label>Kode Cabang</Form.Label>
          </Col>
          <Col>
            <Form.Control
              placeholder="Kode"
              disabled
              onChange={(u) =>
                setValues({ ...values, kodeCabangKredit: u.target.value })
              }
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Nama Cabang"
              disabled
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
              onChange={(u) => setValues({ ...values, jumlah: u.target.value })}
            />
          </Col>
          <Col>
            <Form.Label>Charge</Form.Label>
          </Col>
          <Col>
            <Form.Control
              placeholder="Charge"
              disabled
              onChange={(u) => setValues({ ...values, charge: u.target.value })}
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
              disabled
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
              onChange={(u) => setValues({ ...values, pesan: u.target.value })}
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
            variant="danger"
            type="submit"
            onClick={sendTransaction}
            style={{ marginLeft: "8px" }}
          >
            Send Transaction
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
    </Container>
  );
}
