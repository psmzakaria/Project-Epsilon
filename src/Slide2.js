import React from 'react';
import { Image } from "react-bootstrap";

const Panel = () => (
    <div>
   <div>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body><Image src="/thumbnail.png" responsive /></Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body><Image src="/thumbnail.png" responsive /></Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body><Image src="/thumbnail.png" responsive /></Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body><Image src="/thumbnail.png" responsive /></Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body><Image src="/thumbnail.png" responsive /></Panel.Body>
  </Panel>
</div>;     
    </div>
);

export default Panel;
