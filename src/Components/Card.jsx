import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function ShowCaseCard() {
  return (

    <>
    <hr />
    <Row id='row-3' xs={1} md={2} className="g-4 mt-4">

                <Col>
                <Card className='no-border'>
                    <Card.Body>
                    <Card.Title className='text-center'>Ubuntu</Card.Title>
                    <Card.Text>
                    I am because we are. Zulu phrase "Umuntu ngumuntu ngabantu", which literally means that a person is a person through other people. ... Ubuntu is that nebulous concept of common humanity, oneness: humanity, you and me both.
                    </Card.Text>
                    </Card.Body>

                </Card>

                
                </Col>


                <Col>
                <Card className='no-border'>
                    <Card.Body>
                    <Card.Title className='text-center'>Moor Identity</Card.Title>
                    <Card.Text>
                    Furthermore, racial taxonomies historically facilitated redlining, evident in communities with higher eumelanin/carbon levels. This systemic injustice is exemplified by disproportionate numbers of wrongfully convicted Black individuals. Redlining epitomizes the systematic marginalization of minorities, primarily based on their socioeconomic identity. Mortgage lenders deny loans or credit based on race, perpetuating inequality in housing and finance.
                    </Card.Text>
                    </Card.Body>

                </Card>

                
                </Col>



                <Col>
                <Card className='no-border'>
                    <Card.Body>
                    <Card.Title className='text-center'>Moor Private Equity</Card.Title>
                    <Card.Text>
                    We will focus on globally scaled technology platforms that enable transformation for a better future. Moor Private Equity investment fund leverages financial, human, and social capital to help founders build sustainable, technology-enabled businesses.
                    </Card.Text>
                    </Card.Body>

                </Card>

                
                </Col>



                <Col>
                <Card className='no-border'>
                    <Card.Body>
                    <Card.Title className='text-center'>Moor Property</Card.Title>
                    <Card.Text>
                   We will concentrate on acquiring real estate properties for developing housing cooperatives in native communities across the globe starting within the Nation's Capital branching into South America, Afraka, and Afro-Asiatiic countries. 
                    </Card.Text>
                    </Card.Body>

                </Card>

                
                </Col>



    </Row>


    </>

  )
}
