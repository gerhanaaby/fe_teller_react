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
import ModalComponent from "../components/modal";
import { base64Image } from "../utils/utils";

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

  const handleMnemonic = (getsetMnemonic) => {
    setMnemonic({ mnemonic: getsetMnemonic });
  };

  const [kseisid, setKseisid] = useState({
    kseisid: "KSEIS ID",
  });

  const handleNoCif = (getCif) => {
    setNoCIF({ nomorCIF: getCif });
  };
  const handleKseisid = (getKseisid) => {
    setKseisid({ kseisid: getKseisid });
  };

  const [kelengkapanDokumen, setKelengkapanDokumen] = useState({
    kelengkapanDokumen: "Kelengkapan Dokumen",
  });

  const handleKelengkapanDokumen = (getKelengkapanDokumen) => {
    setKelengkapanDokumen({ kelengkapanDokumen: getKelengkapanDokumen });
  };

  const [namaLengkap, setNamaLengkap] = useState({
    namaLengkap: "Nama Lengkap",
  });

  const handleNamaLengkap = (getNamaLengkap) => {
    setNamaLengkap({ namaLengkap: getNamaLengkap });
  };

  const [tempatLahir, setTempatLahir] = useState({
    tempatLahir: "Tempat Lahir",
  });

  const handleTempatLahir = (getTempatLahir) => {
    setTempatLahir({ tempatLahir: getTempatLahir });
  };

  const [tanggalLahir, setTanggalLahir] = useState({
    tanggalLahir: "Tanggal Lahir",
  });

  const handleTanggalLahir = (getTanggalLahir) => {
    setTanggalLahir({ tanggalLahir: getTanggalLahir });
  };

  const [jenisKelamin, setJenisKelamin] = useState({
    jenisKelamin: "FEMALE",
  });

  const [sebutan, setSebutan] = useState({
    sebutan: "--",
  });

  const [gelar, setGelar] = useState({
    gelar: "Gelar",
  });

  const handleGelar = (getGelar) => {
    setGelar({ gelar: getGelar });
  };

  const [agama, setAgama] = useState({
    agama: "--",
  });

  const [kependudukan, setKependudukan] = useState({
    kependudukan: "YES",
  });

  const [negaraTempatTinggal, setNegaraTempatTinggal] = useState({
    negaraTempatTinggal: "Negara Tempat Tinggal",
  });

  const handleNegaraTempatTinggal = (getNegaraTempatTinggal) => {
    setNegaraTempatTinggal({ negaraTempatTinggal: getNegaraTempatTinggal });
  };

  const [createBy, setCreateBy] = useState({
    createBy: "Create By",
  });

  const handleCreateBy = (getCreateBy) => {
    setCreateBy({ createBy: getCreateBy });
  };

  const [creationDate, setCreationDate] = useState({
    creationDate: "Creation Date",
  });

  const handleCreationDate = (getCreationDate) => {
    setCreationDate({ creationDate: getCreationDate });
  };

  const [lastChange, setLastChange] = useState({
    lastChange: "Last Change",
  });

  const handleLastChange = (getLastChange) => {
    setLastChange({ lastChange: getLastChange });
  };

  const [supervisorID, setSupervisorID] = useState({
    supervisorID: "Supervisor ID",
  });

  const handleSupervisorID = (getSupervisorID) => {
    setSupervisorID({ supervisorID: getSupervisorID });
  };

  const [status, setStatus] = useState({
    status: "Status",
  });

  const handleStatus = (getStatus) => {
    setStatus({ status: getStatus });
  };

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

  const tampilkanImageTTD = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    axios
      .get(
        "http://10.22.100.82:5000/user/utils/getb64/" + nomorCIF.nomorCIF,
        {},
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
        console.log(`Time taken: ${endTime - startTime} milliseconds`);
        setModalShowImage(true);
        //console.log(res);
        setImage(base64Image(res.data.message, "jpeg"));
        //const responseTime = endTime - startTime;
        console.log(res);
      })
      .catch((err) => {
        setModalShowImage(true);
        console.error(err);
      });
  };
  const cariDataNasabah = (e) => {
    e.preventDefault();
    const startTime = performance.now();

    axios
      .get(
        "http://10.22.100.82:5000/user/nasabah/" + nomorCIF.nomorCIF + "/get",
        {},
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
        console.log(res);

        handleSupervisorID(res.data.supervisorId);
        handleCreateBy(res.data.Createdby);
        handleCreationDate(res.data.CreationDate);
        handleGelar(res.data.titleAfterName);
        handleSelectAgama(res.data.religion);
        handleKseisid(res.data.kseisid);
        handleKelengkapanDokumen(res.data.documentFlag);
        handleSelectJenisKelamin(res.data.gender);
        handleSelectSebutan(res.data.titleBeforeName);
        handleMnemonic(res.data.mnemonics);
        handleLastChange(res.data.lastchange);
        handleSelectKependudukan(res.data.resident);
        handleNamaLengkap(res.data.Nama);
        handleNegaraTempatTinggal(res.data.nationality);
        handleTanggalLahir(res.data.TanggalLahir);
        handleTempatLahir(res.data.birthPlace);
        handleStatus(res.data.custStatus);
      })
      .catch((err) => {
        setModalShow(true);
        console.error(err);
      });
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowImage, setModalShowImage] = React.useState(false);
  //const image
  const [image, setImage] = useState();
  return (
    <div>
      <ModalComponent
        modalHeader={"Message Response"}
        modalBody={"Invalid, Account not found"}
        show={modalShow}
        handleClose={() => setModalShow(false)}
        textButtonLeft={"Close"}
        secondButton={false}
      />
      <ModalComponent
        modalHeader={"Image"}
        modalBody={image}
        show={modalShowImage}
        handleClose={() => setModalShowImage(false)}
        textButtonLeft={"Close"}
        secondButton={false}
      />
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
                        <i>Cek Nasabah - Data Customer Individual</i>
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
                    <i>
                      Nasabah bersedia memberikan informasi kepada pihak lain
                    </i>
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
                      required
                    />
                    <Form.Check
                      inline
                      label="Tidak Setuju"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      required
                    />
                  </div>
                ))}
              </Col>
              <Col>
                <Form.Label>Created By</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={createBy.createBy}
                  // onChange={(u) =>
                  //   setValues({ ...values, nomorRekKredit: u.target.value })
                  // }
                  disabled
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
                  onChange={
                    (u) => handleNoCif(u.target.value)
                    //setValues({ ...values, nomorCIF: u.target.value })
                  }
                  required
                />
              </Col>
              <Col>
                <Form.Label>Creation Date</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={creationDate.creationDate}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
                  }
                  disabled
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Mnemonic</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={mnemonic.mnemonic}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                  disabled
                />
              </Col>
              <Col>
                <Form.Label>Last Change</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={lastChange.lastChange}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
                  }
                  disabled
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>KSEI SID</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={kseisid.kseisid}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                  disabled
                />
              </Col>
              <Col>
                <Form.Label>Supervisor ID</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={supervisorID.supervisorID}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
                  }
                  disabled
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Kelengkapan Dokumen</Form.Label>
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
                <Form.Label>Status</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={status.status}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekKredit: u.target.value })
                  }
                  disabled
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formText" className="mb-3">
            <Row>
              <Col>
                <Form.Label>Nama Lengkap</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={namaLengkap.namaLengkap}
                  onChange={(u) =>
                    setValues({ ...values, nomorRekDebet: u.target.value })
                  }
                  disabled
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
                  disabled
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
                    disabled
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
                  disabled
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
                  disabled
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
              onClick={cariDataNasabah}
            >
              Cari Data Nasabah
            </Button>
            <Button
              variant="danger"
              type="submit"
              style={{ marginLeft: "8px" }}
              onClick={tampilkanImageTTD}
            >
              Tampilkan Tanda Tangan
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
