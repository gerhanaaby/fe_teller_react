import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";
import "./../css/main.css";
import ModalComponent from "../components/modal";

export default function CekSaldo() {
  const [nomorRek, setNomorRek] = useState("Nomor Rekening");
  const [branch, setBranch] = useState("Nama Cabang");
  const [nomorCabang, setNomorCabang] = useState("Nomor Cabang");
  const [tanggal, setTanggal] = useState("Tanggal Hari Ini");
  const [accountName, setAccountName] = useState("Nama Akun");
  const [custNo, setCustNo] = useState("Nomor Cust");
  const [limit, setLimit] = useState("Limit");
  const [category, setCategory] = useState("Categori");
  const [ccy, setCcy] = useState("CCY");
  const [onlineBal, setOnlineBal] = useState("Online Balance");
  const [workingBal, setWorkingBal] = useState("Working Balance");
  const [clearedBal, setClearedBal] = useState("Cleared Balance");
  const [openDate, setOpenDate] = useState("Open Date");

  const handleNomorRek = (getNomorRek) => {
    setNomorRek(getNomorRek);
  };

  const handleBranch = (getBranch) => {
    setBranch(getBranch);
  };
  const handleNomorCabang = (getNomorCabang) => {
    setNomorCabang(getNomorCabang);
  };

  const handleAccountName = (getAccountName) => {
    setAccountName(getAccountName);
  };
  const handleCustNo = (getCustNo) => {
    setCustNo(getCustNo);
  };

  const handleOnlineBal = (getOnlineBal) => {
    setOnlineBal(getOnlineBal);
  };
  const handleWorkingBal = (getWorkingBal) => {
    setWorkingBal(getWorkingBal);
  };

  const search = (e) => {
    e.preventDefault();

    const startTime = performance.now();
    console.log(nomorRek);
    axios
      .post(
        "http://10.22.100.82:5000/user/transac/postgetdetail",
        {
          transactionID: "3546245666000",
          accountNumber: nomorRek,
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
        console.log(`Time taken: ${endTime - startTime} milliseconds`);

        console.log(res.data);

        setModalShow(true);
        setModalBody(res.data.responseMessage);
        if (
          res.data.responseMessage !==
          "No records were found that matched the selection criteria"
        ) {
          handleNomorRek(res.data.accountNumber);
          handleOnlineBal(res.data.availableBalance);
          handleBranch(res.data.bankBranch);
          handleWorkingBal(res.data.workingBalance);
          handleAccountName(res.data.name);
          handleCustNo(res.data.accountType);
        }
      })
      .catch((err) => {
        setModalBody(err);
        setModalShow(true);
      });
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalBody, setModalBody] = React.useState("");
  return (
    <div>
      <Container
        className="bodyHome"
        style={{ marginLeft: "4%", width: "80%" }}
      >
        <ModalComponent
          modalHeader={"Respones"}
          modalBody={modalBody}
          show={modalShow}
          handleClose={() => setModalShow(false)}
          textButtonLeft={"Close"}
          secondButton={false}
        />
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
                  placeholder={nomorRek}
                  onChange={(u) => setNomorRek(u.target.value)}
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
                <Form.Control type="text" placeholder={nomorCabang} disabled />
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
              <Form.Control type="text" placeholder={tanggal} disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Nomor Rekening</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder={nomorRek} disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-5">
          <Row>
            <Col>
              <Form.Label>Nama Cabang</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder={branch} disabled />
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
            <td>{nomorRek}</td>
            <td>{accountName}</td>
            <td>{custNo}</td>
            <td>{limit}</td>
            <td>{category}</td>
            <td>{ccy}</td>
            <td>{onlineBal}</td>
            <td>{workingBal}</td>
            <td>{clearedBal}</td>
            <td>{openDate}</td>
            <td>{branch}</td>
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
              <Form.Control type="text" placeholder={onlineBal} disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Working Balance</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder={workingBal} disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-5">
          <Row>
            <Col>
              <Form.Label>Cleared Balance</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder={clearedBal} disabled />
            </Col>
          </Row>
        </Form.Group>
      </Form.Group>
    </div>
  );
}
