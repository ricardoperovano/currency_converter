import React, { useState, useEffect } from "react";
import { Card, Button, Form, Input } from "semantic-ui-react";

export default function Conversor({ from, to }) {
  const [loading, setLoading] = useState(false);
  const [valor, setValor] = useState(0);
  const [cotacao, setCotacao] = useState(0);

  const convert = async () => {
    setLoading(true);
    const url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=ecddbf4696186cd43208`;

    const response = await fetch(url);
    const result = await response.json();

    setCotacao(result[`${from}_${to}`]);
    setLoading(false);
  };

  useEffect(() => {
    convert();
  }, []);

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {from} para {to}
        </Card.Header>
        <Card.Meta>Cotação Atual {cotacao}</Card.Meta>
        <Card.Description>
          <Form>
            <Form.Field>
              <label>{from}:</label>
              <Input
                type="text"
                placeholder="Valor"
                onChange={(e, { value }) => setValor(value)}
                value={valor}
              />
            </Form.Field>
            <Form.Field>
              <label>{to}:</label>
              <label>{(valor * cotacao).toFixed(2)}</label>
            </Form.Field>
          </Form>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="green"
          onClick={convert}
          disabled={loading}
          loading={loading}
          fluid
        >
          Converter
        </Button>
      </Card.Content>
    </Card>
  );
}
