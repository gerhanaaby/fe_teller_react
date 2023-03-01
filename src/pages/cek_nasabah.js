import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Table,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./../css/main.css";

export default function CekNasabah() {
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

  const [date, setDate] = useState(new Date());
  // const hostInquiry = (e) => {
  //   e.preventDefault();
  //   const startTime = performance.now();
  //   axios
  //     .post(
  //       "http://10.22.100.82:5000/user/nasabah/" + values.nomorRek,
  //       {
  //         accountNo: values.nomorRekDebet,
  //         referenceId: "154500902248",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Headers":
  //             "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const endTime = performance.now();
  //       const responseTime = endTime - startTime;

  //       handleNamaCabang(res.data.data.branchName);
  //       handleNamaPemilik(res.data.data.accountName);
  //       handleSelectMataUang(res.data.data.currency);

  //       console.log(`Request took ${responseTime} milliseconds`);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const sendTransaction = (e) => {
  //   e.preventDefault();
  //   const startTime = performance.now();
  //   // console.log(localStorage.getItem("token")); ${localStorage.getItem("token")}
  //   axios
  //     .post(
  //       "http://10.22.100.82:5000/user/transac/postinternaltransfer",
  //       {
  //         referenceId: "MDLN-125123213129",
  //         debitAccountNo: values.nomorRekDebet,
  //         creditAccountNo: values.nomorRekKredit,
  //         creditAmount: jumlah.jumlah,
  //         creditCurrency: mataUangRek.mataUangRek,
  //         transactionDate: values.tanggalTransaksi,
  //         remark: values.pesan,
  //         beneficiaryName: values.namaPemilikKredit,
  //         debitAccountName: values.namaPemilikDebet,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Access-Control-Allow-Origin": "*",
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       const endTime = performance.now();
  //       const responseTime = endTime - startTime;
  //       if (res.data.res.responseMessage == "Account Not Found") {
  //         //modal
  //       } else {
  //         handleSelectMataUang(res.data.data.creditCurrency);
  //         handleJumlah(res.data.data.debitAmount);
  //       }
  //       console.log(`Values nama currency : ${mataUangRek.mataUangRek}`);
  //       console.log(`Values nama pemilik : ${jumlah.jumlah}`);
  //       handleSelectMataUang(res.data.data.creditCurrency);
  //       handleJumlah(res.data.data.debitAmount);

  //       console.log(`Request took ${responseTime} milliseconds`);
  //     })
  //     .catch((err) => console.error(err));
  // };
  return (
    <div>
      <Container
        className="bodyHome"
        style={{ marginLeft: "4%", width: "80%" }}
      >
        <Form>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Form.Group controlId="formText" className="mb-3">
                <Form.Label>
                  <Row style={{ width: "900px" }}>
                    <Col>
                      <h5>
                        <i>Data Customer Individual</i>
                      </h5>
                      <span>Long CIF</span>
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
                  <b>Created By</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Created By"
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
                <Form.Label>
                  <b>Nomor CIF</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Nomor CIF"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>
                  <b>Creation Date</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Creation Date"
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
                <Form.Label>
                  <b>Mnemonic</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Mnemonic"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>
                  <b>Last Change</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Last Change"
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
                <Form.Label>
                  <b>KSEI SID</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="KSEI SID"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Label>
                  <b>Supervisor ID</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Supervisor ID"
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
                <Form.Label>
                  <b>Kelengkapan Dokumen</b>
                </Form.Label>
              </Col>
              <Col>
                <Dropdown>
                  <Row>
                    <Col>
                      <DropdownButton
                        variant="danger"
                        id="dropdown-basic"
                        title={"BELUM"}
                        //onSelect={handleSelectMataUang}
                      >
                        <Dropdown.Item eventKey="IDR">IDR</Dropdown.Item>
                        <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                        <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </Dropdown>
              </Col>

              <Col>
                <Form.Label>
                  <b>Status</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Status"
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
                  }
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>

        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Nama Lengkap</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Nama Lengkap"
                onChange={(u) =>
                  setValues({ ...values, nomorRekDebet: u.target.value })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Tempat Lahir</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Tempat Lahir"
                onChange={(u) =>
                  setValues({ ...values, nomorRekDebet: u.target.value })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Tanggal Lahir</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Group controlId="duedate">
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Jenis Kelamin</b>
              </Form.Label>
            </Col>
            <Col>
              <Col>
                <Dropdown>
                  <Row>
                    <Col>
                      <DropdownButton
                        variant="danger"
                        id="dropdown-basic"
                        title={"FEMALE"}
                        //onSelect={handleSelectMataUang}
                      >
                        <Dropdown.Item eventKey="IDR">IDR</Dropdown.Item>
                        <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                        <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </Dropdown>
              </Col>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Sebutan</b>
              </Form.Label>
            </Col>
            <Col>
              <Col>
                <Dropdown>
                  <Row>
                    <Col>
                      <DropdownButton
                        variant="danger"
                        id="dropdown-basic"
                        title={"--"}
                        //onSelect={handleSelectMataUang}
                      >
                        <Dropdown.Item eventKey="IDR">IDR</Dropdown.Item>
                        <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                        <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </Dropdown>
              </Col>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Gelar</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Gelar"
                onChange={(u) =>
                  setValues({ ...values, nomorRekDebet: u.target.value })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Agama</b>
              </Form.Label>
            </Col>
            <Col>
              <Col>
                <Dropdown>
                  <Row>
                    <Col>
                      <DropdownButton
                        variant="danger"
                        id="dropdown-basic"
                        title={"--"}
                        //onSelect={handleSelectMataUang}
                      >
                        <Dropdown.Item eventKey="IDR">IDR</Dropdown.Item>
                        <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                        <Dropdown.Item eventKey="SGD">SGD</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </Dropdown>
              </Col>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Kependudukan</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Kependudukan"
                onChange={(u) =>
                  setValues({ ...values, nomorRekDebet: u.target.value })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Negara Tempat Tinggal</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="KSEI SID"
                onChange={(u) =>
                  setValues({ ...values, nomorRekDebet: u.target.value })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <hr />
      </Container>
    </div>
  );
}
