import { Button } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import RootLayout from "../../../components/layouts/RootLayout";

const AboutHome = () => {
  return (
    <div>
      <h1>About Home</h1>
      <Link href="/">
        <Button type="primary">Button</Button>
      </Link>

      <div>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutHome;

AboutHome.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
