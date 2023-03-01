import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./../css/main.css";

export default function CekNasabah() {
  const [values, setValues] = useState({
    nomorRek: "",
  });

  const [nomorCIF, setNoCIF] = useState({
    nomorCIF: "Nomor CIF",
  });

  const [mnemonic, setMnemonic] = useState({
    mnemonic: "Mnemonic",
  });

  const [kseisid, setKseisid] = useState({
    kseisid: "KSEIS ID",
  });

  const [kelengkapanDokumen, setKelengkapanDokumen] = useState({
    kelengkapanDokumen: "Kelengkapan Dokumen",
  });

  const [namaLengkap, setnamaLengkap] = useState({
    namaLengkap: "Nama Lengkap",
  });

  const [tempatLahir, setTempatLahir] = useState({
    tempatLahir: "Tempat Lahir",
  });

  const [tanggalLahir, setTanggalLahir] = useState({
    tanggalLahir: "Tanggal Lahir",
  });

  const [jenisKelamin, setJenisKelamin] = useState({
    jenisKelamin: "FEMALE",
  });

  const [sebutan, setSebutan] = useState({
    sebutan: "--",
  });

  const [gelar, setGelar] = useState({
    gelar: "Gelar",
  });

  const [agama, setAgama] = useState({
    agama: "--",
  });

  const [kependudukan, setKependudukan] = useState({
    kependudukan: "YES",
  });

  const [negaraTempatTinggal, setNegaraTempatTinggal] = useState({
    negaraTempatTinggal: "Negara Tempat Tinggal",
  });

  const [createBy, setCreateBy] = useState({
    createBy: "Create By",
  });

  const [creationDate, setCreationDate] = useState({
    creationDate: "Creation Date",
  });

  const [lastChange, setLastChange] = useState({
    lastChange: "Last Change",
  });

  const [supervisorID, setSupervisorID] = useState({
    supervisorID: "Supervisor ID",
  });

  const [status, setStatus] = useState({
    status: "Status",
  });

  const handleSelectAgama = (getAgama) => {
    setAgama({ agama: getAgama });
  };

  const handleSelectKelenglapanDokumen = (getKelengkapanDokumen) => {
    setKelengkapanDokumen({ kelengkapanDokumen: getKelengkapanDokumen });
  };
  const handleSelectJenisKelamin = (getJenisKelamin) => {
    setJenisKelamin({ jenisKelamin: getJenisKelamin });
  };
  const handleSelectSebutan = (getSebutan) => {
    setSebutan({ sebutan: getSebutan });
  };
  const handleSelectKependudukan = (getKependudukan) => {
    setKependudukan({ kependudukan: getKependudukan });
  };

  const [date, setDate] = useState(new Date());

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
                  <b>Data Pribadi</b>
                  <br />
                  <span>
                    Nasabah bersedia memberikan informasi kepada pihak lain
                  </span>
                </Form.Label>
              </Col>
              <Col>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Setuju"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Tidak Setuju"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Col>
              <Col>
                <Form.Label>
                  <b>Created By</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={createBy.createBy}
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
                  placeholder={nomorCIF.nomorCIF}
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
                  placeholder={creationDate.creationDate}
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
                  placeholder={mnemonic.mnemonic}
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
                  placeholder={lastChange.lastChange}
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
                  placeholder={kseisid.kseisid}
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
                  placeholder={supervisorID.supervisorID}
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
                        title={kelengkapanDokumen.kelengkapanDokumen}
                        onSelect={handleSelectKelenglapanDokumen}
                      >
                        <Dropdown.Item eventKey="BELUM">BELUM</Dropdown.Item>
                        <Dropdown.Item eventKey="SUDAH">SUDAH</Dropdown.Item>
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
                  placeholder={status}
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
                  <b>Nama Lengkap</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={namaLengkap.namaLengkap}
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
                  placeholder={tempatLahir.tempatLahir}
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
                    placeholder={tanggalLahir.tanggalLahir}
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
                          title={jenisKelamin.jenisKelamin}
                          onSelect={handleSelectJenisKelamin}
                        >
                          <Dropdown.Item eventKey="FEMALE">
                            FEMALE
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="MALE">MALE</Dropdown.Item>
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
                          title={sebutan.sebutan}
                          onSelect={handleSelectSebutan}
                        >
                          <Dropdown.Item eventKey="MR">MR</Dropdown.Item>
                          <Dropdown.Item eventKey="MS">MS</Dropdown.Item>
                          <Dropdown.Item eventKey="MRS">MRS</Dropdown.Item>
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
                  placeholder={gelar.gelar}
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
                          title={agama.agama}
                          onSelect={handleSelectAgama}
                        >
                          <Dropdown.Item eventKey="ISLAM">ISLAM</Dropdown.Item>
                          <Dropdown.Item eventKey="KRISTEN">
                            KRISTEN
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="KATOLIK">
                            KATOLIK
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="HINDU">HINDU</Dropdown.Item>
                          <Dropdown.Item eventKey="BUDDHA">
                            BUDDHA
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="LAINNYA">
                            LAINNYA
                          </Dropdown.Item>
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
                <Dropdown>
                  <Row>
                    <Col>
                      <DropdownButton
                        variant="danger"
                        id="dropdown-basic"
                        title={kependudukan.kependudukan}
                        onSelect={handleSelectKependudukan}
                      >
                        <Dropdown.Item eventKey="YES">YES</Dropdown.Item>
                        <Dropdown.Item eventKey="NO">NO</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </Dropdown>
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
                  placeholder={negaraTempatTinggal.negaraTempatTinggal}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                />
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Form.Group>
          <br />
          <hr />
          <Col>
            <Button
              variant="danger"
              type="submit"
              style={{ marginLeft: "8px" }}
            >
              Cari Data Nasabah
            </Button>
            <Button
              variant="outline-danger"
              href="/home"
              style={{ marginLeft: "8px" }}
            >
              Cancel
            </Button>
          </Col>
        </Form>
      </Container>
    </div>
  );
}
