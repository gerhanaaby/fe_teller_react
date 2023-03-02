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
import ModalComponent from "../components/modal";

export default function InternalTransfer() {
  const [values, setValues] = useState({
    nomorRekDebet: "",
    nomorRekKredit: "",
    namaProdukDebet: "",
    namaProdukKredit: "",
    namaPemilikDebet: "Nama Pemilik Debet",
    namaPemilikKredit: "Nama Pemilik Kredit",
    kodeCabangDebet: "",
    kodeCabangKredit: "",
    namaCabangKredit: "",
    charge: "",
    jumlahTotal: "",
    kodeopt: "",
    message: "",
    ftopt: "",
    tanggalTransaksi: "",
  });

  const [mataUangRek, setJenisMataUang] = useState("Jenis Mata Uang");

  const [jumlah, setJumlah] = useState("Jumlah");

  const [namaCabangDebet, setNamaCabangDebet] = useState("Nama Cabang");

  const handleSelectMataUang = (getMataUang) => {
    setJenisMataUang(getMataUang);
  };

  function handleNamaPemilik(getNamaPemilik) {
    setValues({ ...values, namaPemilikDebet: getNamaPemilik });
  }

  function handleNamaCabang(getNamaCabang) {
    setNamaCabangDebet(getNamaCabang);
  }

  function handleJumlah(getJumlah) {
    setJumlah(getJumlah);
  }

  const hostInquiry = (e) => {
    e.preventDefault();

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
        setModalShow(true);
        setModalBody(res.data.responseMessage);

        if (res.data.responseMessage !== "Account not sniffed") {
          handleNamaCabang(res.data.data.branchName);
          handleNamaPemilik(res.data.data.accountName);
          handleSelectMataUang(res.data.data.currency);
        }
      })
      .catch((err) => {
        setModalBody(err.message);
        setModalShow(true);
        console.error(err);
      });
  };

  const sendTransaction = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    console.log(mataUangRek);
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postinternaltransfer",
        {
          referenceId: "MDLN-125123213129",
          debitAccountNo: values.nomorRekDebet,
          creditAccountNo: values.nomorRekKredit,
          creditAmount: jumlah,
          creditCurrency: mataUangRek,
          transactionDate: "20210726",
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
        const endTime = performance.now();
        console.log(`Time taken: ${endTime - startTime} milliseconds`);
        console.log(res.data);

        setModalShow(true);
        setModalBody(res.data.responseMessage);
        //setJenisMataUang("Jenis Mata Uang");
        if (res.data.responseMessage !== "null") {
          handleSelectMataUang(res.data.creditCurrency);
          handleJumlah(res.data.data.debitAmount);
        }
      })
      .catch((err) => {
        const endTime = performance.now();
        console.log(`Time taken: ${endTime - startTime} milliseconds`);
        console.log(err);
        //setJenisMataUang("Jenis Mata Uang");
        setModalBody(err.message);
        setModalShow(true);
      });
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalBody, setModalBody] = React.useState("");
  return (
    <Container style={{ marginLeft: "4%", width: "80%" }}>
      <ModalComponent
        modalHeader={"Respones"}
        modalBody={modalBody}
        show={modalShow}
        handleClose={() => setModalShow(false)}
        textButtonLeft={"Close"}
        secondButton={false}
      />
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
              title={mataUangRek}
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
              placeholder={values.namaPemilikKredit}
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
            <Form.Control placeholder={namaCabangDebet} disabled />
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
              placeholder={jumlah}
              onChange={(u) => setJumlah(u.target.value)}
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
