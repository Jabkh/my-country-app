// CountryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.translations.fra.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <input
        type="text"
        placeholder="Rechercher un pays"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCountries.map(country => (
          <Col key={country.name.common}>
            <Card>
              <Card.Img variant="top" src={country.flags.png} alt="Drapeau" />
              <Card.Body>
                <Card.Title>{country.translations.fra.common}</Card.Title>
                <Card.Text>Capitale: {country.capital}</Card.Text>
                <Card.Text>Région: {country.region}</Card.Text>
                <Card.Text>Population: {country.population}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CountryList;
