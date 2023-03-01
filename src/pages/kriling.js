import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import axios from "axios";

export default function Kriling() {
  const [values, setValues] = useState({
    nomorRek: "",
    namaProduk: "Nama Produk",
    namaPemilik: "Nama Pemilik",
    noIdPemilik: "No Identitas Pemilik",
    kodeCabang: "",
    noWarkat: "",
    namaBank: "",
    kodeTransaksi: "Transaction Code",
    memberCode: "",
    jumlah: "",
    charge: "",
    jumlahTotal: "",
    message: "",
    slipNum: "",
    tanggalKriling: "",
  });

  const [mataUangRek, setJenisMataUang] = useState({
    mataUangRek: "Jenis Mata Uang",
  });

  const [namaCabang, setNamaCabang] = useState({
    namaCabang: "Nama Cabang",
  });

  const handleSelectKodeTransaksi = (evt) => {
    setValues({ ...values, kodeTransaksi: evt });
  };

  const handleSelectMataUang = (getMataUang) => {
    setJenisMataUang({ mataUangRek: getMataUang });
  };

  function handleNamaPemilik(getNamaPemilik) {
    setValues({ ...values, namaPemilik: getNamaPemilik });
  }

  function handleNamaCabang(getNamaCabang) {
    setNamaCabang({ namaCabang: getNamaCabang });
  }

  const hostInquiry = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postinquirytransfer",
        {
          accountNo: values.nomorRek,
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

        if (res.data.res.responseMessage == "Account Not Found") {
          //modal
        } else {
          handleNamaCabang(res.data.data.branchName);
          handleNamaPemilik(res.data.data.accountName);
          handleSelectMataUang(res.data.data.currency);
        }

        console.log(`Values nama cabang : ${values.namaCabang}`);
        console.log(`Values nama pemilik : ${values.namaPemilik}`);
        //handleSelectMataUang(res.data.data.currency);

        console.log(`Request took ${responseTime} milliseconds`);
        console.log(`Branch Name : ${res.data.data.branchName} `);
        console.log(`Account Name : ${res.data.data.accountName} `);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const sendTransaction = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    axios
      .post(
        "http://10.22.100.82:5000/user/tansact/postskn",
        {
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
        console.log(`Request took ${responseTime} milliseconds`);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container className="bodyHome" style={{ marginLeft: "4%", width: "80%" }}>
      <Form.Group controlId="formText" className="mb-3">
        <Row>
          <Form.Group controlId="formText" className="mb-3">
            <Form.Label>
              <Row style={{ width: "900px" }}>
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
              placeholder={values.namaPemilik}
              disabled
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
            <Form.Control placeholder="Kode" disabled />
          </Col>
          <Col>
            <Form.Control placeholder={namaCabang.namaCabang} disabled />
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
            <DropdownButton
              variant="danger"
              id="dropdown-basic"
              title={values.kodeTransaksi}
              onSelect={handleSelectKodeTransaksi}
            >
              <Dropdown.Item eventKey="Cheque">00 - Cheque </Dropdown.Item>
              <Dropdown.Item eventKey="Bilyet Giro">
                01 - Bilyet Giro
              </Dropdown.Item>
              <Dropdown.Item eventKey="Wesel">20 - Wesel</Dropdown.Item>
            </DropdownButton>
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
              onChange={(u) => setValues({ ...values, pesan: u.target.value })}
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
