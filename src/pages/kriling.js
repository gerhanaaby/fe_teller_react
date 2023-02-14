import { CenterFocusStrong } from "@mui/icons-material";
import React from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import SidebarComponent from "../components/sibebar";
import "./../css/home.css";

export default function Kriling() {
  return (
    <body
      style={{
        backgroundColor: "white",
        width: "550px",
        top: "50%",
        left: "50%",
      }}
    >
      <SidebarComponent style={{ float: "left" }}></SidebarComponent>
      <Container class="bodyHome">
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>
                <b>Nomor Rekening</b>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Nomor Rekening" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Nama Produk</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Nama Produk" disabled />
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
                <Dropdown.Item href="#/action-1">IDR</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SGD</Dropdown.Item>
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
              <Form.Control type="text" placeholder="Nama Pemilik" disabled />
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
              <Form.Control placeholder="Jenis Warkat" />
            </Col>
            <Col>
              <Form.Control placeholder="Nomor Warkat" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Bank</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Nama Bank" disabled />
            </Col>
          </Row>
        </Form.Group>
        <Dropdown>
          <Row>
            <Col>Kode Transaksi</Col>
            <Col>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Transaction Code
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">00 - Cheque </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  01 - Bilyet Giro
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">20 - Wesel</Dropdown.Item>
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
              <Form.Control type="text" placeholder="Member Code" />
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
              <Form.Control placeholder="Jumlah" />
            </Col>
            <Col>
              <Form.Label>Charge</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Charge" disabled />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formText" className="mb-3">
          <Row>
            <Col>
              <Form.Label>Jumlah Total</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Jumlah Total" disabled />
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
              <Form.Control type="text" placeholder="Pesan" />
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
              <Form.Control type="text" placeholder="Slip Number" />
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
              />
            </Col>
          </Row>
        </Form.Group>
      </Container>
    </body>
  );
}
